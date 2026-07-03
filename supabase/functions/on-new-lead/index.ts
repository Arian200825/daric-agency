// Supabase Edge Function — fires on every new lead and sends two emails:
//   1. an auto-reply confirmation to the person who submitted the form
//   2. a notification to the Daric team
//
// Deploy:
//   supabase functions deploy on-new-lead --no-verify-jwt
//   supabase secrets set RESEND_API_KEY=... EMAIL_FROM="Daric <daricone.web@gmail.com>" \
//                        CONTACT_EMAIL=daricone.web@gmail.com
//
// Trigger it from a Database Webhook (Supabase → Database → Webhooks):
//   Table: public.leads · Events: INSERT · Type: Supabase Edge Function → on-new-lead
//
// Email is best-effort: the lead is already saved before this runs, so any
// failure here is logged and swallowed — it never blocks lead capture.

// deno-lint-ignore-file no-explicit-any
Deno.serve(async (req: Request) => {
  try {
    const payload = await req.json();
    const lead = payload.record ?? payload; // webhook wraps the row in `record`
    if (!lead?.email) return new Response("no lead", { status: 200 });

    const KEY = Deno.env.get("RESEND_API_KEY");
    const FROM = Deno.env.get("EMAIL_FROM") ?? "Daric <daricone.web@gmail.com>";
    const CONTACT = Deno.env.get("CONTACT_EMAIL") ?? "daricone.web@gmail.com";
    const NOTIFY = Deno.env.get("LEAD_NOTIFY_TO") ?? CONTACT;
    if (!KEY) return new Response("email not configured", { status: 200 });

    const send = (to: string, subject: string, html: string) =>
      fetch("https://api.resend.com/emails", {
        method: "POST",
        headers: { Authorization: `Bearer ${KEY}`, "Content-Type": "application/json" },
        body: JSON.stringify({ from: FROM, to, subject, html }),
      });

    const first = String(lead.name ?? "there").split(" ")[0];
    const shell = (heading: string, body: string) =>
      `<div style="max-width:520px;margin:0 auto;padding:32px 24px;font-family:Inter,Arial,sans-serif;color:#0a0a0a">
        <div style="font-weight:700;font-size:18px">Daric</div>
        <div style="background:#fff;border:1px solid rgba(0,0,0,.08);border-radius:12px;padding:28px;margin-top:16px">
          <h1 style="font-size:20px;margin:0 0 12px">${heading}</h1>${body}</div>
        <p style="color:#6b6b70;font-size:12px;margin-top:16px">Daric — Websites That Define Your Brand.</p>
      </div>`;

    await Promise.allSettled([
      send(
        lead.email,
        "We received your message — Daric",
        shell(
          `Thanks, ${first} 👋`,
          `<p style="line-height:1.6;color:#3a3a3a">Thanks for reaching out to Daric. We've received your message and will reply within one business day with next steps.</p>`,
        ),
      ),
      send(
        NOTIFY,
        `New lead — ${lead.name}${lead.company ? ` (${lead.company})` : ""}`,
        shell(
          "New lead 🎯",
          `<table style="font-size:14px">
            <tr><td style="color:#6b6b70;padding-right:12px">Name</td><td><strong>${lead.name}</strong></td></tr>
            <tr><td style="color:#6b6b70;padding-right:12px">Email</td><td><strong>${lead.email}</strong></td></tr>
            <tr><td style="color:#6b6b70;padding-right:12px">Company</td><td><strong>${lead.company ?? "—"}</strong></td></tr>
            <tr><td style="color:#6b6b70;padding-right:12px">Source</td><td><strong>${lead.source ?? "agency"}</strong></td></tr>
          </table><p style="margin-top:16px;line-height:1.6;color:#3a3a3a">${lead.message ?? ""}</p>`,
        ),
      ),
    ]);

    return new Response("ok", { status: 200 });
  } catch (err) {
    console.error("on-new-lead failed:", (err as any)?.message ?? err);
    return new Response("error", { status: 200 }); // never surface to the client
  }
});
