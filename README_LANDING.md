# ICareFM Landing Page

A modern, clean landing page for ICareFM built with Astro and Tailwind CSS, inspired by the Astrolus template.

## Setup

1. Install dependencies:
```bash
npm install
```

2. Run development server:
```bash
npm run dev
```

3. Build for production:
```bash
npm run build
```

## Deployment

The landing page is configured for GitHub Pages deployment. The workflow is set up in `.github/workflows/deploy.yml`.

To deploy:
1. Push changes to the `main` branch
2. GitHub Actions will automatically build and deploy to GitHub Pages
3. The site will be available at `https://ratschlab.github.io/icarefm`

## Customization

### Colors

The color palette is defined in `tailwind.config.mjs` and follows the ICareFM brand colors:
- Accent Blue: `#3C5488`
- Blue Light: `#4DBBD5`
- Blue Dark: `#8491B4`
- Green Dark: `#00A087`
- Green Light: `#91D1C2`
- And more...

### Components

- `Hero.astro` - Main hero section with title and CTAs
- `Features.astro` - Key highlights section
- `Stats.astro` - Statistics display
- `CTASection.astro` - Call-to-action section
- `Navbar.astro` - Navigation header
- `Footer.astro` - Footer with links and attribution

## Structure

```
/
├── src/
│   ├── components/     # Reusable components
│   ├── layouts/       # Page layouts
│   └── pages/         # Pages (index.astro)
├── public/            # Static assets
├── astro.config.mjs   # Astro configuration
└── tailwind.config.mjs # Tailwind configuration
```
