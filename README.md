
# Craftea.cl Branding Colors – SvelteKit + Tailwind CSS

This project is a simple SvelteKit application that showcases the Craftea.cl branding color palette using Tailwind CSS. It is configured for static site generation and deployment to GitHub Pages.

## Features

- **SvelteKit** app with static adapter for static site generation
- **Tailwind CSS** with custom color palettes for Craftea.cl (gray, electric-violet, white, dark)
- **Responsive** and modern UI to visualize all branding colors
- **GitHub Actions** workflow for automatic deployment to GitHub Pages

## Development

Install dependencies:

```bash
npm install
```

Run the development server:

```bash
npm run dev
```

## Build & Deploy

To build the static site:

```bash
GITHUB_PAGES=1 npm run build
```

The output will be in the `build/` directory, ready for deployment.

Deployment to GitHub Pages is automated via the included GitHub Actions workflow (`.github/workflows/deploy.yml`).

## Customization

- Update the color palettes in `tailwind.config.js` as needed.
- Edit `src/App.svelte` to change the color showcase layout or add more branding elements.

---

© {new Date().getFullYear()} Craftea.cl
