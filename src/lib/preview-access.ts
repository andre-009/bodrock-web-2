export function isPreviewEnabled(siteEnv: string | undefined): boolean {
  return siteEnv === "preview";
}
