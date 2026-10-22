# Design System — Umar Khan's Portfolio

> **Bold. Fluid. Readable.** Big confident type, one strong accent, generous space, and motion that guides the eye without getting in the way.

This file is the source of truth for how the portfolio looks and moves. When a component disagrees with this file, fix the component (or update this file on purpose).

**Stack:** Next.js 16 (App Router) · Tailwind CSS v4 (`@theme` in `app/globals.css`) · Framer Motion 12 · Lucide icons · Funnel Display (via `next/font/google`)

---

## 1. Principles

| Principle | What it means in practice |
|---|---|
| **Bold** | Headlines are big and heavy (700–800). One accent colour, used sparingly, so it reads as important. High contrast between heading and body. |
| **Fluid** | Type, spacing and layout scale smoothly with the viewport using `clamp()`. No size jumps at breakpoints, no horizontal scroll at 320px. |
| **Readable** | Body text ≥ 17px, line length 60–75 characters, line height 1.6–1.7, WCAG AA contrast (4.5:1 body, 3:1 large text). |
| **Clear** | Each section has one heading, one job, and a clear visual order: heading → supporting text → content → action. |
| **Motion with purpose** | Every existing animation stays (see §7). Motion reveals content and confirms interaction; it never blocks reading. |

---

## 2. Colour

Warm cream base in light mode, near-black in dark mode, with a single bold accent. Define everything as tokens — no raw `gray-800` / `neutral-600` scattered through components.

### Tokens

Add to `app/globals.css`:

```css
@theme {
  --font-sans: var(--font-funnel), ui-sans-serif, system-ui, sans-serif;

  /* Surfaces */
  --color-bg: #f7f1e3;        /* cream */
  --color-surface: #fffcf5;   /* warm off-white */
  --color-surface-muted: #f3ecdc;
  --color-border: #e7dcc5;

  /* Text */
  --color-ink: #0a0a0a;        /* headings */
  --color-copy: #3f3f46;       /* paragraphs — 10.4:1 on white */
  --color-muted: #71717a;      /* dates, meta — 4.8:1 on white */

  /* Accent — the one bold colour */
  --color-accent: #4f46e5;     /* indigo-600 */
  --color-accent-ink: #ffffff; /* text on accent */
  --color-accent-soft: #eef2ff;
}

@media (prefers-color-scheme: dark) {
  :root {
    --color-bg: #0a0a0a;
    --color-surface: #171717;
    --color-surface-muted: #262626;
    --color-border: #2e2e2e;

    --color-ink: #fafafa;
    --color-copy: #d4d4d8;
    --color-muted: #a1a1aa;

    --color-accent: #818cf8;   /* indigo-400 — brighter for dark bg */
    --color-accent-ink: #0a0a0a;
    --color-accent-soft: #1e1b4b;
  }
}
```

Tailwind v4 turns these into utilities automatically: `bg-surface`, `text-ink`, `text-copy`, `text-muted`, `border-border`, `bg-accent`, `text-accent`.

### Usage rules

- **Accent is for emphasis only:** the name in the hero, primary buttons, active nav link, focus rings, timeline dots. If more than ~5% of a screen is accent, it's too much.
- **Headings** → `text-ink`. **Paragraphs** → `text-copy`. **Meta** (dates, company, captions) → `text-muted`.
- **Cards** → `bg-surface` + `border border-border`. Shadows are secondary (see §5).
- **Skill proficiency colours** (red / amber / blue / green) encode data. Light mode uses soft 100→200 tints so chips don't overpower the cream background. Move the map to one place: `SkillBadge.tsx` already has it; `Skills.tsx` duplicates it and should import from there.
- **Brand icon colours** (LinkedIn blue, Gmail red) stay.

### Background

Keep the dot grid — it's part of the identity — but soften it so it never competes with text:

```css
html, body {
  background-color: var(--color-bg);
  background-image: radial-gradient(circle, rgb(113 113 122 / 0.25) 1px, transparent 1px);
  background-size: 28px 28px;
}
```

---

## 3. Typography

**Typeface:** Funnel Display, weights 300–800 (already loaded in `app/layout.tsx`). One family; hierarchy comes from size and weight.

### Fluid type scale

Sizes scale smoothly from 360px to 1280px viewports. Add to the `@theme` block:

