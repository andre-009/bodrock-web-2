import { readFileSync, readdirSync, statSync } from "node:fs";
import { join, relative, resolve } from "node:path";

const root = resolve(process.cwd(), "src");
const allowed = resolve(root, "styles/tokens.css");
const report = [];
function check(path) {
  if (statSync(path).isDirectory()) {
    for (const name of readdirSync(path)) check(join(path, name));
    return;
  }
  if (path === allowed || !/\.(css|ts|tsx|js|jsx)$/.test(path)) return;
  const content = readFileSync(path, "utf8");
  const forbidden = [
    { name: "hard-coded hex color", re: /#[a-fA-F0-9]{3}(?:[a-fA-F0-9]{1,5})?(?![a-fA-F0-9])/g },
    { name: "hard-coded RGB/HSL", re: /\b(?:rgba?|hsla?)\s*\(/gi },
    { name: "arbitrary Tailwind color", re: /(?:bg|text|border|from|to)-\[\s*#(?:[a-fA-F0-9])+/g },
  ];
  for (const rule of forbidden) {
    for (const match of content.matchAll(rule.re)) {
      const line = content.slice(0, match.index).split("\n").length;
      report.push(`${relative(process.cwd(), path)}:${line} ${rule.name}: ${match[0]}`);
    }
  }
}
check(root);
if (report.length) {
  console.error("BDL 1.0 guard: token rules violated. Put color values in src/styles/tokens.css.\n" + report.join("\n"));
  process.exitCode = 1;
} else {
  console.log("BDL 1.0 design-token guard: PASS");
}
