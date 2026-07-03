import type { Metadata } from "next";
import { LegalDocView } from "@/components/sections/LegalDocView";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({ title: "Privacy Policy", path: "/privacy" });

export default function Page() {
  return <LegalDocView slug="privacy" />;
}
