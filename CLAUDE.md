# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

This project uses **pnpm**, not npm or yarn — the lockfile is `pnpm-lock.yaml` and `pnpm-workspace.yaml` records approved postinstall scripts. Use `pnpm`, not `npm`/`npx`, for all package operations.

```bash
pnpm install       # install dependencies
pnpm dev           # start dev server (Turbopack) at localhost:3000
pnpm build         # production build (also runs the TypeScript check)
pnpm lint          # eslint via flat config (eslint.config.js)
pnpm start         # run a production build locally
```

There is no test suite in this repo.

## Architecture

This is a single-page personal portfolio (Next.js 16 App Router, React 19, TypeScript, Tailwind CSS v4). Tailwind v4 uses CSS-based config: there is no `tailwind.config.js`, theme tokens and dark-mode variant live in `app/globals.css` (`@theme`, `@custom-variant dark`).

**Content is centralized in `lib/data.ts`.** Nav links, experience entries, project entries, and the skills list all live there as `as const` arrays. Section components (`components/intro.tsx`, `about.tsx`, `experience.tsx`, `projects.tsx`, `skills.tsx`) import from it and render — copy edits and new experience/project entries belong in `lib/data.ts`, not scattered across components. `app/page.tsx` composes the section components in page order; `app/layout.tsx` wraps them with the theme/active-section providers, header, footer, and toaster.

**Active-nav-highlighting is a two-part system.** `lib/hooks.ts`'s `useSectionInView` (built on `react-intersection-observer`) is called once per section component to register that section's `ref` and report when it's in view. `context/active-section-context.tsx` holds the resulting `activeSection` plus a `timeOfLastClick` timestamp — the timestamp exists so a manual nav click doesn't get immediately overridden by the intersection observer firing mid-scroll (`header.tsx`'s click handler sets both the section and the timestamp; `useSectionInView` checks that at least 1s has passed before trusting the observer). `header.tsx` reads `activeSection` from the context to highlight the current nav item.

**Theme is a separate context.** `context/theme-context.tsx` reads `localStorage`/`prefers-color-scheme` in a `useEffect` (must stay in an effect, not a `useState` initializer, since those APIs aren't available during SSR) and toggles a `dark` class on `<html>`; Tailwind's dark variant is class-based, not media-query-based.

**The contact form is a Server Action, and the Resend client is intentionally instantiated inside the action, not at module scope** (`actions/sendEmail.ts`). Resend v6+ validates the API key eagerly on construction and throws if it's missing — instantiating it inside the try/catch means a missing/misconfigured `RESEND_API_KEY` only fails that form submission gracefully, instead of throwing during module evaluation and crashing the entire page render. Don't hoist `new Resend(...)` back out to module scope. The email template itself is a React Email component (`email/contact-form-email.tsx`).

**Path alias**: `@/*` resolves to the repo root (see `tsconfig.json`).

**Images**: `next.config.js` allow-lists `images.unsplash.com` as a remote pattern and explicitly sets `images.qualities` (Next 16 requires declaring quality values used via the `quality` prop). The Tongyou project's walkthrough GIF (`public/tongyou-walkthrough.gif`) is rendered with a plain `<img>`, not `next/image` — the image optimizer would re-encode and break the GIF's animation.

## Deployment

Auto-deploys to Vercel on push to `main` (project `portfolio-akshatwho`, team `just-me-57e0`). PRs get their own preview deployment. `RESEND_API_KEY` must be set in the Vercel project's environment variables (Production and Preview) for the contact form to work in deployed environments — it isn't in `.env.local` by default.
