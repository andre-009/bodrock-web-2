import test from "node:test";
import assert from "node:assert/strict";
import {readFileSync,existsSync} from "node:fs";
import {createRequire} from "node:module";
import ts from "typescript";
import React from "react";
import {renderToStaticMarkup} from "react-dom/server";
const require=createRequire(import.meta.url);
function compile(file,req){const js=ts.transpileModule(readFileSync(file,"utf8"),{compilerOptions:{jsx:ts.JsxEmit.ReactJSX,module:ts.ModuleKind.CommonJS,target:ts.ScriptTarget.ES2022}}).outputText;let exports={};new Function("exports","require",js)(exports,req);return exports;}
const ui=compile("src/components/ui/index.tsx",require);
const patterns=compile("src/components/patterns/index.tsx",id=>id==="../ui"?ui:require(id));
const theme=compile("src/components/home/theme-control.tsx",id=>id==="../ui"?ui:require(id));
const home=compile("src/app/page.tsx",id=>id==="../components/ui"?ui:id==="../components/patterns"?patterns:id==="../components/home/theme-control"?theme:id.endsWith(".css")?{}:require(id));
const html=renderToStaticMarkup(React.createElement(home.default));
test("homepage exposes its sections, accessible brand and skip link",()=>{for(const id of ["main","work","services","approach","contact"])assert.match(html,new RegExp(`id="${id}"`));assert.match(html,/Skip to content/);assert.match(html,/aria-label="Bodrock Web Design"/);assert.ok(existsSync("public/images/bodrock-logo.png"));});
test("project and contact actions point to meaningful destinations",()=>{assert.match(html,/https:\/\/www\.bodrockwebdesign\.com\.ng\/forethread\//);assert.match(html,/mailto:info@bodrockwebdesign\.com\.ng/);assert.doesNotMatch(html,/href="#"/);});
