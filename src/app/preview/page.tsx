import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Gallery } from "./gallery";

export const metadata: Metadata = { title: "BDL component preview", robots: { index: false, follow: false } };
export default function PreviewPage() {
  if (process.env.SITE_ENV === "production") notFound();
  return <Gallery />;
}
