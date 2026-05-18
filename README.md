# Portfólio · Danielli Arçari

Portfólio profissional construído sob medida, com estética premium inspirada em
Linear, Vercel e Raycast. Foco em maturidade visual, hierarquia tipográfica
forte e UX fluida.

---

## Stack

- **HTML5** semântico
- **CSS3** com custom properties (design tokens)
- **JavaScript vanilla** (sem framework, sem build step)
- **Google Fonts** — Inter, Instrument Serif, JetBrains Mono
- **SVG inline** para todos os gráficos/thumbnails (sem dependência de imagens)

Zero build step, zero dependências. Abre direto no navegador ou faz deploy
estático em qualquer lugar (Vercel, Netlify, GitHub Pages, Cloudflare Pages).

---

## Estrutura de pastas

```
portfolio/
├── index.html                  ← Home (Hero · Sobre · Stack · Projetos · Trajetória · Contato)
│
├── projetos/                   ← 8 páginas de case (uma por projeto)
│   ├── alura-store.html        ← 01 · Análise comparativa de 4 lojas (case de negócio)
│   ├── telecomx.html           ← 02 · Análise de churn em operadora
│   ├── populacao-prisional.html← 03 · Dados públicos · sistema prisional MG
│   ├── bd-faculdade.html       ← 04 · Modelagem MySQL ponta a ponta
│   ├── imobiliaria.html        ← 05 · Data wrangling · 32 mil imóveis
│   ├── telecomx-ml.html        ← 06 · Machine learning · churn preditivo
│   ├── gee-brasil.html         ← 07 · Análise ambiental · SEEG
│   └── sqlalchemy.html         ← 08 · ORM + persistência
│
├── css/
│   ├── tokens.css              ← Design system (cores, tipografia, espaçamento, motion)
│   ├── base.css                ← Reset, defaults, background ambient, accessibility
│   ├── components.css          ← Nav, Buttons, Tags, Cards, Footer (primitivas)
│   ├── home.css                ← Estilos específicos da home (hero, marquee, stack, projects)
│   └── project.css             ← Estilos específicos das páginas de case (TOC, viz, stats)
│
├── js/
│   └── main.js                 ← IntersectionObserver, spotlight cursor, scrollspy, nav state
│
└── README.md                   ← Este arquivo
```

---

## Decisões de design

### Paleta

| Token | Hex | Uso |
|---|---|---|
| `--bg-base` | `#08080B` | Background principal — preto profundo, não puro |
| `--bg-card` | `#131318` | Cards e superfícies elevadas |
| `--accent` | `#6366F1` | Iris/índigo — único acento de cor (todo o resto é monocromático) |
| `--accent-hover` | `#818CF8` | Estados hover, links, valores destacados |
| `--teal` | `#2DD4BF` | Acento secundário, usado com parcimônia |
| `--fg-primary` | `#F4F4F5` | Texto principal — não branco puro, evita brilho excessivo |
| `--fg-tertiary` | `#8A8A93` | Texto secundário, labels |

**Por que índigo?** Cor neutra-mas-distintiva, associada a tech sério (Linear,
Vercel). Não tem o peso pop do roxo, nem a frieza do azul corporativo.

### Tipografia

- **Inter** — body e headings. Padrão de mercado SaaS premium.
- **Instrument Serif** — itálicos em destaque ("dados", "decisão", etc.).
  Quebra o tom 100% sans, dá uma assinatura editorial. Linear faz isso.
- **JetBrains Mono** — labels técnicos, tags, datas. Sinaliza identidade tech.

Escala modular 1.25× com clamp() para responsividade fluida sem media queries.

### Motion

Tudo curto, tudo `ease-out-expo` (curva natural). Reveal-on-scroll com
IntersectionObserver, hover lift de 2px em cards, spotlight radial que segue
o cursor. `prefers-reduced-motion` desativa tudo automaticamente.

### Acessibilidade

- HTML semântico (`<main>`, `<nav>`, `<article>`, `<aside>`, `<section>`)
- Headings com hierarquia correta (h1 único por página, h2/h3 aninhados)
- `aria-label` em ícones e links sem texto
- Focus-visible com outline de 2px (não removido)
- Contraste WCAG AA em todos os textos
- Imagens decorativas com `aria-hidden`
- Scroll-padding-top para anchor jumps respeitarem o nav fixo
- Suporte a `prefers-reduced-motion`

---

## Como rodar localmente

**Opção 1 — VS Code Live Server** (mais simples):

```
botão direito em index.html → "Open with Live Server"
```

**Opção 2 — Python**:

```bash
cd portfolio
python -m http.server 8000
# abrir http://localhost:8000
```

**Opção 3 — Node**:

```bash
npx serve .
```

Como tudo é estático, abrir `index.html` direto no navegador (`file://`)
também funciona — mas alguns navegadores limitam fetches e CSS via file://
em corner cases. Servir local é mais confiável.

---

## Como fazer deploy

### Vercel (recomendado — você já usa)

```bash
# instalar uma vez
npm i -g vercel

# fazer deploy
cd portfolio
vercel
```

Vai pedir login na primeira vez. Depois, cada `vercel --prod` atualiza o site
em produção. O projeto está pré-configurado para funcionar sem nenhum ajuste
porque é estático puro.

### Netlify

Arrasta a pasta `portfolio/` inteira para [app.netlify.com/drop](https://app.netlify.com/drop).
Deploy em segundos.

### GitHub Pages

```bash
# na raiz do repositório
git init
git add .
git commit -m "portfolio"
git push origin main

# settings → pages → branch: main / root
```

---

## Como adicionar um novo case

1. Duplique uma das páginas em `projetos/` (recomendo `bd-faculdade.html` —
   estrutura mais limpa)
2. Atualize: título, lede, meta (papel/período/tipo/stack), hero viz SVG, e o
   conteúdo de cada `<section>` (Contexto, Problema, Abordagem, Achados,
   Decisão, Stack, Aprendizados)
3. Atualize a navegação "próximo / anterior" no rodapé da nova página
4. Adicione um novo `<a class="project-card">` em `index.html` na seção
   `#projetos` — copie um dos cards existentes e ajuste

Tudo o que muda entre páginas é conteúdo. A estrutura HTML e o CSS são
compartilhados — então mudanças visuais propagam automaticamente.

---

## Performance

- **Sem imagens raster** — todos os gráficos são SVG inline
- **Sem build, sem JS frameworks** — tempo de carregamento mínimo
- **Fontes via Google Fonts** com `preconnect` para minimizar handshake
- **CSS modular** — só carrega o que cada página precisa
- **Lazy loading natural** — IntersectionObserver evita animações fora da tela

Espera-se Lighthouse 95+ em todas as métricas (Performance, Accessibility,
Best Practices, SEO) com deploy estático em Vercel/Netlify.

---

## Próximos passos sugeridos

- [ ] Adicionar foto pessoal na hero section (atualmente clean, sem foto — fica a critério)
- [ ] Configurar Open Graph image customizada para preview no LinkedIn/WhatsApp
- [ ] Considerar adicionar um botão de download de CV em PDF
- [ ] Internacionalização para inglês (estágios remotos internacionais)

---

© 2026 Danielli Arçari · axiadmc@gmail.com
