import test from "node:test";
import assert from "node:assert/strict";
import { readFileSync, existsSync } from "node:fs";

test("Canonical tokens retain brand blue and cyan", () => {
  const css = readFileSync("src/styles/tokens.css", "utf8").toLowerCase();
  assert.ok(css.includes("#0047ba"));
  assert.ok(css.includes("#00c2c7"));
  assert.ok(css.includes('[data-theme="dark"]'));
  assert.ok(css.includes('[data-theme="light"]'));
});

test("Codex and architecture standards are in repository", () => {
  for (const path of ["AGENTS.md", "docs/ARCHITECTURE.md", "docs/DESIGN_SYSTEM.md", "docs/DEPLOYMENT.md", "docs/decisions/0001-nextjs-architecture.md"]) {
    assert.ok(existsSync(path), `missing ${path}`);
  }
});

test("Preview/default indexing is opt-in", () => {
  const robots = readFileSync("src/app/robots.ts", "utf8");
  assert.match(robots, /ALLOW_INDEXING/);
  assert.match(robots, /production/);
  assert.match(robots, /disallow/);
});
