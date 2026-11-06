import type { AnchorHTMLAttributes, ButtonHTMLAttributes, HTMLAttributes, InputHTMLAttributes, LabelHTMLAttributes, ReactNode, Ref } from "react";

function classes(...values: (string | undefined | false)[]) { return values.filter(Boolean).join(" "); }
type Tone = "primary" | "secondary" | "ghost";
export function Button({ variant = "primary", loading = false, disabled, children, className, type = "button", ...props }: ButtonHTMLAttributes<HTMLButtonElement> & { variant?: Tone; loading?: boolean; ref?: Ref<HTMLButtonElement> }) {
  return <button {...props} type={type} disabled={disabled || loading} aria-busy={loading || undefined} className={classes("bdl-button", `bdl-button--${variant}`, className)}>{loading ? <span className="bdl-spinner" aria-hidden="true" /> : null}{children}</button>;
}
export function Link({ variant = "inline", className, ...props }: AnchorHTMLAttributes<HTMLAnchorElement> & { variant?: "inline" | Tone }) {
  return <a {...props} className={classes(variant === "inline" ? "bdl-link" : `bdl-button bdl-button--${variant}`, className)} />;
}
export function Input({ className, "aria-invalid": invalid, ...props }: InputHTMLAttributes<HTMLInputElement>) {
  return <input {...props} aria-invalid={invalid} className={classes("bdl-input", className)} />;
}
export function Label({ className, ...props }: LabelHTMLAttributes<HTMLLabelElement>) { return <label {...props} className={classes("bdl-label", className)} />; }
export function Badge({ className, ...props }: HTMLAttributes<HTMLSpanElement>) { return <span {...props} className={classes("bdl-badge", className)} />; }
export function Surface({ className, ...props }: HTMLAttributes<HTMLDivElement>) { return <div {...props} className={classes("bdl-surface", className)} />; }
export function Container({ className, ...props }: HTMLAttributes<HTMLDivElement>) { return <div {...props} className={classes("bdl-container", className)} />; }
export function Stack({ className, ...props }: HTMLAttributes<HTMLDivElement>) { return <div {...props} className={classes("bdl-stack", className)} />; }
export function Grid({ className, ...props }: HTMLAttributes<HTMLDivElement>) { return <div {...props} className={classes("bdl-grid", className)} />; }
export function Icon({ label, children, className }: { label?: string; children: ReactNode; className?: string }) { return <span className={classes("bdl-icon", className)} role={label ? "img" : undefined} aria-label={label} aria-hidden={label ? undefined : true}>{children}</span>; }
