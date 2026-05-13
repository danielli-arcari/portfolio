# portifolio de dados

# 🌐 Portfólio · Danielli Arçari

![HTML5](https://img.shields.io/badge/HTML5-E34F26?logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?logo=javascript&logoColor=black)
![Vercel](https://img.shields.io/badge/Deploy-Vercel-black?logo=vercel)
![Status](https://img.shields.io/badge/Status-Online-brightgreen)

> Site portfólio de **Danielli Meilene Coutinho Arçari**, analista de dados em transição de carreira.
> Apresenta projetos selecionados em SQL, Python e análise exploratória aplicados a problemas reais de negócio.

🔗 **Acesse:** [danielliarcari.vercel.app](https://danielliarcari.vercel.app/)

---

## 🧭 Sobre

Este repositório contém o código-fonte do meu site portfólio — uma página única, estática, construída em HTML/CSS/JavaScript puro e hospedada na Vercel. O site foi pensado para apresentar de forma direta:

- Os projetos de dados que considero mais relevantes do meu GitHub
- Minha trajetória de transição do Direito para a área de Dados
- Meu stack técnico e formação em andamento
- Canais de contato para oportunidades

O design segue uma estética **editorial**, com tipografia serifada (Fraunces), paleta em tons terrosos e foco em legibilidade. A ideia é que o site **pareça um documento bem escrito**, não um template tech genérico.

---

## 🎨 Identidade visual

| Elemento | Especificação |
|---|---|
| **Tipografia principal** | Fraunces (serifada, contemporânea) |
| **Tipografia secundária** | Inter (sans-serif para leitura) |
| **Tipografia de código** | JetBrains Mono |
| **Paleta** | Creme aquecido, carvão profundo, terracota queimada, azul-petróleo |
| **Layout** | Single-page com seções: Hero · Projetos · Sobre · Formação |

### Paleta de cores

```css
--paper:   #f5f1e8;   /* Fundo creme aquecido */
--ink:     #1a1814;   /* Carvão profundo */
--accent:  #b1593d;   /* Terracota queimada — personalidade */
--accent2: #2c4a52;   /* Azul-petróleo profundo — dados */
--gold:    #a47e3b;   /* Detalhes e badges */
```

A combinação foi pensada para transmitir **calor humano + precisão analítica + sofisticação profissional** — três atributos que considero essenciais para uma profissional vinda do Direito que hoje trabalha com dados.

---

## 📂 Estrutura do Repositório

```
📦 portfolio
 ┣ 📄 index.html       <- Página única com todo o conteúdo
 ┗ 📄 README.md
```

Tudo em um único arquivo `index.html`: HTML semântico, CSS inline no `<head>` e JavaScript leve no final do `<body>` (apenas para animações fade-up via IntersectionObserver).

**Por que página única e tudo inline?**

- Carregamento instantâneo, sem requests extras
- Fácil de manter — um arquivo, uma fonte de verdade
- Hospedagem trivial (qualquer estática serve)
- Recrutador abre, lê tudo e fecha. Sem distrações.

---

## 🚀 Como rodar localmente

```bash
# 1. Clone o repositório
git clone https://github.com/danielli-arcari/portfolio.git
cd portfolio

# 2. Abra o index.html no navegador
# (não precisa de servidor — é HTML puro)

# Ou, se preferir servir via http:
python -m http.server 8000
# Acesse http://localhost:8000
```

---

## 📊 Projetos apresentados

O site destaca 5 projetos principais selecionados como mais relevantes para a área de Análise de Dados:

| # | Projeto | Foco |
|---|---|---|
| 🥇 | [Alura Store](https://github.com/danielli-arcari/Alura_Store) | Case de negócio · decisão estratégica |
| 2 | [TelecomX — Evasão de Clientes](https://github.com/danielli-arcari/Analise_evasao_TelecomX) | Análise de churn (clássico de DA) |
| 3 | [População Prisional MG (2017–2024)](https://github.com/danielli-arcari/analisededados_populacaoprisionalMG_2017a2024) | Projeto autoral · dados públicos |
| 4 | [Banco de Dados Acadêmico em MySQL](https://github.com/danielli-arcari/BD_FACULDADE) | SQL puro · modelagem relacional |
| 5 | [Mercado Imobiliário do RJ](https://github.com/danielli-arcari/projeto_imobiliaria) | Wrangling · feature engineering |

E mais 3 projetos complementares em "Outros projetos":

- [TelecomX com Machine Learning](https://github.com/danielli-arcari/telecomX-churn-analysisML)
- [Emissões de GEE no Brasil](https://github.com/danielli-arcari/analise_gases_efeitoestufa)
- [SQLAlchemy & Instituição Financeira](https://github.com/danielli-arcari/InstituicaoFinanceira_com_SQLAlchemy)

---

## 🛠 Decisões técnicas

**Por que HTML/CSS/JS puro em vez de React ou Next.js?**

Porque para um portfólio de uma página, framework é overengineering. HTML puro carrega mais rápido, é mais fácil de manter, e mostra que sei o que estou fazendo sem precisar esconder atrás de abstrações.

**Por que tudo inline (CSS dentro de `<head>`)?**

Mesma lógica: zero requests extras. A página renderiza no primeiro byte.

**Por que tipografia serifada?**

Serifa traz peso editorial. Combina com a ideia de que o conteúdo merece ser lido como um documento, não como uma landing genérica.

**Por que essa paleta terrosa?**

Sou mineira (Itabira/MG). Quis uma paleta que evocasse terra e calma, em vez do azul-cromado de SaaS. E o terracota com azul-petróleo cria contraste interessante: o quente (eu, humana) e o frio (os dados, precisos).

---

## ♿ Acessibilidade

- HTML semântico (`<header>`, `<nav>`, `<section>`, `<footer>`)
- Hierarquia correta de headings
- Contraste de cores conforme WCAG AA
- Foco visível em elementos interativos
- Imagens com `alt` quando aplicável
- Suporte a navegação por teclado
- Animações respeitam `prefers-reduced-motion` (no roadmap)

---

## 🚧 Roadmap

- [ ] Versão em inglês (para vagas internacionais)
- [ ] Modo escuro opcional
- [ ] Suporte a `prefers-reduced-motion`
- [ ] Thumbnails dos projetos com preview visual
- [ ] Página dedicada para cada projeto destacado
- [ ] Otimização de imagens (formato WebP)

---

## 📬 Contato

[![LinkedIn](https://img.shields.io/badge/LinkedIn-0077B5?style=flat&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/danielli-arcari/)
[![GitHub](https://img.shields.io/badge/GitHub-181717?style=flat&logo=github&logoColor=white)](https://github.com/danielli-arcari)
[![Gmail](https://img.shields.io/badge/Gmail-D14836?style=flat&logo=gmail&logoColor=white)](mailto:axiadmc@gmail.com)
[![Portfólio](https://img.shields.io/badge/Portf%C3%B3lio-Vercel-black?style=flat&logo=vercel&logoColor=white)](https://danielliarcari.vercel.app/)

📍 Itabira/MG · Brasil

---

## 👩‍💻 Autora

**Danielli Meilene Coutinho Arçari**

Graduanda em Ciência da Computação (UNINTER), em transição para a área de Dados após 17 anos no Direito. Apaixonada por transformar dados em decisões claras e bem fundamentadas.

