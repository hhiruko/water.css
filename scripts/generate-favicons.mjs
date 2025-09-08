import favicons from "favicons";
import fs from "node:fs/promises";
import path from "node:path";
import pkg from '../package.json' with { type: 'json' };

const src = 'assets/icon.svg';
const dest = 'docs/favicons';
const index = 'docs/index.html';
const manifest = 'docs/favicons/manifest.webmanifest';

const configuration = {
    path: '/water.css/favicons',
    appName: 'Water.css',
    appShortName: 'Water.css',
    appDescription: 'A drop-in collection of CSS styles to make simple websites just a little nicer',
    developerName: 'hhiruko',
    developerURL: 'https://github.com/hhiruko',
    cacheBustingQueryParam: null,
    dir: "auto",
    lang: "en-US",
    appleStatusBarStyle: "default",
    display: "standalone",
    orientation: "any",
    scope: "/water.css/",
    start_url: "/water.css/",
    preferRelatedApplications: false,
    relatedApplications: undefined,
    version: pkg.version,
    pixel_art: false,
    loadManifestWithCredentials: false,
    manifestMaskable: false,
    icons: {
        android: true,
        appleIcon: true,
        appleStartup: true,
        favicons: true,
        windows: true,
        yandex: true,
    },
};

const response = await favicons(src, configuration);
await fs.mkdir(dest, { recursive: true });
await Promise.all(
    response.images.map(
        async (image) => await fs.writeFile(path.join(dest, image.name), image.contents),
    ),
);
await Promise.all(
    response.files.map(
        async (file) => await fs.writeFile(path.join(dest, file.name), file.contents),
    ),
);

const meta = response.html.filter(m => m !== '<meta name="theme-color" content="#fff">');
let html = await fs.readFile(index, 'utf-8');
const insertPosition = html.indexOf('</head>');
html = html.substring(0, insertPosition) + `\n        ${meta.join('\n        ')}\n    ` + html.substring(insertPosition);
await fs.writeFile(index, html);

let manifestJson = JSON.parse(await fs.readFile(manifest, 'utf-8'));
for(const [key, value] of manifestJson.icons.entries()){
    let newValue = value;
    newValue.src = '/water.css/' + newValue.src.substr(1);
    manifestJson.icons[key] = newValue;
}
await fs.writeFile(manifest, JSON.stringify(manifestJson));