```css
@theme {
  --text-display: clamp(2.5rem, 1.6rem + 4.5vw, 5rem);       /* 40 → 80px  hero h1 */
  --text-display--line-height: 1.05;
  --text-display--letter-spacing: -0.03em;

  --text-h1: clamp(2rem, 1.5rem + 2.5vw, 3.5rem);            /* 32 → 56px  page titles */
  --text-h1--line-height: 1.1;
  --text-h1--letter-spacing: -0.02em;

  --text-h2: clamp(1.75rem, 1.4rem + 1.75vw, 2.75rem);       /* 28 → 44px  section titles */
  --text-h2--line-height: 1.15;
  --text-h2--letter-spacing: -0.02em;

  --text-h3: clamp(1.25rem, 1.1rem + 0.6vw, 1.5rem);         /* 20 → 24px  card titles */
  --text-h3--line-height: 1.3;

  --text-lead: clamp(1.125rem, 1.05rem + 0.4vw, 1.375rem);   /* 18 → 22px  intro paragraph */
  --text-lead--line-height: 1.6;

  --text-body: clamp(1.0625rem, 1rem + 0.2vw, 1.125rem);     /* 17 → 18px  paragraphs */
  --text-body--line-height: 1.7;

  --text-meta: 0.875rem;                                      /* 14px       dates, badges */
  --text-meta--line-height: 1.4;
}
```

Use as `text-display`, `text-h1`, `text-h2`, `text-h3`, `text-lead`, `text-body`, `text-meta`.

### Roles

| Role | Class | Weight | Where |
|---|---|---|---|
| Hero headline | `text-display` | `font-extrabold` (800) | "Welcome to Umar Khan's Portfolio" |
| Page title | `text-h1` | `font-extrabold` | Projects, Resume, detail pages |
| Section title | `text-h2` | `font-bold` (700) | Skills, Experience, Contact |
| Card title | `text-h3` | `font-bold` | Project/experience/skill card names |
| Intro | `text-lead` | `font-normal` | Hero paragraph |
| Body | `text-body` | `font-normal` | Descriptions, lists |
| Meta | `text-meta` | `font-medium` | Dates, company names, badges |

### Readability rules

- Long-form text gets `max-w-[65ch]`. The hero paragraph and project descriptions must not stretch across a 1440px screen.
- Headings: `text-balance`. Paragraphs: `text-pretty`.
- Never set body text below 16px or lighter than `font-normal` (400). Weight 300 is reserved for oversized display text, if at all.
- Section titles get a small accent marker for scannability:
  ```tsx
  <h2 className="text-h2 font-bold text-ink">
    Experience<span className="text-accent">.</span>
  </h2>
  ```

---

## 4. Layout & spacing

### Container

One container definition, used everywhere (currently each page repeats `container md:px-6 py-4 mx-auto` with slight variations):

```css
@utility page {
  width: 100%;
  max-width: 72rem;                                   /* 1152px */
  margin-inline: auto;
  padding-inline: clamp(1rem, 0.5rem + 2.5vw, 2.5rem); /* 16 → 40px gutter */
}
```

### Fluid spacing

```css
@theme {
  --spacing-section: clamp(4rem, 2.5rem + 6vw, 8rem);  /* 64 → 128px between sections */
  --spacing-stack: clamp(1.5rem, 1rem + 2vw, 2.5rem);   /* 24 → 40px heading → content */
}
```

- Between home sections: `gap-section` (replaces the current `gap-5`, which is too tight to separate sections).
- Section heading → content: `mb-stack`.
- Inside cards: `p-6 md:p-8`. Between cards in a grid: `gap-4 md:gap-6`.
- Base unit is 4px (Tailwind default). Stick to the scale: 2, 3, 4, 6, 8, 12, 16.

### Grids

| Content | Mobile | ≥ 640px | ≥ 1024px |
|---|---|---|---|
| Skills | 1 col | 2 cols | 3 cols |
| Projects | 1 col | 2 cols | 3 cols |
| Contact | 1 col | 3 cols | 3 cols |
| Experience | single timeline column, `max-w-3xl` |

Prefer intrinsic grids where possible: `grid-cols-[repeat(auto-fill,minmax(min(100%,20rem),1fr))]`.

### Hero

