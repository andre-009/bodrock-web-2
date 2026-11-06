"use client";
import { useEffect, useId, useRef, useState } from "react";
import type { ReactNode, TextareaHTMLAttributes, SelectHTMLAttributes } from "react";
import { Button, Input, Label, Link } from "../ui";
export type NavItem = { label: string; href: string; current?: boolean };
export function SiteHeader({ brand, items, brandHref = "/" }: { brand: string; items: NavItem[]; brandHref?: string }) {
  const [open, setOpen] = useState(false); const id = useId(); const trigger = useRef<HTMLButtonElement>(null);
  return <header className="bdl-header"><Link href={brandHref} className="bdl-header__brand">{brand}</Link><nav aria-label="Main navigation" onKeyDown={(e)=>{if(e.key === "Escape" && open){setOpen(false);trigger.current?.focus();}}}><Button ref={trigger} variant="secondary" aria-expanded={open} aria-controls={id} onClick={()=>setOpen(!open)}>{open ? "Close menu" : "Menu"}</Button><ul id={id} className="bdl-nav-list" hidden={!open}>{items.map(item=><li key={item.href}><Link href={item.href} aria-current={item.current ? "page" : undefined} onClick={()=>setOpen(false)}>{item.label}</Link></li>)}</ul></nav></header>;
}
export function SiteFooter({ brand, items }: {brand:string; items:NavItem[]}) { return <footer className="bdl-footer"><strong>{brand}</strong><nav aria-label="Footer navigation"><ul className="bdl-footer__links">{items.map(item=><li key={item.href}><Link href={item.href}>{item.label}</Link></li>)}</ul></nav></footer>; }
export function Dialog({ open, onClose, title, children }: {open:boolean; onClose:()=>void; title:string; children:ReactNode}) {
  const ref=useRef<HTMLDialogElement>(null); const titleId=useId();
  useEffect(()=>{const el=ref.current;if(!el)return;if(open&&!el.open)el.showModal();else if(!open&&el.open)el.close();},[open]);
  return <dialog ref={ref} aria-labelledby={titleId} className="bdl-dialog" onCancel={(e)=>{e.preventDefault();onClose();}} onClose={onClose}><div className="bdl-dialog__header"><h2 id={titleId}>{title}</h2><Button variant="ghost" onClick={onClose} aria-label={`Close ${title}`}>Close</Button></div><div>{children}</div></dialog>;
}
export type Command = {label:string; description?:string; action:()=>void};
export function CommandPalette({open,onClose,commands}:{open:boolean;onClose:()=>void;commands:Command[]}) {
  const [query,setQuery]=useState(""); const id=useId();
  const filtered=commands.filter(c=>`${c.label} ${c.description ?? ""}`.toLowerCase().includes(query.toLowerCase()));
  function close(){setQuery("");onClose();}
  return <Dialog open={open} onClose={close} title="Command palette"><Label htmlFor={id}>Search commands</Label><Input id={id} autoFocus value={query} onChange={e=>setQuery(e.target.value)} placeholder="Search commands" /><ul className="bdl-command-list" aria-label="Commands">{filtered.map(c=><li key={c.label}><button type="button" className="bdl-command" onClick={()=>{close();c.action();}}><strong>{c.label}</strong>{c.description && <span>{c.description}</span>}</button></li>)}</ul>{filtered.length===0 && <p role="status">No matching commands.</p>}</Dialog>;
}
export function FormField({id,label,hint,error,children}:{id:string;label:string;hint?:string;error?:string;children:ReactNode}) { return <div className="bdl-field"><Label htmlFor={id}>{label}</Label>{children}{hint && <p id={`${id}-hint`} className="bdl-field__hint">{hint}</p>}{error && <p id={`${id}-error`} className="bdl-field__error">{error}</p>}</div>; }
export function TextArea({className="", ...props}:TextareaHTMLAttributes<HTMLTextAreaElement>) { return <textarea {...props} className={`bdl-input bdl-textarea ${className}`} />; }
export function Select({className="", ...props}:SelectHTMLAttributes<HTMLSelectElement>) { return <select {...props} className={`bdl-input ${className}`} />; }
export function FormSteps({steps,current}:{steps:string[];current:number}) { return <ol className="bdl-steps" aria-label="Form progress">{steps.map((step,i)=><li key={step} aria-current={i===current ? "step" : undefined}><span>{i+1}</span> {step}</li>)}</ol>; }
export function ProjectTile({title,description,href,category}:{title:string;description:string;href:string;category:string}) { return <article className="bdl-project bdl-surface"><p className="bdl-meta">{category}</p><h3>{title}</h3><p>{description}</p><Link href={href}>View project <span aria-hidden="true">↗</span></Link></article>; }
export function CaseStudyModule({eyebrow,title,children}:{eyebrow:string;title:string;children:ReactNode}) { return <section className="bdl-case bdl-surface"><p className="bdl-meta">{eyebrow}</p><h3>{title}</h3>{children}</section>; }
