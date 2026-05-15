# CLAUDE.md — Sylvia Rose Portfolio

This file gives you permanent context about this codebase. Read it before making any changes.

---

## Stack

- **Framework**: React 18 + TypeScript, bundled with Vite (pure client-side SPA — no Next.js, no SSR)
- **Styling**: Tailwind CSS + CSS custom properties defined in `src/index.css`
- **Animations**: Framer Motion for all entrance animations and transitions
- **Routing**: react-router-dom (client-side only)
- **Icons**: lucide-react
- **UI primitives**: shadcn/ui in `src/components/ui/` (DropdownMenu used in nav)
- **Fonts**: DM Serif Display (headings) + Inter (body) via Google Fonts

---

## Site Structure

| Route | File | Description |
|---|---|---|
| `/` | `src/pages/Index.tsx` | Home: HeroSection → GalleryPlaceholder → AboutSection → Footer |
| `/projects/:slug` | `src/pages/CategoryPage.tsx` | Project list for a category using ProjectCard |
| `*` | `src/pages/NotFound.tsx` | 404 page |

### Key components
- **HeroSection** — logo, hero image, bio, nav with Projects dropdown
- **GalleryPlaceholder** — auto-advancing slideshow with lightbox
- **AboutSection** — portrait photo + bio text
- **Footer** — contact, location, expertise areas
- **ProjectCard** — expandable project row with detail images/videos and lightbox

---

## Where to Make Edits

### Content & project data
**`src/data/projects.ts`** is the single source of truth for all projects and categories. This is almost always the right place to add, edit, or remove projects.

- Project IDs run `SR001`–`SR008` — the `id` field links projects to `categories[].projectIds`. Never change an ID without updating the corresponding category entry.

### Global styles & design tokens
**`src/index.css`** defines all CSS variables (`--background`, `--foreground`, `--font-display`, etc.) and custom utility classes (`.editorial-text`, `.meta-text`, `.link-underline`). These variables are referenced everywhere via Tailwind — do not rename them.

### Images & assets
All images and videos live in **`src/assets/`**. They must be imported as ES module imports at the top of the file that uses them — never use raw string paths. Vite handles hashing and bundling via the import.

To add a new image:
1. Drop the file into `src/assets/`
2. Add an import at the top of the relevant component file
3. Reference the imported variable in JSX

---

## What Not to Touch

- **`src/components/ui/`** — auto-generated shadcn/ui code. Only edit if you know exactly what you're doing.
- **`src/App.css`** — leftover Vite boilerplate, effectively unused. Leave it alone.
- **CSS variable names in `index.css`** — renaming any `--variable` breaks the entire design system.
- **Project `id` fields in `projects.ts`** — changing an ID without updating `categories[].projectIds` will break category pages.
- **`@tanstack/react-query`** — installed and wired up in `App.tsx` but not actively used yet. Don't remove it.

---

## Important: Auto-Sync Workflow

**`.github/workflows/sync.yml`** syncs this repo from an upstream fork (`abhinav-meh/pixel-perfect-palette-984`) every 6 hours and can overwrite changes. Before making edits, check whether this workflow is active. If it is, either disable it or ensure all changes are committed and pushed before the next sync window.

---

## Preferences

- Keep all animations using **Framer Motion** — don't introduce CSS keyframe animations for entrance effects
- Tailwind utility classes only for layout and spacing — no inline `style` props unless absolutely necessary
- TypeScript strict mode is on — all new code must be properly typed
- When adding a new project, always update `src/data/projects.ts` only — don't hardcode content into components