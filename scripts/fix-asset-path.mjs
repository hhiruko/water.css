import fs from "node:fs/promises";

let html = await fs.readFile('docs/index.html', 'utf-8');
html = html.replace(/(src|href)=["']\.\.\/([^"']+)["']/g, '$1="$2"');
await fs.writeFile(indexPath, html);