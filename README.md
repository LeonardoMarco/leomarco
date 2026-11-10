# leomarco.dev

Portfólio de Leonardo Marco em **Next.js (App Router), React e TypeScript**. Interface em português, responsiva, com fontes locais e navegação por páginas.

## Desenvolvimento

Requer Node.js 20.9 ou superior e npm. Recomendado Node.js 24 LTS.

```bash
npm ci
npm run dev
```

Abra http://localhost:3000. Para escolher outra porta: `npm run dev -- --port 3100`.

## Validação e produção

```bash
npm run typecheck
npm run build
npm start
```

O projeto pode ser hospedado em um serviço com suporte a Next.js, como Vercel, ou em um servidor Node.js. A criação local não publica o site.

## GitHub Pages

O workflow `.github/workflows/deploy-pages.yml` exporta o site inteiro e publica a pasta `out/` no GitHub Pages quando há um push na branch padrão do repositório. Em **Settings → Pages → Build and deployment**, selecione **GitHub Actions** como fonte.

O workflow usa o caminho e o domínio informados pelo próprio GitHub Pages. Assim, links, imagens e metadados funcionam tanto em um repositório de projeto como em um domínio próprio. Para testar localmente o caminho de `LeonardoMarco/leomarco`:

```bash
GITHUB_PAGES_EXPORT=1 NEXT_PUBLIC_BASE_PATH=/leomarco NEXT_PUBLIC_SITE_ORIGIN=https://leonardomarco.github.io npm run build
```

Depois da publicação, a home deve ficar em `https://leonardomarco.github.io/leomarco/` e o portfólio em `https://leonardomarco.github.io/leomarco/projetos/`. O endereço final aparece no resultado do deploy do GitHub Actions.

## Conteúdo e estrutura

- `src/data/profile.ts`: dados pessoais, navegação e experiências profissionais.
- `src/app/page.tsx`: apresentação minimalista da home.
- `src/app/sobre/page.tsx` e `src/app/trajetoria/page.tsx`: páginas pessoais.
- `src/app/projetos/page.tsx` e `src/app/projetos/[slug]/page.tsx`: portfólio de projetos e páginas de detalhe, acessíveis pela URL direta.
- `src/data/projects.ts`: descrições dos projetos, recursos e tecnologias.
- `src/components/journey.tsx`: linha do tempo animada das experiências profissionais.
- `src/components/header.tsx` e `src/components/footer.tsx`: navegação entre páginas e links de contato.
- `src/app/globals.css`: identidade visual e regras responsivas.
- `src/app/opengraph-image.png`: imagem estática de compartilhamento; `assets/opengraph.svg` é a fonte editável.
- `CONTENT.md`: fontes e limites dos dados usados.

O link do LinkedIn permanece no rodapé e na página Sobre. Não há formulário sem backend, dados pessoais fictícios, métricas inventadas ou dependência de serviços externos para renderizar a página. O retrato da seção Sobre foi enviado pelo proprietário e está em `public/images/leonardo-marco.png`. As fontes são servidas localmente via Fontsource.

A linha do tempo apresenta sete organizações e nove cargos informados por Leonardo em capturas do LinkedIn. Para atualizar a história, edite `experiences` em `src/data/profile.ts`. As etapas aparecem ao entrar na tela e a linha avança com o scroll. Com movimento reduzido ou JavaScript desativado, o conteúdo permanece legível.

O portfólio em `/projetos` reúne Calculadora de Pace, Stoque Fácil e Estantinha. Cada cartão leva a uma página própria com contexto, recursos, tecnologias e link para o produto. A página não aparece no menu nem é referenciada pelas páginas pessoais. As imagens locais ficam em `public/images/portfolio/`.

No GitHub Pages, o workflow define automaticamente a origem usada nos metadados de compartilhamento.
