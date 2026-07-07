# Dinâmica Contabilidade

Site institucional moderno para a Dinâmica Contabilidade, desenvolvido com Next.js, React, TypeScript e TailwindCSS.

## Como rodar localmente

```bash
npm install
npm run dev
```

Depois acesse `http://localhost:3000`.

## Build de produção

```bash
npm run build
npm run start
```

## URL pública

Para Open Graph e compartilhamento em redes sociais, configure a variável abaixo na Vercel quando tiver o domínio final:

```bash
NEXT_PUBLIC_SITE_URL=https://seudominio.com.br
```

## Como editar textos, telefone e links

Todo o conteúdo principal fica em:

`src/data/site-content.ts`

Nesse arquivo você pode alterar:

- nome da empresa;
- slogan;
- número de WhatsApp;
- e-mail;
- endereço;
- horário de atendimento;
- redes sociais;
- textos do hero, sobre e CTA;
- lista de serviços;
- diferenciais;
- públicos atendidos;
- etapas do processo.

O WhatsApp está com número placeholder:

```ts
number: "5533999999999"
```

Substitua pelo número real no padrão internacional, sem espaços, traços ou parênteses. Exemplo: `5533999999999`.

## Logos e favicon

Os arquivos ficam em `public/`:

- `logo-dinamica.png`: logo principal;
- `logo-dinamica-redonda.png`: versão circular;
- `favicon.png`: ícone do navegador.

## Deploy na Vercel

1. Envie o projeto para o GitHub.
2. Acesse https://vercel.com/new.
3. Importe o repositório.
4. Mantenha o framework como Next.js.
5. Use o comando de build padrão: `npm run build`.
6. Publique.

## Estrutura

```txt
src/
  app/
    globals.css
    layout.tsx
    page.tsx
  components/
    About.tsx
    AnimatedSection.tsx
    Audience.tsx
    Contact.tsx
    CTA.tsx
    Differentials.tsx
    Footer.tsx
    Header.tsx
    Hero.tsx
    Process.tsx
    SectionHeading.tsx
    Services.tsx
  data/
    site-content.ts
  lib/
    utils.ts
```
