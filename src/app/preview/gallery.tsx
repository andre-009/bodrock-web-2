"use client";
import { useState } from "react";
import { Badge, Button, Container, Grid, Icon, Input, Label, Link, Stack, Surface } from "../../components/ui";
import "./preview.css";

export function Gallery() {
  const [theme, setTheme] = useState<"dark" | "light">("dark");
  return <main id="top" className="preview" data-theme={theme}>
    <Container>
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
      <footer className="preview-footer">Bodrock Web Design · Your Vision. Our Code.</footer>
    </Container>
  </main>;
}

