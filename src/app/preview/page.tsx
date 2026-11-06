import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { isPreviewEnabled } from "../../lib/preview-access";
import { Gallery } from "./gallery";

export const metadata: Metadata = { title: "BDL component preview", robots: { index: false, follow: false } };
export default function PreviewPage() {
  if (!isPreviewEnabled(process.env.SITE_ENV)) notFound();
  return <Gallery />;
}
