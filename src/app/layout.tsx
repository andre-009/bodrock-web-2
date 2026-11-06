import type { Metadata } from "next";
import "./globals.css";

const indexingEnabled = process.env.SITE_ENV === "production" && process.env.ALLOW_INDEXING === "true";

export const metadata: Metadata = {
  title: { default: "Bodrock Web Design", template: "%s | Bodrock Web Design" },
  description: "Bodrock Web Design — Your Vision. Our Code.",
  robots: { index: indexingEnabled, follow: indexingEnabled, googleBot: { index: indexingEnabled, follow: indexingEnabled } },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" data-theme="dark">
      <body className="min-h-svh antialiased">{children}</body>
    </html>
  );
}