- Desktop: text left (≈ 2/3), portrait right (≈ 1/3), vertically centred, `min-h-[70svh]`.
- Mobile: portrait first, then text, both left-aligned.
- Portrait scales fluidly: `size-[clamp(9rem,6rem+10vw,15rem)]` (144 → 240px), with an accent ring: `ring-4 ring-accent/20 ring-offset-4 ring-offset-bg`.

---

## 5. Components

### Cards (skill, project, experience, contact)

```
bg-surface border border-border rounded-2xl p-6 md:p-8
shadow-sm hover:shadow-xl hover:border-accent/40
transition-[box-shadow,border-color] duration-300
```

- The border does the structural work; the shadow is feedback on hover.
- The whole card is the link (already true for project and experience cards). Add `focus-visible:ring-2 ring-accent ring-offset-2 ring-offset-bg`.
- Title `text-h3 font-bold text-ink`, description `text-body text-copy`, meta `text-meta text-muted`.

### Buttons

| Variant | Classes |
|---|---|
| Primary | `bg-accent text-accent-ink font-semibold px-5 py-2.5 rounded-xl hover:brightness-110` |
| Secondary | `border border-border text-ink font-semibold px-5 py-2.5 rounded-xl hover:bg-surface-muted` |

Minimum tap target 44×44px. Icon + label, icon `size-4`. Project detail "GitHub" / "Live demo" buttons → GitHub secondary, Live demo primary.

### Navbar

- Sticky, translucent: `bg-bg/80 backdrop-blur-md border-b border-border` (replaces solid white + shadow).
- Logo: `text-xl font-extrabold`.
- Links: `text-body font-medium text-copy hover:text-ink`; active route gets `text-accent`.
- Mobile drawer keeps its current slide-in (`-translate-x-full` → `translate-x-0`, 300ms), but goes full width with large links (`text-h3`), and the toggle button gets `aria-expanded`.

### Experience timeline

- Rail: `border-l-2 border-border`.
- Dot: `bg-accent ring-4 ring-bg` (currently neutral grey — this is where the accent earns its keep).
- Category pill: `bg-accent-soft text-accent text-meta font-semibold`.

### Badges

- Skill badges: unchanged gradients, `text-meta font-medium rounded-full px-3 py-1`.
- Project cards show at most 4 badges (current behaviour).

### Icons

Lucide, `strokeWidth={2}`, sized `size-4` inline / `size-6` in cards / `size-8` on detail headers. Icon tiles: `bg-accent-soft text-accent rounded-xl p-2.5`.

---

## 6. Section blueprints

| Section | Structure |
|---|---|
| **Hero** (`About.tsx`) | Display headline (name in accent) → lead paragraph `max-w-[60ch]` → optional CTA row (View projects · Contact) → portrait. |
| **Skills** | `h2` → 3-col card grid; each card = category title + wrapped badges. |
| **Experience** | `h2` → timeline; each entry = date + category pill → logo + role + company → 2–3 line description. |
| **Projects** (`/projects`) | `h1` → card grid; card = icon tile + title + badges → 3-line clamped description. |
| **Project / experience detail** | Back link → header card (icon, `h1`, meta) → badges → body sections with `h2`s at `max-w-[65ch]` → action buttons. |
| **Contact** | `h2` → one-line invitation → 3 link cards. Put the "Feel free to reach out" text *above* the cards so the order reads naturally. |
| **Resume** | Keep the print-like single column `max-w-4xl`; adopt the type tokens but keep it restrained (no accent beyond links). |

---

## 7. Motion — keep every existing animation

All current Framer Motion behaviour stays. This section documents it so nothing gets lost during restyling, and defines the shared values.

### Inventory (do not remove)

