"use client";
import { useId, useState } from "react";
import type { FormEvent } from "react";
import { Badge, Button, Container, Grid, Icon, Input, Label, Link, Stack, Surface } from "../../components/ui";
import { SiteHeader, SiteFooter, Dialog, CommandPalette, FormSteps, ProjectTile, CaseStudyModule, FormField, TextArea, Select } from "../../components/patterns";
import "./preview.css";

export function Gallery() {
  const [dialogOpen, setDialogOpen] = useState(false);
  const [commandsOpen, setCommandsOpen] = useState(false);
  const [completed, setCompleted] = useState(false);
  const [theme, setTheme] = useState<"dark" | "light">("dark");
  return <main id="top" className="preview" data-theme={theme}>
    <Container>
      <SiteHeader brandHref="#top" brand="Bodrock Web Design" items={[{label:"Components",href:"#patterns"},{label:"Forms",href:"#form-demo"},{label:"About",href:"#gallery-footer"}]} />
      <header className="preview-header">
        <div><p className="preview-kicker">Bodrock Web Design / BDL 1.0</p><h1>Component preview</h1><p>A working gallery of the current design foundations.</p></div>
        <div className="preview-switch" role="group" aria-label="Preview theme">
          <Button variant={theme === "dark" ? "primary" : "secondary"} aria-pressed={theme === "dark"} onClick={() => setTheme("dark")}>Dark</Button>
          <Button variant={theme === "light" ? "primary" : "secondary"} aria-pressed={theme === "light"} onClick={() => setTheme("light")}>Light</Button>
        </div>
      </header>
      <p className="preview-note">Design system preview · Not the finished website</p>
      <Grid>
        <Surface><Stack><div><Badge>01 / Actions</Badge><h2>Buttons & links</h2><p>Controls for actions and navigation, with visible keyboard focus.</p></div><div className="preview-row"><Button>Primary action</Button><Button variant="secondary">Secondary</Button><Button variant="ghost">Quiet action</Button></div><div className="preview-row"><Button disabled>Disabled</Button><Button loading>Loading</Button><Link href="#fields">Explore fields <span aria-hidden="true">↗</span></Link></div></Stack></Surface>
        <Surface><Stack><div><Badge>02 / Forms</Badge><h2 id="fields">Input & label</h2><p>Native form controls with a clear label and guidance.</p></div><div><Label htmlFor="preview-name">Your name</Label><Input id="preview-name" placeholder="Enter your name" autoComplete="off" /></div><div><Label htmlFor="preview-email">Email address</Label><Input id="preview-email" type="email" aria-invalid="true" aria-describedby="preview-email-error" defaultValue="example" /><p id="preview-email-error" className="preview-error">Enter a complete email address.</p></div><div><Label htmlFor="preview-disabled">Disabled field</Label><Input id="preview-disabled" disabled placeholder="Unavailable" /></div></Stack></Surface>
        <Surface><Stack><div><Badge>03 / Foundations</Badge><h2>Surfaces & layout</h2><p>Reusable containers, stack and grid primitives bring consistency to future pages.</p></div><div className="preview-inset"><span>Brand primary</span><strong>Your Vision.<br />Our Code.</strong></div><div className="preview-row"><Badge>Badge</Badge><Badge>Reusable</Badge><Badge>Accessible</Badge></div></Stack></Surface>
        <Surface><Stack><div><Badge>04 / Detail</Badge><h2>Icons & interaction</h2><p>Icons support content and stay decorative unless a label is supplied.</p></div><div className="preview-icon"><Icon label="Spark">✦</Icon><span>Built for considered detail.</span></div><p>Animations respect your device’s reduced-motion preference.</p><Link href="#top" variant="secondary">Back to top</Link></Stack></Surface>
      </Grid>
      <section id="patterns" className="preview-patterns"><div><p className="preview-kicker">BDL 1.0 / Reusable patterns</p><h2>Patterns you can try</h2><p>These examples are for review only. They do not send information anywhere.</p></div>
      <Grid>
        <Surface><Stack><div><Badge>05 / Navigation</Badge><h2>Navigation & commands</h2><p>Use the Menu button above or search the available example commands.</p></div><Button variant="secondary" onClick={()=>setCommandsOpen(true)}>Open command palette</Button></Stack></Surface>
        <Surface><Stack><div><Badge>06 / Dialog</Badge><h2>Focused conversations</h2><p>Open a modal, then close it with Escape or the close button.</p></div><Button variant="secondary" onClick={()=>setDialogOpen(true)}>Open dialog</Button></Stack></Surface>
        <Surface id="form-demo"><Stack><div><Badge>07 / Forms</Badge><h2>Form patterns</h2><p>Try the validation and a simple, local-only step.</p></div><FormSteps steps={["Details","Complete"]} current={completed ? 1 : 0} />{completed ? <div role="status"><p>Example complete. Nothing was sent.</p><Button variant="secondary" onClick={()=>setCompleted(false)}>Start again</Button></div> : <ExampleForm onComplete={()=>setCompleted(true)} />}</Stack></Surface>
        <Surface><Stack><div><Badge>08 / More controls</Badge><h2>Selection & message</h2><p>Additional native form controls use the same visual language.</p></div><FormField id="preview-service" label="Service"><Select id="preview-service" defaultValue=""><option value="" disabled>Choose a service</option><option>Website design</option><option>Creative technology</option></Select></FormField><FormField id="preview-message" label="Message" hint="Example only; not submitted."><TextArea id="preview-message" aria-describedby="preview-message-hint" /></FormField></Stack></Surface>
      </Grid><Grid><ProjectTile category="Example project" title="Project tile" description="A reusable entry point for future case studies." href="#case-example" /><CaseStudyModule eyebrow="Example case study" title="Case-study module"><p id="case-example">A reusable structure for the story, context and outcome of a project.</p></CaseStudyModule></Grid></section>
      <Dialog open={dialogOpen} onClose={()=>setDialogOpen(false)} title="A focused dialog"><Stack><p>This is an example of a reusable modal. It keeps attention on the task and returns you to the page when closed.</p><Button onClick={()=>setDialogOpen(false)}>Done</Button></Stack></Dialog>
      <CommandPalette open={commandsOpen} onClose={()=>setCommandsOpen(false)} commands={[{label:"Go to forms",description:"View the form examples",action:()=>document.getElementById("form-demo")?.scrollIntoView()},{label:"Go to patterns",description:"View the pattern gallery",action:()=>document.getElementById("patterns")?.scrollIntoView()}]} />
      <div id="gallery-footer"><SiteFooter brand="Bodrock Web Design · Your Vision. Our Code." items={[{label:"Back to top",href:"#top"},{label:"Patterns",href:"#patterns"}]} /></div>
    </Container>
  </main>;
}


function ExampleForm({onComplete}:{onComplete:()=>void}) {
  const [value,setValue]=useState(""); const [error,setError]=useState(""); const id=useId();
  function submit(e:FormEvent<HTMLFormElement>){e.preventDefault(); if(!value.trim()){setError("Please enter your name.");document.getElementById(id)?.focus();return;} setError("");onComplete();}
  return <form onSubmit={submit} noValidate className="bdl-stack"><FormField id={id} label="Your name" hint="This example stays in your browser." error={error}><Input id={id} value={value} onChange={e=>setValue(e.target.value)} aria-invalid={!!error} aria-describedby={`${id}-hint${error ? ` ${id}-error` : ""}`} autoComplete="off" /></FormField><Button type="submit">Continue</Button></form>;
}
