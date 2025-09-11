import { writeFileSync, mkdirSync } from 'node:fs';
import { readFile } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

async function main() {
  const pkgPath = join(__dirname, '..', 'package.json');
  const pkg = JSON.parse(await readFile(pkgPath, 'utf-8'));
  const outDir = join(__dirname, '..', 'site');
  mkdirSync(outDir, { recursive: true });
  const html = `<!DOCTYPE html>
<html lang="pt-BR">
<head>
<meta charset="UTF-8" />
<title>${pkg.name} - Build Info</title>
<meta name="viewport" content="width=device-width,initial-scale=1" />
<style>body{font-family:system-ui,Arial,sans-serif;padding:2rem;max-width:760px;margin:auto;line-height:1.5}code{background:#eee;padding:2px 4px;border-radius:4px}</style>
</head>
<body>
<h1>${pkg.name}</h1>
<p>Versão: <strong>${pkg.version}</strong></p>
<p>Build gerado em: <strong>${new Date().toISOString()}</strong></p>
<p>Este site foi gerado automaticamente pelo workflow de deploy.</p>
<p>Edite <code>scripts/generate-site.js</code> para customizar.</p>
</body>
</html>`;
  writeFileSync(join(outDir, 'index.html'), html, 'utf-8');
  console.log('Site gerado em', outDir);
}

main().catch(err => {
  console.error(err);
  process.exit(1);
});