| Where | Animation | Values |
|---|---|---|
| `PageAnimation` | Page enter fade-up + scroll to top | `y: 20 → 0`, `opacity 0 → 1`, 0.4s `easeOut` |
| `About` wrapper | Section fade-up on view | `y: 30 → 0`, 0.6s, `once`, margin `-100px` |
| `About` portrait wrapper | Scale-in | `scale 0.8 → 1`, delay 0.5s, 0.5s |
| `About` portrait | Hover spring | `scale 1.05`, spring stiffness 300 |
| `About` headline | Word-by-word stagger | stagger 0.15s, delay 0.3s, each word `y: 10 → 0` |
| `About` paragraph | Fade-up | `y: 20 → 0`, delay 0.8s, 0.5s |
| `Skills` | Container stagger | stagger 0.1s, items `y: 20 → 0` |
| `Skills` badges | Pop-in + hover | `scale 0 → 1`, delay `idx × 0.05`; hover `scale 1.05` |
| `Experience` heading | Drop-in | `y: -20 → 0` |
| `Experience` cards | Slide-in stagger + hover | stagger 0.15s, `x: -20 → 0`; hover `scale 1.02` |
| `ProjectCard` | Fade-up + hover | `y: 20 → 0`, 0.5s; hover `scale 1.02` |
| `/projects` | Container stagger | stagger 0.1s |
| `Contact` | Section fade-up, heading slide-in, cards staggered | cards delay `i × 0.1`; hover `scale 1.03, y: -4`; tap `scale 0.98` |
| `ResumeContent` | Section stagger | item variants |
| `Navbar` (CSS) | Mobile drawer slide | `translate-x`, 300ms `ease-in-out` |
| Cards (CSS) | Shadow lift on hover | `transition-shadow 300ms` |

### Shared vocabulary

When touching a component, prefer these names over new magic numbers:

| Token | Value | Use |
|---|---|---|
| `duration.fast` | 0.2s | hover, tap, colour |
| `duration.base` | 0.4–0.5s | element reveal |
| `duration.slow` | 0.6s | section reveal |
| `ease.out` | `"easeOut"` / `[0.22, 1, 0.36, 1]` | all reveals |
| `distance.sm` | 10–20px | word / card reveal |
| `distance.md` | 30px | section reveal |
| `stagger` | 0.1s (dense lists) / 0.15s (headline words, timeline) | |
| `viewport` | `{ once: true, margin: "-100px" }` | all scroll reveals — animate once, never replay |

### Rules

- **Reveal once.** Scroll animations use `once: true`; content never re-hides.
- **Transform + opacity only.** Never animate `width`, `height`, `top` or `margin`.
- **Hover scale ≤ 1.05.** Cards 1.02, small items 1.03–1.05.
- **Respect reduced motion.** Wrap the app in `<MotionConfig reducedMotion="user">` (in `layout.tsx` via a small client wrapper) so Framer Motion drops transforms for users who ask; add the CSS fallback:
  ```css
  @media (prefers-reduced-motion: reduce) {
    html { scroll-behavior: auto; }
    *, *::before, *::after { transition-duration: 0.01ms !important; }
  }
  ```
- **Text must be readable within ~1s.** The hero paragraph's 0.8s delay is the ceiling; don't add longer ones.

---

## 8. Accessibility checklist

- [ ] Contrast: body ≥ 4.5:1, large text and UI ≥ 3:1 (tokens in §2 pass in both themes).
- [ ] One `h1` per page. Contact currently uses `h1` — make it `h2`.
- [ ] Visible focus on every interactive element: `focus-visible:ring-2 ring-accent ring-offset-2`.
- [ ] Mobile menu button has `aria-expanded` and `aria-controls`.
- [ ] Images have meaningful `alt`; decorative ones use `alt=""`.
- [ ] Tap targets ≥ 44px.
- [ ] Works at 320px wide with no horizontal scroll and at 200% zoom.
- [ ] Reduced-motion respected (§7).

---

## 9. Do / Don't

| Do | Don't |
|---|---|
| Use tokens (`text-ink`, `bg-surface`, `text-h2`) | Hard-code `text-gray-800 dark:text-white` per element |
| One accent colour, used for emphasis | Add a second accent or gradient text everywhere |
| `clamp()` for type and spacing | Stack `text-3xl lg:text-5xl` breakpoint jumps |
| Cap paragraphs at ~65ch | Let text run the full container width |
| Keep the existing motion, reuse its values | Add new entrance effects per component |
| Big, heavy headlines with tight tracking | Thin (300) or small headings |

---

## 10. Rollout order

1. Tokens: colour, type, spacing and `@utility page` in `globals.css`.
2. Navbar + home `main` container/section spacing.
3. Hero (`About.tsx`) — biggest visual payoff.
4. Cards: Skills, Experience, ProjectCard, Contact.
5. Detail pages and Resume.
6. Reduced-motion wrapper + accessibility checklist pass.
