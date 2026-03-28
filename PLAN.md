# Portfolio — Scroll-Driven Story Plan

## Concept

A single long-scroll page that reads like a story. No traditional "sections with headers" — instead, each chapter reveals itself as the user scrolls, building a narrative arc: who you are → what you've built → how you think → get in touch.

The nav stays minimal. The page does the talking.

---

## Narrative Structure

```
[Hero]        — Opening line. Name, one punchy sentence. Full viewport.
[Chapter 1]   — "I build things." — skills/stack, revealed with staggered fade-ins
[Chapter 2]   — "Here's what I've made." — project showcases
[Chapter 3]   — "A bit about me." — background, values, what drives you
[Footer/CTA]  — "Let's talk." — contact links
```

Each chapter is a full or near-full viewport section. Scrolling through it triggers the story.

---

## Scroll Animation Strategy

Use **Framer Motion** (`motion/react` package for React 19). It's the right tool here:
- `useScroll` + `useTransform` for parallax and scroll-linked values
- `whileInView` / `useInView` for entrance animations per element
- `AnimatePresence` for any page transitions later

### Key animation patterns

| Element | Effect |
|---|---|
| Hero headline | Split text, letters stagger in on load |
| Chapter titles | Slide up + fade in on scroll enter |
| Project cards | Stagger in from bottom as you scroll into the section |
| Background | Subtle parallax shift or color-temperature drift between chapters |
| Scroll progress | Thin progress bar at top (optional) |

### CSS Scroll-Driven Animations
Tailwind v4 supports `animation-timeline: scroll()` natively. Use these for purely decorative, low-cost effects (e.g., a line drawing itself, a fading border) where JS isn't needed. Reserve Framer Motion for the meaningful content animations.

---

## Page Structure

```
src/app/
  page.tsx              ← assembles all sections in order
  layout.tsx            ← keep header; consider hiding it on scroll-down / showing on scroll-up

src/components/
  sections/
    Hero.tsx
    Skills.tsx
    Projects.tsx
    About.tsx
    Contact.tsx
  ui/                   ← shadcn (don't hand-edit)
  ScrollProgress.tsx    ← thin top bar (optional)
  AnimatedText.tsx      ← reusable staggered text reveal
```

---

## Dependencies to Add

```bash
npm install motion          # Framer Motion v12 — "motion/react" import for React 19
```

That's it. Everything else (Tailwind, shadcn, Next.js) is already in place.

> **Why not GSAP?** GSAP ScrollTrigger is powerful but adds ~50KB and requires more imperative setup. Framer Motion is idiomatic React and integrates cleanly with RSC (you just mark animated components `"use client"`).

---

## Implementation Phases

### Phase 1 — Foundation
- [ ] Remove placeholder `PageTitle` component
- [ ] Update `layout.tsx`: hide/show header on scroll (scroll-aware header)
- [ ] Set up the page as a single scroll container with `overflow-x: hidden`
- [ ] Define the color palette and typography scale in `globals.css`
- [ ] Install `motion`

### Phase 2 — Hero Section
- [ ] Full-viewport hero with your name + tagline
- [ ] Staggered text entrance animation on page load
- [ ] Subtle scroll-down cue (animated chevron or line)

### Phase 3 — Skills / Stack Section
- [ ] Grid or scattered layout of technologies
- [ ] `whileInView` stagger on each item
- [ ] Keep it short — mood over exhaustive list

### Phase 4 — Projects Section
- [ ] 2–3 featured projects, each with a visual, title, short description, links
- [ ] Cards animate in as you scroll into the section
- [ ] Optional: horizontal scroll within the section for a "film strip" feel

### Phase 5 — About Section
- [ ] Personal paragraph(s) — the human element
- [ ] Photo or illustration (optional)
- [ ] Parallax on the image vs. text if you have both

### Phase 6 — Contact / Footer
- [ ] Clean, minimal. Links to GitHub, LinkedIn, email.
- [ ] Maybe one last line that closes the story loop back to the opening.

### Phase 7 — Polish
- [ ] Scroll-aware header (hide on scroll down, reappear on scroll up)
- [ ] Dark/light mode toggle (CSS variables are already wired)
- [ ] Reduced-motion support: wrap all animations with `useReducedMotion()` from Framer Motion
- [ ] Performance audit: mark all animated components `"use client"`, keep sections as RSC where possible

---

## Notes on the Current Stack

- **React Compiler is on** — avoid manual `useMemo`/`useCallback` in animated components; let the compiler handle it.
- **shadcn RSC mode** — UI primitives stay server components. Only the wrapper components that use `motion.*` need `"use client"`.
- **Tailwind v4** — use `@keyframes` + `animation-timeline` for decorative CSS animations; use `cn()` from `@/lib/utils` for conditional Tailwind classes on animated states.
- **Afacad font** is already loaded — it's a display serif. Lean into it for headlines; pair with a clean monospace (Geist Mono is already in the config) for code/labels.

---

## Reference

- [yasio.dev](https://yasio.dev/) — narrative scroll, sparse text, strong typography
- [Framer Motion docs — scroll animations](https://motion.dev/docs/react-scroll-animations)
- [CSS scroll-driven animations (MDN)](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_scroll-driven_animations)
