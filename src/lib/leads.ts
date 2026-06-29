/**
 * Lead types + validation — shared by the contact form and the API route so
 * client and server agree on the shape and rules.
 */

export interface LeadInput {
  name: string;
  email: string;
  company?: string;
  budget?: string;
  plan?: string;
  message: string;
  /** Honeypot — must stay empty. Bots tend to fill every field. */
  website?: string;
}

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export type ValidationResult =
  | { ok: true; data: Omit<LeadInput, "website"> }
  | { ok: false; errors: Partial<Record<keyof LeadInput, string>> };

export function validateLead(input: Partial<LeadInput>): ValidationResult {
  const errors: Partial<Record<keyof LeadInput, string>> = {};

  const name = input.name?.trim() ?? "";
  const email = input.email?.trim() ?? "";
  const message = input.message?.trim() ?? "";

  if (name.length < 2) errors.name = "Please enter your name.";
  if (!EMAIL_RE.test(email)) errors.email = "Please enter a valid email.";
  if (message.length < 10)
    errors.message = "Please add a little more detail (10+ characters).";

  if (Object.keys(errors).length > 0) return { ok: false, errors };

  return {
    ok: true,
    data: {
      name,
      email,
      company: input.company?.trim() || undefined,
      budget: input.budget?.trim() || undefined,
      plan: input.plan?.trim() || undefined,
      message,
    },
  };
}

/** Budget options offered in the contact form. */
export const budgetOptions = [
  "Under $2k",
  "$2k – $5k",
  "$5k – $10k",
  "$10k+",
  "Not sure yet",
] as const;
