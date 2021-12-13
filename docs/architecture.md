# Architecture

This is – quite deliberately - a very standard React app, using the framework
Next. Most of the technologies should require little to no explanation.

## Design

This application is intended to sit alongside the existing
[ATD-AEM](https://bitbucket.org/juiceplus/atd-aem) one. At the network layer,
`/dashboard` will route to this application and all other routes will continue to
be handled by ATD, initially. As time goes on, we can bring across more and more
routes to this application.

## Technologies

### [Typescript](https://www.typescriptlang.org)

Use the strictest configuration possible.

### [Next](https://nextjs.org)

Caveat Emptor.

### [Tailwind](https://tailwindcss.com)

We have a [Tailwind UI](https://tailwindui.com) account that you can use to find
baseline components, behaviour (animations, dialogs, etc.) to work from.

### [Mock Service Worker](https://mswjs.io)

We mock the backend(s) using [msw](https://mswjs.io). You can disable mocks by
setting the environment variable `MOCKS_ENABLED` to `false`. This should be set
to false at build time so that these mocks are stripped from the production
bundle.

## Misc

[ESLint](https://eslint.org) and [Prettier](https://prettier.io) are configured
to take care of linting and formatting, respectively. It's recommended to have
your editor configured to run these on save.

### Icons

The raw icons from the design system come pretty borked. Before converting the
with svgr, clean them up with svgo:

```shell
svgo --enable=removeDimensions -f path/to/raw/icons -o app/icons
```
