---
name: Premium Private Finance
colors:
  surface: '#0f150f'
  surface-dim: '#0f150f'
  surface-bright: '#343b34'
  surface-container-lowest: '#0a100a'
  surface-container-low: '#171d17'
  surface-container: '#1b211b'
  surface-container-high: '#252c25'
  surface-container-highest: '#30362f'
  on-surface: '#dee4da'
  on-surface-variant: '#c4c7c8'
  inverse-surface: '#dee4da'
  inverse-on-surface: '#2c322b'
  outline: '#8e9192'
  outline-variant: '#444748'
  surface-tint: '#c6c6c7'
  primary: '#ffffff'
  on-primary: '#2f3131'
  primary-container: '#e2e2e2'
  on-primary-container: '#636565'
  inverse-primary: '#5d5f5f'
  secondary: '#c3c8c1'
  on-secondary: '#2d322d'
  secondary-container: '#454a45'
  on-secondary-container: '#b5bab3'
  tertiary: '#ffffff'
  on-tertiary: '#2d322c'
  tertiary-container: '#dfe4dc'
  on-tertiary-container: '#61665f'
  error: '#ffb4ab'
  on-error: '#690005'
  error-container: '#93000a'
  on-error-container: '#ffdad6'
  primary-fixed: '#e2e2e2'
  primary-fixed-dim: '#c6c6c7'
  on-primary-fixed: '#1a1c1c'
  on-primary-fixed-variant: '#454747'
  secondary-fixed: '#dfe4dc'
  secondary-fixed-dim: '#c3c8c1'
  on-secondary-fixed: '#181d18'
  on-secondary-fixed-variant: '#434843'
  tertiary-fixed: '#dfe4dc'
  tertiary-fixed-dim: '#c3c8c0'
  on-tertiary-fixed: '#181d18'
  on-tertiary-fixed-variant: '#434842'
  background: '#0f150f'
  on-background: '#dee4da'
  surface-variant: '#30362f'
typography:
  headline-xl:
    fontFamily: Manrope
    fontSize: 40px
    fontWeight: '600'
    lineHeight: 48px
    letterSpacing: -0.02em
  headline-lg:
    fontFamily: Manrope
    fontSize: 32px
    fontWeight: '600'
    lineHeight: 40px
    letterSpacing: -0.02em
  headline-lg-mobile:
    fontFamily: Manrope
    fontSize: 28px
    fontWeight: '600'
    lineHeight: 36px
    letterSpacing: -0.01em
  body-md:
    fontFamily: Manrope
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 24px
    letterSpacing: 0em
  body-sm:
    fontFamily: Manrope
    fontSize: 14px
    fontWeight: '400'
    lineHeight: 20px
    letterSpacing: 0.01em
  label-caps:
    fontFamily: Manrope
    fontSize: 12px
    fontWeight: '700'
    lineHeight: 16px
    letterSpacing: 0.05em
rounded:
  sm: 0.5rem
  DEFAULT: 1rem
  md: 1.5rem
  lg: 2rem
  xl: 3rem
  full: 9999px
spacing:
  unit: 8px
  container-padding: 32px
  element-gap: 24px
  section-margin: 48px
  gutter: 16px
---

## Brand & Style

The design system is anchored in the concept of "Quiet Security." It eschews the typical loud alerts and bright accents of traditional fintech in favor of a monastic, high-end environment that respects the user's focus and privacy. The brand personality is stoic, sophisticated, and deeply reliable.

By blending **Minimalism** with **Soft Glassmorphism**, the UI creates a sense of physical depth without clutter. The aesthetic mimics high-end hardware—matte obsidian surfaces, precision-milled edges, and soft, diffused light. Every interaction is designed to feel intentional and weighted, providing an emotionally comforting experience for managing personal wealth in private.

## Colors

The palette is strictly monochromatic, utilizing a specialized "Deep Charcoal" (#0f150f) as the base canvas to ensure true black levels on OLED displays while maintaining a soft, organic warmth. 

- **Base Surface:** #0f150f (The deepest layer).
- **Secondary Surfaces:** Matte grays ranging from #1a1f1a to #2d322d to define functional areas without using borders.
- **Accents:** Pure White (#ffffff) is used exclusively for high-priority data points and primary actions.
- **Support:** Mid-tone grays (#8e8e93) handle secondary information, ensuring a low-stimulus environment that reduces financial anxiety.

Green, red, and amber are entirely removed. Financial trends are indicated through subtle iconography and weight rather than chromatic alerts.

## Typography

Manrope is the sole typeface, chosen for its modern, geometric construction and exceptional legibility in dark environments. The typographic hierarchy relies on significant scale differences and weight rather than color.

Headlines use semi-bold weights with tight letter-spacing to feel premium and authoritative. Body text is set with generous line-height to ensure the interface feels breathable. Labels and micro-copy utilize increased letter-spacing and uppercase styling to provide clear structure to dense financial data without adding visual noise.

## Layout & Spacing

This design system employs a fluid-to-fixed grid model inspired by high-end editorial design. The standard margin for mobile is a generous 32px, creating a "frame" effect that isolates content and promotes a feeling of calm.

The rhythm is strictly based on an 8px baseline. Vertical spacing is intentionally exaggerated—"Apple-level" breathing room—to prevent the interface from feeling cramped. Elements are grouped in clear clusters with 24px gaps, while major sections are separated by 48px or more to allow the eye to rest.

## Elevation & Depth

Depth is conveyed through a "stacked matte" approach combined with soft glassmorphism. Instead of traditional drop shadows, this design system uses:

1.  **Backdrop Blurs:** Floating elements (like navigation bars or modal sheets) use a 20px - 30px background blur with a subtle 5% white overlay. This creates a "frosted obsidian" look.
2.  **Tonal Stacking:** Higher elevation is represented by lighter shades of charcoal. A card sits at #1a1f1a on top of a #0f150f background.
3.  **Inner Glows:** To define edges without harsh borders, a 1px inner stroke with 10% white opacity is applied to the top and left edges of cards, mimicking a subtle light source from above.

## Shapes

The shape language is defined by extreme softness. A minimum corner radius of 28px is applied to all primary containers and cards, moving toward a fully pill-shaped (rounded-full) aesthetic for buttons and chips.

These hyper-rounded corners serve to neutralize the "coldness" of the dark monochromatic palette, making the app feel approachable and physically comfortable, like a smooth river stone.

## Components

- **Buttons:** Primary buttons are solid White with black text. Secondary buttons are matte #2d322d with white text. All buttons feature a 40px+ height and fully rounded ends.
- **Cards:** Use a #1a1f1a fill with a 28px radius. They do not have shadows; instead, they rely on the tonal shift from the background and a 0.5px subtle gray border.
- **Input Fields:** Minimalist matte troughs. The field background is slightly darker than the card surface to create a "recessed" feel. Labels sit above the field in `label-caps`.
- **List Items:** Separated by wide 16px gaps rather than divider lines. Interaction states are shown through a subtle background lightening (to #252a25).
- **Glass Sheets:** Used for privacy-sensitive data overlays. High blur (32px) and low opacity (80%) ensure the background content is visible but illegible, maintaining privacy while preserving the sense of space.
- **Data Visualization:** Line charts use a thick, pure white stroke with a soft glow. Areas under the line are filled with a very subtle white-to-transparent gradient.