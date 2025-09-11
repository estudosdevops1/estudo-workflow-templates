## Projeto de Exemplo Node.js (TypeScript) para Testar GitHub Actions

Este repositório foi adaptado para você experimentar pipelines de **build**, **test** e **deploy (GitHub Pages)** usando GitHub Actions.

### O que está configurado

1. Node.js + TypeScript simples (`src/index.ts`)
2. Script de build gera `dist/`
3. Testes com runner nativo do Node (`node --test`) após compilação
4. Workflow CI (`.github/workflows/ci.yml`): instala dependências, build, testes e publica artefato `dist`
5. Workflow Deploy Pages (`.github/workflows/deploy-pages.yml`): build + geração de site estático simples em `site/` e publicação no GitHub Pages
6. Página inclui versão do pacote e timestamp do build

### Requisitos Locais

- Node.js 20+
 - Rode `npm install` uma vez para gerar/atualizar `package-lock.json`

### Scripts principais

```
npm install           # instala dependências
npm run build         # compila TypeScript -> dist
npm test              # compila (pretest) e roda testes em dist
npm start             # executa a aplicação (dist/index.js)
npm run build:pages   # build + gera site estático em site/
```

### Fluxo de CI

Push ou PR em `main` dispara:
1. checkout
2. setup-node (cache npm)
3. `npm ci`
4. `npm test`
5. `npm run build`
6. upload artefato `dist`

### Deploy para GitHub Pages

Push em `main` executa:
1. Build + geração do site (`site/`)
2. Publicação Pages (Actions configura ambiente `github-pages`)

Após o primeiro run do workflow de deploy:
1. Vá em Settings > Pages e confirme que a fonte é "GitHub Actions" (geralmente automático)

### Customizações rápidas

- Ajustar nome do projeto em `package.json`
- Adicionar mais lógica em `src/index.ts`
- Criar mais testes em `src/*.test.ts`

### Próximos Passos (opcionais)

- Adicionar ESLint / Prettier
- Cobertura de testes (`c8`)
- Publicar em npm (workflow adicional + token)
- Adicionar build Docker

### Estrutura

```
src/
	index.ts
	index.test.ts
scripts/
	generate-site.js
.github/workflows/
	ci.yml
	deploy-pages.yml
```

### Licença

Uso livre para estudos.

---
Se quiser expandir (ex: Docker, publicação npm), é só pedir.
