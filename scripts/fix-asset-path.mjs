import fs from "node:fs/promises";

const index = 'docs/index.html';
let html = await fs.readFile(index, 'utf-8');
html = html.replace(/(src|href)=["']\.\.\/([^"']+)["']/g, '$1="$2"');
await fs.writeFile(index, html);