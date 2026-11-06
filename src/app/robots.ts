import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  const indexingEnabled = process.env.SITE_ENV === "production" && process.env.ALLOW_INDEXING === "true";
  return { rules: indexingEnabled ? [{ userAgent: "*", allow: "/" }] : [{ userAgent: "*", disallow: "/" }] };
}
