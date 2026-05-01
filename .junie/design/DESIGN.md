---
name: Nature Chaos
colors:
  surface: '#101419'
  surface-dim: '#101419'
  surface-bright: '#35393f'
  surface-container-lowest: '#0a0f13'
  surface-container-low: '#181c21'
  surface-container: '#1c2025'
  surface-container-high: '#262a30'
  surface-container-highest: '#31353b'
  on-surface: '#dfe2ea'
  on-surface-variant: '#c5c8be'
  inverse-surface: '#dfe2ea'
  inverse-on-surface: '#2d3136'
  outline: '#8f9289'
  outline-variant: '#444841'
  surface-tint: '#bccbb1'
  primary: '#bccbb1'
  on-primary: '#273421'
  primary-container: '#2d3a27'
  on-primary-container: '#95a48b'
  inverse-primary: '#54624d'
  secondary: '#ffb596'
  on-secondary: '#581e00'
  secondary-container: '#76320f'
  on-secondary-container: '#fd9d71'
  tertiary: '#bdce89'
  on-tertiary: '#283501'
  tertiary-container: '#2e3b06'
  on-tertiary-container: '#96a666'
  error: '#ffb4ab'
  on-error: '#690005'
  error-container: '#93000a'
  on-error-container: '#ffdad6'
  primary-fixed: '#d8e7cc'
  primary-fixed-dim: '#bccbb1'
  on-primary-fixed: '#131f0e'
  on-primary-fixed-variant: '#3d4b36'
  secondary-fixed: '#ffdbcd'
  secondary-fixed-dim: '#ffb596'
  on-secondary-fixed: '#360f00'
  on-secondary-fixed-variant: '#76320f'
  tertiary-fixed: '#d9eaa3'
  tertiary-fixed-dim: '#bdce89'
  on-tertiary-fixed: '#161f00'
  on-tertiary-fixed-variant: '#3e4c16'
  background: '#101419'
  on-background: '#dfe2ea'
  surface-variant: '#31353b'
typography:
  headline-xl:
    fontFamily: Newsreader
    fontSize: 4.5rem
    fontWeight: '600'
    lineHeight: '1.1'
    letterSpacing: -0.02em
  headline-lg:
    fontFamily: Newsreader
    fontSize: 3rem
    fontWeight: '500'
    lineHeight: '1.2'
  headline-md:
    fontFamily: Newsreader
    fontSize: 2rem
    fontWeight: '500'
    lineHeight: '1.3'
  body-lg:
    fontFamily: Work Sans
    fontSize: 1.25rem
    fontWeight: '400'
    lineHeight: '1.6'
  body-md:
    fontFamily: Work Sans
    fontSize: 1rem
    fontWeight: '400'
    lineHeight: '1.6'
  label-sm:
    fontFamily: Work Sans
    fontSize: 0.75rem
    fontWeight: '600'
    lineHeight: '1.2'
    letterSpacing: 0.05em
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  wild-xs: 0.43rem
  wild-sm: 1.12rem
  wild-md: 2.67rem
  wild-lg: 4.89rem
  wild-xl: 7.31rem
---

## Brand & Style

This design system rejects the clinical precision of modern digital interfaces in favor of a "Nature Chaos" aesthetic. The brand personality is grounded, raw, and tactile, aiming to evoke the sensory experience of a forest floor or a stone quarry. It targets audiences who value authenticity, environmental connection, and editorial-inspired depth over standardized efficiency.

The design style is a hybrid of **Tactile/Skeuomorphism** and **Brutalism**. It utilizes heavy physical metaphors—such as paper grain, stone textures, and foliage shadows—combined with a raw, non-linear layout philosophy. Elements are intentionally "imperfect," mimicking the unpredictable beauty of the natural world.

## Colors

The palette is rooted in deep, earthy pigment tones. The default color mode is dark, utilizing **Deep Forest Green (#2D3A27)** as the primary canvas to simulate a dense canopy or shaded earth. 

- **Primary (Forest Green):** Used for deep backgrounds and primary containers.
- **Secondary (Terracotta):** Used for call-to-action elements, indicating heat, clay, and human-made earthworks.
- **Tertiary (Moss):** Used for accents, subtle highlights, and secondary interactive states.
- **Neutral (Slate):** Used for structural elements, borders, and text backgrounds to provide a stony, stable foundation.
- **Surface Accents:** Use a cream or off-white (#F5F2ED) sparingly for high-contrast text on dark backgrounds to mimic sun-bleached bone or recycled paper.

## Typography

The typographic system relies on the tension between a literary, organic serif and a functional, grounded sans-serif.

**Newsreader** is the voice of the system. It should be used for all headings. Its sturdy serifs and variable weights feel carved or printed, providing a humanistic touch. Large headlines should use tighter tracking to emphasize the "sturdy" feel.

**Work Sans** provides the structural clarity needed for legibility against textured backgrounds. It is used for all body copy, navigation, and UI labels. It should be set with generous line heights to prevent the "wild" spacing of the layout from impacting readability.

## Layout & Spacing

This design system utilizes a **No Grid** philosophy that favors "Organic Overlap." Instead of rigid columns, elements are placed on a floating coordinate system where components often break the boundaries of their parent containers.

The spacing rhythm is non-linear and "wild." Avoid multiples of 4 or 8. Use prime numbers and irregular intervals to define padding and margins. Elements should feel like they have "grown" into place rather than being slotted into a grid. Encourage intentional overlapping (e.g., an image overlapping a text block by 20px) to create a sense of depth and physical density.

## Elevation & Depth

Depth is conveyed through **Tonal Layers** and **Physical Textures** rather than traditional drop shadows. 

- **Texture Overlays:** Every surface must have a subtle noise or grain texture resembling recycled paper or stone.
- **Physical Stacking:** Use "torn edge" masks or hand-drawn strokes for borders to separate layers. 
- **Ambient Occlusion:** Instead of directional light, use soft, multi-layered inner glows and outer "smudges" in a darker shade of the background color (e.g., a dark green smudge behind a moss-colored card).
- **Z-Axis Chaos:** Elements at higher elevations should slightly tilt or rotate (between -1 and +1 degrees) to mimic items laid out on a physical desk.

## Shapes

The shape language is strictly organic. While the base `roundedness` is set to 2 (Rounded), this is a fallback for standard containers. The preferred shape language uses **Variable Radii** and **SVG Masks**.

- **Containers:** Avoid perfect rectangles. Use "blob" masks or apply `border-radius` values that differ on every corner (e.g., `60% 40% 30% 70% / 60% 30% 70% 40%`).
- **Dividers:** Replace straight lines with hand-drawn, variable-width strokes or "vine" motifs.
- **Masking:** Images should be masked into organic, pebble-like shapes.

## Components

- **Buttons:** Large, Terracotta-colored blocks with slightly irregular "hand-cut" corners. Use a thick 2px Slate border. On hover, the button should "settle" (move down 2px) rather than lift.
- **Chips:** Moss-colored ovals with "torn" edges. Typography inside chips should be all-caps Work Sans for a technical, botanical-label feel.
- **Cards:** Deep Forest Green backgrounds with a faint stone texture. Card headers should overlap the top border of the card.
- **Inputs:** Simple Slate underlines that look like a pencil stroke. The focus state should transform the stroke into a subtle Terracotta "ink bleed."
- **Lists:** Bullet points are replaced by organic "splats" or leaf-shaped icons.
- **Chaos Accents:** Introduce "Stray Elements"—small, non-functional decorative blobs or hand-drawn scribbles that sit behind or between components to reinforce the nature-chaos narrative.