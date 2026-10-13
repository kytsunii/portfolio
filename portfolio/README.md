# Meu Portfólio 🚀

Portfólio tech single-page, construído **sem frameworks** — só HTML, CSS e JavaScript puros. Zero dependências, carrega rápido e é 100% gratuito para hospedar.

## 📁 Estrutura

```
portfolio/
├── index.html   → todo o conteúdo (textos, projetos, links)
├── style.css    → visual (cores, fontes, animações)
├── main.js      → interações (digitação, menu, animações)
└── README.md    → este guia
```

## ✏️ Como personalizar

Abra o `index.html` num editor (VS Code, por exemplo) e troque o conteúdo de cada seção. Principais pontos:

| O que | Onde no `index.html` |
|---|---|
| Nome e cargo | `<title>`, `hero-title`, lista `roles` no topo do `main.js` |
| Texto de apresentação | seção `id="sobre"` |
| Estatísticas (anos, projetos) | `data-count="3"` etc. na seção Sobre |
| Tecnologias | seção `id="skills"` (chips) |
| Projetos | blocos `article.project-card` — copie/cole um para adicionar mais |
| Experiência | itens `li.timeline-item` |
| E-mail | `seu@email.com` (seção Contato) |

**Placeholders globais** — use o "Localizar e substituir" do editor para trocar de uma vez:

- `seu-usuario` → seu usuário do GitHub/LinkedIn
- `seu@email.com` → seu e-mail real
- `César Filho` → seu nome completo (se quiser mudar)

Para mudar a cor de destaque, edite `--accent` no topo do `style.css`.

## 🚀 Publicar na Vercel (gratuito)

### Opção A — via GitHub (recomendada)

1. Crie uma conta em [github.com](https://github.com) e outra em [vercel.com](https://vercel.com) (pode entrar com a conta do GitHub).
2. Crie um repositório novo (ex.: `portfolio`) e faça upload dos arquivos.
3. Na Vercel: **Add New → Project → importe o repositório**.
4. Clique em **Deploy** (não precisa configurar nada — a Vercel detecta site estático sozinha).
5. Pronto! Você recebe um link `seunome.vercel.app`.

**Atualizar depois:** edite os arquivos no GitHub (ou `git push`) — a Vercel publica a mudança automaticamente em segundos.

### Opção B — via terminal (Vercel CLI)

```bash
npm i -g vercel
cd portfolio
vercel
```

Basta seguir o login no navegador e confirmar. O link aparece no final.

## 🌐 Outras opções gratuitas

| Plataforma | Como publicar | Link gratuito |
|---|---|---|
| **GitHub Pages** | Repo → Settings → Pages → Branch `main` | `usuario.github.io/portfolio` |
| **Netlify** | Arraste a pasta em [app.netlify.com/drop](https://app.netlify.com/drop) | `nome.netlify.app` |
| **Cloudflare Pages** | Conecte o repo ou faça upload direto | `nome.pages.dev` |
| **Vercel** | Veja acima | `nome.vercel.app` |

Todas dão **HTTPS grátis** e aceitam **domínio próprio** (ex.: `cesar.dev`) se você comprar um depois (~R$ 40/ano em um `.com`).

## ♿ Qualidade incluída

- Design responsivo (desktop → celular)
- Acessibilidade: navegação por teclado, ARIA labels, respeito a `prefers-reduced-motion`
- SEO e Open Graph (preview bonito ao compartilhar no WhatsApp/LinkedIn)
- Sem dependências — carrega em qualquer lugar, até offline
