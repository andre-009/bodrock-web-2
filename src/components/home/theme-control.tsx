"use client";
import {useState} from "react";
import {Button} from "../ui";
export function ThemeControl() {
  const [theme,setTheme]=useState<"dark"|"light">("dark");
  function toggle(){const next=theme==="dark"?"light":"dark";document.documentElement.dataset.theme=next;setTheme(next);}
  return <Button variant="ghost" onClick={toggle} aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} theme`}>{theme === "dark" ? "Light mode" : "Dark mode"}</Button>;
}
