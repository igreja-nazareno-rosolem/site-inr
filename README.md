# Igreja do Nazareno Rosolém — Site

Site institucional da Igreja do Nazareno Rosolém (INR), construído com React + Vite + Tailwind CSS.

## Como rodar localmente

**Pré-requisitos:** Node.js 18+ instalado.

```bash
# 1. Instalar dependências
npm install

# 2. Rodar em modo de desenvolvimento
npm run dev
```

Acesse `http://localhost:5173` no navegador.

## Como fazer o build

```bash
npm run build
```

Os arquivos finais ficam na pasta `dist/`.

## Como publicar no GitHub Pages

### Passo 1 — Crie um repositório no GitHub
Crie um repositório público (ex: `inr-website`).

### Passo 2 — Ajuste o nome do repo no workflow
Abra `.github/workflows/deploy.yml` e mude `inr-website` para o nome do seu repositório:
```yaml
run: BASE_URL="/nome-do-seu-repo/" npm run build
```

### Passo 3 — Ative o GitHub Pages
No seu repositório → **Settings** → **Pages** → Source: **GitHub Actions**.

### Passo 4 — Faça o push
```bash
git init
git add .
git commit -m "primeiro commit"
git branch -M main
git remote add origin https://github.com/SEU-USUARIO/SEU-REPO.git
git push -u origin main
```

O GitHub Actions vai rodar automaticamente e publicar o site. Em poucos minutos ele estará disponível em:
`https://SEU-USUARIO.github.io/SEU-REPO/`

## Estrutura do projeto

```
src/
  pages/        → Páginas do site (sobre, liderança, ministérios, etc.)
  components/   → Navbar, Footer e componentes de UI
  index.css     → Cores e tema (edite aqui para mudar a identidade visual)
public/
  logo-inr.jpg  → Logo da igreja
```

## Como editar conteúdo

- **Textos e dados:** edite diretamente nos arquivos dentro de `src/pages/`
- **Cores:** edite as variáveis CSS em `src/index.css` (bloco `:root`)
- **Logo:** substitua `public/logo-inr.jpg` pela sua imagem
