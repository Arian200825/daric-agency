import { site } from "./site";

/**
 * LEGAL — company details + policy content, config-driven so a real entity can
 * drop in its registered name, address, and jurisdiction in one place.
 *
 * ⚠️  These are sensible starting templates, NOT legal advice. Have them
 * reviewed by a qualified professional before relying on them for a live business.
 */

export const company = {
  legalName: site.legalName, // NEEDS_INPUT: registered company name
  tradingName: site.name,
  email: site.contact.email,
  // NEEDS_INPUT: registered address + governing jurisdiction.
  address: "—",
  jurisdiction: "the United States",
  effectiveDate: "3 July 2026",
};

export interface LegalSection {
  heading: string;
  body: string[];
}

export interface LegalDoc {
  slug: string;
  title: string;
  intro: string;
  sections: LegalSection[];
}

export const privacyPolicy: LegalDoc = {
  slug: "privacy",
  title: "Privacy Policy",
  intro: `This policy explains what personal data ${company.tradingName} collects, why, and how we handle it. By using our website or contacting us, you agree to this policy.`,
  sections: [
    { heading: "Who we are", body: [`${company.tradingName} ("we", "us") operates this website and provides web design and development services. Contact: ${company.email}.`] },
    { heading: "Data we collect", body: [
      "Information you give us via our contact form: your name, email, phone (optional), company, budget range, and message.",
      "Technical data collected automatically: IP address, browser type, and usage analytics (only if you consent to analytics cookies).",
    ] },
    { heading: "How we use it", body: [
      "To respond to your enquiry and provide a quote.",
      "To manage our relationship if you become a client (proposals, projects, invoicing).",
      "To improve our website and services (aggregated analytics).",
    ] },
    { heading: "Legal basis", body: ["We process enquiry data on the basis of your consent and our legitimate interest in responding to potential clients. Client data is processed to perform our contract with you."] },
    { heading: "Sharing", body: ["We do not sell your data. We share it only with service providers that help us operate (e.g. our email, hosting, and database providers) under appropriate agreements."] },
    { heading: "Retention", body: ["We keep enquiry data for as long as needed to respond and for our legitimate business records, then delete or anonymize it."] },
    { heading: "Your rights", body: [`You may request access to, correction of, or deletion of your personal data, and object to processing, by emailing ${company.email}.`] },
    { heading: "Contact", body: [`Questions about this policy? Email ${company.email}.`] },
  ],
};

export const termsOfService: LegalDoc = {
  slug: "terms",
  title: "Terms of Service",
  intro: `These terms govern your use of the ${company.tradingName} website and any services you engage us for.`,
  sections: [
    { heading: "Services", body: ["We provide web design, development, and related services as described in a written proposal or agreement agreed with you."] },
    { heading: "Proposals & payment", body: [
      "Work begins once you accept a proposal and pay the agreed deposit (typically 50%). The balance is due on launch unless otherwise agreed.",
      "Prices are quoted per project. Additional work outside the agreed scope is quoted separately.",
    ] },
    { heading: "Client responsibilities", body: ["You agree to provide content, brand assets, and timely feedback needed to deliver the project. Delays in providing these may affect the timeline."] },
    { heading: "Revisions", body: ["Each milestone includes a reasonable number of revision rounds as stated in your proposal. Extensive changes may be quoted as additional work."] },
    { heading: "Intellectual property", body: ["On full payment, ownership of the final deliverables transfers to you. We retain the right to display the work in our portfolio unless agreed otherwise."] },
    { heading: "Liability", body: ["To the extent permitted by law, our liability is limited to the fees paid for the project. We are not liable for indirect or consequential losses."] },
    { heading: "Governing law", body: [`These terms are governed by the laws of ${company.jurisdiction}.`] },
    { heading: "Contact", body: [`Questions about these terms? Email ${company.email}.`] },
  ],
};

export const cookiePolicy: LegalDoc = {
  slug: "cookies",
  title: "Cookie Policy",
  intro: `This policy explains how ${company.tradingName} uses cookies and similar technologies.`,
  sections: [
    { heading: "What cookies are", body: ["Cookies are small files stored on your device that help websites function and understand usage."] },
    { heading: "Cookies we use", body: [
      "Essential: required for the site to work (e.g. remembering your theme preference). These are always on.",
      "Analytics (optional): if enabled and you consent, we use privacy-friendly analytics to understand aggregate usage. No analytics run unless configured and consented to.",
    ] },
    { heading: "Managing cookies", body: ["You can control or delete cookies through your browser settings. Blocking essential cookies may affect how the site works."] },
    { heading: "Contact", body: [`Questions about cookies? Email ${company.email}.`] },
  ],
};

export const legalDocs: LegalDoc[] = [privacyPolicy, termsOfService, cookiePolicy];

export function getLegalDoc(slug: string) {
  return legalDocs.find((d) => d.slug === slug);
}
