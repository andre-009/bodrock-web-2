import test from "node:test";
import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import ts from "typescript";
const source=readFileSync("src/lib/preview-access.ts","utf8");
const js=ts.transpileModule(source,{compilerOptions:{module:ts.ModuleKind.CommonJS}}).outputText;
const exports={}; new Function("exports",js)(exports);
test("gallery access requires an explicit preview environment",()=>{assert.equal(exports.isPreviewEnabled("preview"),true);for(const value of [undefined,"production","development",""]) assert.equal(exports.isPreviewEnabled(value),false);});
