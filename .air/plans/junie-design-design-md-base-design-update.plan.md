# Update Base Design Settings from DESIGN.md

## Context

The project has a DESIGN.md spec defining a "Nature Chaos" design system with a dark-first Material Design 3-style color palette, specific typography (Newsreader + Work Sans), custom spacing, and border-radius tokens. The current codebase uses a generic shadcn/ui starter palette (grey monochrome, Geist fonts), which needs to be replaced with the values from DESIGN.md.

## Approach

Map the DESIGN.md tokens to the existing CSS variable and Tailwind config system without restructuring component code:
1. Replace font loading in `layout.tsx` (Geist → Newsreader + Work Sans)
2. Rewrite `:root` CSS variables in `globals.css` to the DESIGN.md dark palette (hex values); remove `.dark` block since dark is the default
3. Update `tailwind.config.js` to reference hex variables (`var(--x)` instead of `hsl(var(--x))`), add all new tokens (colors, typography scale, radius, spacing)

## File Changes

### Modify: `src/app/layout.tsx`
- Remove `Geist` and `Geist_Mono` imports
- Add `Newsreader` and `Work_Sans` from `next/font/google`
- Expose as `--font-newsreader` and `--font-work-sans` CSS variables on `<body>`

### Modify: `src/app/globals.css`
- Update `:root` to use DESIGN.md dark palette hex values (replace all HSL variables)
- Add all Material Design 3 color tokens as CSS variables
- Remove `.dark` block (dark is now the only/default theme)
- Add `color-scheme: dark` to `:root`

### Modify: `tailwind.config.js`
- Change all color values from `hsl(var(--x))` → `var(--x)` (hex-compatible)
- Add full color palette from DESIGN.md as named Tailwind colors
- Add `fontFamily` extensions: `headline` (Newsreader) and `body` (Work Sans)
- Add `fontSize` extensions for the 6 typography scales
- Update `borderRadius` to match DESIGN.md (sm/DEFAULT/md/lg/xl/full)
- Add `spacing` extensions for wild-xs/sm/md/lg/xl

## Implementation Steps

### Task 1: Update fonts in `src/app/layout.tsx`
- Import `Newsreader` and `Work_Sans` from `next/font/google`
- Configure with `variable` options and `subsets: ['latin']`
- Apply both variables to `<body>` className

### Task 2: Rewrite CSS variables in `src/app/globals.css`
Replace `:root` block with all DESIGN.md hex values mapped to shadcn/ui semantic tokens + extended palette tokens. Delete the `.dark { ... }` block.

Color mapping (shadcn/ui token → DESIGN.md source):
- `--background` = `#101419`, `--foreground` = `#dfe2ea`
- `--card` = `#1c2025`, `--card-foreground` = `#dfe2ea`
- `--primary` = `#bccbb1`, `--primary-foreground` = `#273421`
- `--secondary` = `#ffb596`, `--secondary-foreground` = `#581e00`
- `--muted` = `#262a30`, `--muted-foreground` = `#c5c8be`
- `--accent` = `#bdce89`, `--accent-foreground` = `#283501`
- `--destructive` = `#ffb4ab`, `--destructive-foreground` = `#690005`
- `--border` = `#8f9289`, `--input` = `#444841`, `--ring` = `#bccbb1`
- Plus all 40+ extended surface/container/tertiary/fixed tokens verbatim from DESIGN.md

### Task 3: Update `tailwind.config.js`
- Change all `hsl(var(--x))` → `var(--x)`
- Add extended colors: `surface`, `surface-dim`, `surface-bright`, `surface-container-*`, `on-surface`, `on-surface-variant`, `outline`, `outline-variant`, `tertiary`, `tertiary-container`, `on-tertiary`, `error-container`, etc.
- Add fontFamily: `headline: ['var(--font-newsreader)', 'serif']`, `body: ['var(--font-work-sans)', 'sans-serif']`
- Add fontSize for 6 scales (e.g., `'headline-xl': ['4.5rem', { lineHeight: '1.1', letterSpacing: '-0.02em', fontWeight: '600' }]`)
- Replace borderRadius with: `{ sm: '0.25rem', DEFAULT: '0.5rem', md: '0.75rem', lg: '1rem', xl: '1.5rem', full: '9999px' }`
- Add spacing: `{ 'wild-xs': '0.43rem', 'wild-sm': '1.12rem', 'wild-md': '2.67rem', 'wild-lg': '4.89rem', 'wild-xl': '7.31rem' }`

## Acceptance Criteria

- `pnpm build` completes without errors
- Page background renders as `#101419` (dark) by default
- `font-headline` and `font-body` Tailwind classes apply Newsreader and Work Sans respectively
- `bg-background`, `text-foreground`, `bg-primary` resolve to correct DESIGN.md hex values
- `rounded-lg` = `1rem`, `rounded-xl` = `1.5rem`
- `p-wild-md` = `2.67rem`

## Verification Steps

1. `pnpm dev` → open localhost:3000 → confirm dark background (#101419)
2. DevTools: verify `--background`, `--primary`, `--secondary` computed values
3. Confirm no missing font CSS variable errors in console
4. `pnpm build` → no TypeScript or build errors

## Risks & Mitigations

- **`.dark` class removal**: No theme toggle exists in the codebase, so removing the block is safe
- **Chart colors**: Not specified in DESIGN.md; will keep as reasonable substitutes using tertiary/surface palette values
