"use client";

import { useState, type FormEvent } from "react";
import { useSearchParams } from "next/navigation";
import { ArrowRight, CheckCircle2, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { budgetOptions, validateLead, type LeadInput } from "@/lib/leads";
import { getSupabase } from "@/lib/supabase";
import { site } from "@/content/site";
import { cn } from "@/lib/utils";

type Status = "idle" | "submitting" | "success" | "error";

const fieldClass =
  "w-full rounded-xl border border-input bg-background px-4 py-3 text-sm text-foreground placeholder:text-muted/70 transition-colors focus-visible:border-accent focus-visible:outline-none";
const labelClass = "mb-1.5 block text-sm font-medium";

/**
 * ContactForm — validates inline, then writes the lead straight to Supabase
 * (anon insert, protected by RLS). Static-host friendly: no server route needed.
 * Reads `?plan=` to pre-fill the selected package. Honeypot blocks bots.
 * Degrades to a clear message + email fallback if Supabase isn't configured.
 */
export function ContactForm() {
  const searchParams = useSearchParams();
  const plan = searchParams.get("plan") ?? "";

  const [status, setStatus] = useState<Status>("idle");
  const [errors, setErrors] = useState<
    Partial<Record<keyof LeadInput, string>>
  >({});
  const [serverError, setServerError] = useState<string>("");

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setServerError("");
    const form = e.currentTarget;
    const data = Object.fromEntries(
      new FormData(form).entries()
    ) as Partial<LeadInput>;

    // Honeypot: silently succeed for bots, store nothing.
    if (typeof data.website === "string" && data.website.trim() !== "") {
      setStatus("success");
      return;
    }

    const result = validateLead(data);
    if (!result.ok) {
      setErrors(result.errors);
      return;
    }
    setErrors({});
    setStatus("submitting");

    const supabase = getSupabase();
    if (!supabase) {
      setStatus("error");
      setServerError(
        `Our form backend isn't connected yet — please email us at ${site.contact.email}.`
      );
      return;
    }

    const { error } = await supabase.from("leads").insert(result.data);
    if (error) {
      setStatus("error");
      setServerError(
        "Something went wrong saving your message. Please try again or email us directly."
      );
      return;
    }

    setStatus("success");
    form.reset();
  }

  if (status === "success") {
    return (
      <div className="flex flex-col items-center gap-4 rounded-2xl border border-card-border bg-card p-10 text-center">
        <CheckCircle2 className="h-12 w-12 text-accent" strokeWidth={1.5} />
        <h3 className="text-2xl font-semibold tracking-tight">
          Message received.
        </h3>
        <p className="max-w-sm text-muted">
          Thanks for reaching out — we&apos;ll reply within one business day with
          next steps.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="flex flex-col gap-5">
      {/* Honeypot: hidden from users, catches bots. */}
      <input
        type="text"
        name="website"
        tabIndex={-1}
        autoComplete="off"
        aria-hidden
        className="absolute -left-[9999px] h-0 w-0 opacity-0"
      />

      <input type="hidden" name="plan" defaultValue={plan} />

      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className={labelClass}>
            Name <span className="text-accent">*</span>
          </label>
          <input
            id="name"
            name="name"
            type="text"
            autoComplete="name"
            placeholder="Jane Doe"
            className={cn(fieldClass, errors.name && "border-red-500/60")}
            aria-invalid={Boolean(errors.name)}
          />
          {errors.name && (
            <p className="mt-1 text-xs text-red-500">{errors.name}</p>
          )}
        </div>

        <div>
          <label htmlFor="email" className={labelClass}>
            Email <span className="text-accent">*</span>
          </label>
          <input
            id="email"
            name="email"
            type="email"
            autoComplete="email"
            placeholder="jane@company.com"
            className={cn(fieldClass, errors.email && "border-red-500/60")}
            aria-invalid={Boolean(errors.email)}
          />
          {errors.email && (
            <p className="mt-1 text-xs text-red-500">{errors.email}</p>
          )}
        </div>
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="company" className={labelClass}>
            Company
          </label>
          <input
            id="company"
            name="company"
            type="text"
            autoComplete="organization"
            placeholder="Acme Inc."
            className={fieldClass}
          />
        </div>

        <div>
          <label htmlFor="budget" className={labelClass}>
            Budget
          </label>
          <select id="budget" name="budget" className={fieldClass} defaultValue="">
            <option value="" disabled>
              Select a range
            </option>
            {budgetOptions.map((b) => (
              <option key={b} value={b}>
                {b}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div>
        <label htmlFor="message" className={labelClass}>
          Project details <span className="text-accent">*</span>
        </label>
        <textarea
          id="message"
          name="message"
          rows={5}
          placeholder="Tell us about your project, goals, and timeline…"
          className={cn(fieldClass, "resize-none", errors.message && "border-red-500/60")}
          aria-invalid={Boolean(errors.message)}
        />
        {errors.message && (
          <p className="mt-1 text-xs text-red-500">{errors.message}</p>
        )}
      </div>

      {serverError && (
        <p className="rounded-xl border border-red-500/30 bg-red-500/5 px-4 py-3 text-sm text-red-500">
          {serverError}
        </p>
      )}

      <Button
        type="submit"
        size="lg"
        disabled={status === "submitting"}
        className="w-full sm:w-auto"
      >
        {status === "submitting" ? (
          <>
            <Loader2 className="h-4 w-4 animate-spin" />
            Sending…
          </>
        ) : (
          <>
            Send message
            <ArrowRight className="h-4 w-4" />
          </>
        )}
      </Button>
    </form>
  );
}
