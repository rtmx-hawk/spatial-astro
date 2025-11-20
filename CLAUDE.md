# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Spatial Interior Design is a luxury interior design portfolio website built with Astro, TypeScript, and Tailwind CSS. The site showcases mountain-lake living design projects with a cinematic, high-end aesthetic. All imagery is stored in `public/assets/` - no external APIs or keys required.

## Development Commands

- `npm install` - Install dependencies
- `npm run dev` - Start development server on port 3000 (accessible on 0.0.0.0)
- `npm run build` - Production build (outputs to dist/)
- `npm run preview` - Preview production build

## Architecture

### Routing
Uses **Astro's file-based routing**. Each `.astro` file in `src/pages/` becomes a route:
- `src/pages/index.astro` → `/`
- `src/pages/gallery.astro` → `/gallery`
- `src/pages/about.astro` → `/about`
- `src/pages/contact.astro` → `/contact`

Navigation uses standard `<a href="/page">` links. Astro handles client-side routing automatically.

### Project Structure
```
src/
  pages/          - Route files (.astro)
  layouts/        - Base Layout.astro with fonts and global styles
  components/     - Reusable Astro components (Hero, Navbar, Footer)
  data/           - TypeScript data files (constants.ts, types.ts)
public/
  assets/         - Static images and media
```

### Styling
- **Tailwind CSS** properly installed with configuration
- **Google Fonts**: Cormorant Garamond (serif) for headings, Montserrat (sans) for body
- Custom color palette in `tailwind.config.mjs` - use semantic color names:
  - `earthy-green`, `soft-cream`, `cool-grey`, `warm-sand`, `golden-tan`, `taupe`
- Custom animations defined in `tailwind.config.mjs` (Ken Burns effect)
- Component-specific styles use Astro's `<style>` tags

### Data Structure
All content centralized in `src/data/constants.ts`:
- `PROJECTS[]` - Portfolio items with image paths, locations, categories
- `TEAM[]` - Team member bios
- `NAV_ITEMS[]` - Navigation structure with href values
- `HERO_IMAGES[]` - Hero carousel images
- Image paths reference `/assets/` (public folder)

When adding content, update constants.ts with absolute paths to public assets.

### Component Patterns

**Astro Components** (.astro files):
- Frontmatter (`---`) for imports and logic
- HTML-like template syntax
- `<script>` tags for client-side interactivity
- `<style>` tags for component styles

**Client-Side Interactivity**:
- Hero carousel uses vanilla JS in `<script>` tag
- Contact page ambient image cycling
- Gallery filtering and lightbox modal
- Navbar scroll behavior (only on home page)

### Image Handling
Images stored in `public/assets/`. Reference with absolute paths starting with `/assets/`. Astro serves public folder contents at root.

Example: `<img src="/assets/image.jpg" alt="..." />`

## Key Patterns

- Static-first: Pages render to HTML at build time
- Progressive enhancement: Client-side JS adds interactivity
- Hero carousel: 12-second interval with Ken Burns zoom animation
- Gallery: Client-side filtering by category, lightbox modal for full images
- Contact: Ambient background image cycling
- Navbar: Transparent on home hero, solid on scroll or other pages
- Design aesthetic: luxury minimalism with earth tones, generous whitespace, cinematic imagery
