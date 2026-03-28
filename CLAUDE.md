# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev      # Start development server
npm run build    # Production build
npm run lint     # Run ESLint
```

There is no test suite configured.

## Architecture

This is a Next.js 16 portfolio site using the App Router with React 19 and TypeScript.

**Key directories:**
- `src/app/` — App Router pages and layouts. `layout.tsx` is the root layout (Geist fonts, global CSS). `page.tsx` is the home page.
- `src/components/ui/` — shadcn/ui components (auto-generated via `npx shadcn add <component>`). Do not hand-edit these unless necessary.
- `src/lib/utils.ts` — exports `cn()` helper (clsx + tailwind-merge) for conditional class merging.

**Styling:**
- Tailwind CSS v4 with CSS variables for theming. Theme tokens are defined in `src/app/globals.css` under `:root` (light) and `.dark` (dark mode via `.dark` class).
- shadcn configured with `radix-nova` style, neutral base color, lucide icons. Config in `components.json`.

**Path aliases** (configured in `tsconfig.json`):
- `@/components` → `src/components`
- `@/lib` → `src/lib`
- `@/hooks` → `src/hooks`

**Notable config:**
- React Compiler is enabled (`next.config.ts`).
- shadcn uses RSC mode (`"rsc": true`), so UI components are server-component-compatible by default.
