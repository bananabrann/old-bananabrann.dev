<p align="center">
  <a href="https://bananabrann.dev/">
    <img alt="bananabrann.dev logo" src="https://bananabrann.blob.core.windows.net/github/bananabrann-text.png" width="546">
  </a>
</p>

<p align="center">
  Personal website of me. Hi! 👋
</p>

<p align="center">
  <img alt="GitHub deployments" src="https://img.shields.io/github/deployments/bananabrann/bananabrann.dev/production?label=vercel%20deployment&logo=vercel&logoColor=white">
  <img alt="GitHub package.json version" src="https://img.shields.io/github/package-json/v/bananabrann/bananabrann.dev?color=informational">
</p>

## Technologies used
- [Next.js](https://nextjs.org/), Node server-side rendering framework
- [React](https://reactjs.org/), JavaScript user interface library
- [Tailwind](https://tailwindcss.com/), utility-first CSS framework

## Getting started
### Run locally
```bash
npm run dev
```

For more information, or detailed instructions, [follow the Next.js 'Getting Started' documentation.](https://nextjs.org/docs/old#automatic-setup)

### Deploy this website
This project uses [Vercel](https://vercel.com/dashboard), a free (for personal use) hosting service for Next.js apps. CI handles automated deployments, with the 'main' branch for production and 'dev' for preview. To deploy, simply push code into those branches.

## Periodically building
This site triggers a production build daily in order to rebuild static content. Items are served this way instead of rendering per request to increase site performance and decrease compute time for both Vercel and Twitter's API (it's cheaper!).

For this to work, the following needs to be true:
- The Vercel webhook is configured correctly.
- The Github secret is set with the proper webhook URL.
