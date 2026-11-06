import test from "node:test";
import assert from "node:assert/strict";
import {readFileSync} from "node:fs";
import {createRequire} from "node:module";
import ts from "typescript";
import React from "react";
import {renderToStaticMarkup} from "react-dom/server";
const require=createRequire(import.meta.url);
function compile(file,req){const source=readFileSync(file,"utf8");const js=ts.transpileModule(source,{compilerOptions:{jsx:ts.JsxEmit.ReactJSX,module:ts.ModuleKind.CommonJS,target:ts.ScriptTarget.ES2022}}).outputText;const exports={};new Function("exports","require",js)(exports,req);return exports;}
const ui=compile("src/components/ui/index.tsx",require);
const patterns=compile("src/components/patterns/index.tsx",id=>id==="../ui"?ui:require(id));
const render=(type,props,children)=>renderToStaticMarkup(React.createElement(type,props,children));
test("navigation exposes a labelled closed disclosure and brand destination",()=>{const h=render(patterns.SiteHeader,{brand:"Bodrock",brandHref:"/",items:[{label:"Work",href:"/work"}]});assert.match(h,/aria-label="Main navigation"/);assert.match(h,/aria-expanded="false"/);assert.match(h,/href="\/"/);assert.match(h,/hidden=""/);});
test("form fields connect labels and render message IDs",()=>{const h=render(patterns.FormField,{id:"name",label:"Name",hint:"Help",error:"Required"},React.createElement(ui.Input,{id:"name","aria-invalid":true,"aria-describedby":"name-hint name-error"}));for(const pattern of [/for="name"/,/id="name-hint"/,/id="name-error"/,/aria-describedby="name-hint name-error"/])assert.match(h,pattern);});
test("progress identifies the current step and modal has a title",()=>{assert.match(render(patterns.FormSteps,{steps:["First","Next"],current:1}),/aria-current="step"/);assert.match(render(patterns.Dialog,{open:false,onClose:()=>{},title:"Review"},"Content"),/aria-labelledby=/);});
test("content patterns preserve supplied text and links",()=>{const h=render(patterns.ProjectTile,{title:"Example",category:"Work",description:"Description",href:"/work"});assert.match(h,/href="\/work"/);assert.match(h,/Example/);assert.match(render(patterns.CaseStudyModule,{eyebrow:"About",title:"Story"},"Body"),/Body/);});
