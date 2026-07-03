import { site } from "@/content/site";

/**
 * Transactional email — templates + a provider-agnostic sender.
 *
 * ⚠️  Runs SERVER-SIDE only (a serverless function or Supabase Edge Function on
 * lead insert) — never in the static client, so the API key is never exposed.
 * Env: RESEND_API_KEY, EMAIL_FROM (e.g. "Daric <hello@daric.agency>"),
 * LEAD_NOTIFY_TO (where new-lead alerts go).
 *
 * The agency triggers these two; the rest of the transactional set
 * (proposal sent, project started/completed) lives in Daric OS.
 */

export interface EmailTemplate {
  subject: string;
  html: string;
  text: string;
}

function shell(heading: string, bodyHtml: string): string {
  return `<!doctype html><html><body style="margin:0;background:#f5f5f6;font-family:Inter,Arial,sans-serif;color:#0a0a0a">
  <div style="max-width:520px;margin:0 auto;padding:32px 24px">
    <div style="font-weight:700;font-size:18px;letter-spacing:-0.02em">${site.name}</div>
    <div style="background:#fff;border:1px solid rgba(0,0,0,.08);border-radius:12px;padding:28px;margin-top:16px">
      <h1 style="font-size:20px;margin:0 0 12px">${heading}</h1>
      ${bodyHtml}
    </div>
    <p style="color:#6b6b70;font-size:12px;margin-top:16px">${site.name} — ${site.tagline}</p>
  </div></body></html>`;
}

/** Sent to the person who submitted the contact form. */
export function contactConfirmation(name: string): EmailTemplate {
  const first = name.split(" ")[0] || "there";
  const body = `Thanks for reaching out to ${site.name}. We've received your message and will reply within one business day with next steps.`;
  return {
    subject: `We received your message — ${site.name}`,
    html: shell(`Thanks, ${first} 👋`, `<p style="line-height:1.6;color:#3a3a3a">${body}</p>`),
    text: `Hi ${first},\n\n${body}\n\n— ${site.name}`,
  };
}

/** Sent to the Daric team when a new lead arrives. */
export function newLeadNotification(lead: {
  name: string;
  email: string;
  company?: string;
  message: string;
  source?: string;
}): EmailTemplate {
  const rows = [
    ["Name", lead.name],
    ["Email", lead.email],
    ["Company", lead.company || "—"],
    ["Source", lead.source || "agency"],
  ]
    .map(([k, v]) => `<tr><td style="padding:4px 12px 4px 0;color:#6b6b70">${k}</td><td style="padding:4px 0"><strong>${v}</strong></td></tr>`)
    .join("");
  return {
    subject: `New lead — ${lead.name}${lead.company ? ` (${lead.company})` : ""}`,
    html: shell("New lead 🎯", `<table style="font-size:14px">${rows}</table><p style="margin-top:16px;line-height:1.6;color:#3a3a3a">${lead.message}</p>`),
    text: `New lead\n\nName: ${lead.name}\nEmail: ${lead.email}\nCompany: ${lead.company || "—"}\nSource: ${lead.source || "agency"}\n\n${lead.message}`,
  };
}

/**
 * Send an email via Resend. No-ops (returns false) when RESEND_API_KEY is unset,
 * so the architecture is safe to ship before email is configured.
 */
export async function sendEmail(to: string, template: EmailTemplate): Promise<boolean> {
  const key = process.env.RESEND_API_KEY;
  const from = process.env.EMAIL_FROM;
  if (!key || !from) return false;

  const res = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: { Authorization: `Bearer ${key}`, "Content-Type": "application/json" },
    body: JSON.stringify({ from, to, subject: template.subject, html: template.html, text: template.text }),
  });
  return res.ok;
}
