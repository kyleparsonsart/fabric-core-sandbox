# Primitive Color Token Strategy

## Overview

This document defines Apollo's new approach to primitive color tokens — the foundational layer of our color system from which all semantic and component tokens derive. Two major changes are being introduced: a shift from linear to bell-curve color ramps, and an expansion in step count per color scale.

These changes are designed to give us smoother, more intentional color progressions that better support the demands of a dual-mode (light/dark) UI at Apollo's scale.

---

## What's Changing and Why

### From Linear Ramps to Bell-Curve Ramps

Previously, our color scales were distributed linearly — each step represented a roughly equal increment in lightness from one end of the scale to the other.

We are moving to a **bell-curve (v-curve) distribution**, where:

- **Steps at the light and dark extremes are subtle** — small, refined differences in luminance
- **Steps in the middle of the scale are steep** — more dramatic contrast between adjacent values

This mirrors how color actually behaves in UI contexts. The extremes of a scale (near-white and near-black) are where surfaces live, and those differences need to be legible but not harsh. The middle of the scale is where interactive, state-based, and accent colors live, and there, contrast needs to punch.

A linear ramp gives you uniform but contextually wrong contrast everywhere. A bell-curve ramp gives you the right contrast *where it matters*.

```
Linear ramp (old):
  ●──●──●──●──●──●──●──●
  equal steps, equal contrast

Bell-curve ramp (new):
  ●─●─●──●────●────●──●─●─●─●
  subtle        steep        subtle
  (light end)  (midtones)  (dark end)
```

### Expanded Step Counts

Step counts are increasing for all scales. Most color scales now run from `05` to `95` (11 steps). The `human` neutral scale is the exception — it runs from `00` to `100` across 13 steps, anchored to true white and true black.

| Scale | Steps | Range |
|---|---|---|
| All color scales | 11 | `05` → `95` |
| `human` (neutral) | 13 | `00` → `100` |

The additional steps are primarily distributed at the light and dark ends of each scale, where the bell-curve compression means we need more resolution to express meaningful variation without hard jumps.

This gives us:

- More nuance in surface colors without forcing sudden perceptual leaps
- Cleaner semantic token mappings — fewer places where light mode and dark mode need to reach across a wide gap to find their equivalent
- More flexibility as the component library grows without having to retrofit new steps later

---

## Surface Commitments

We are formalizing three fixed surface tiers in the `human` scale. These are the only three values that should ever be used as UI surface backgrounds.

| Token | Surface Role | Typical Uses |
|---|---|---|
| `human-00` | **Background** | Chrome, navigation, headers, app shell |
| `human-05` | **Middleground** | Containers, cards, page sections |
| `human-10` | **Foreground** | Tables, drawers, popovers, modals |

This isn't a soft guideline — it's a commitment. Pinning surfaces to `human-00`, `human-05`, and `human-10` means that:

1. **Light and dark mode pairings are predictable.** When we invert, we know exactly which values to swap without chasing arbitrary surface colors scattered across the scale.
2. **Elevation has a clear language.** The three tiers give surfaces a consistent hierarchy: background → middleground → foreground is a direction, not an accident.
3. **The bell curve works in our favor.** Because the light end of the `human` scale is compressed, the contrast between `human-00`, `human-05`, and `human-10` is intentionally subtle in light mode — refined layering, not jarring stacks of near-identical grays.

### Surface Behavior in Light vs. Dark Mode

In light mode, `human-00` (white) is the lightest surface, `human-05` sits just above it, and `human-10` introduces the first meaningful step of depth. In dark mode, the mapping inverts: `human-00` becomes the darkest surface and `human-10` the lightest.

Because these three values all live in the compressed zone of the bell curve, the perceptual differences between them are calibrated to feel smooth in both directions — no sudden jumps when switching modes.

---

## Why This Makes Light/Dark Mode Better

The core problem with linear ramps in a dual-mode system: the perceptual distance between steps is uniform, but our semantic needs are not uniform. Surface backgrounds need low contrast between them. Interactive states need high contrast. Linear ramps can't do both well — you either get muddy surfaces or washed-out interactive states.

With a bell-curve ramp:

- Surface tokens (`human-00`, `human-05`, `human-10`) sit in the compressed zone where step differences are gentle — smooth elevation, no sudden jumps
- Semantic action colors and state colors map to the steep middle zone where the ramp gives them the contrast they need to be legible

The expanded step counts give us enough resolution in the compressed zones that swapping between light and dark mode doesn't require reaching across large perceptual gaps. Fewer sudden jumps in shade = a UI that feels like a cohesive system in both modes rather than two separate themes bolted together.

---

## Token Naming

All primitive color scales follow the naming convention:

```
{color}-{step}
```

**Human scale** (13 steps): `00`, `05`, `10`, `20`, `30`, `40`, `50`, `60`, `70`, `80`, `90`, `95`, `100`

**All other color scales** (11 steps): `05` through `95`

**Examples:**
- `human-00` — white, Background surface
- `human-05` — Middleground surface
- `human-10` — Foreground surface
- `human-100` — black
- `blue-05` — near-lightest blue
- `blue-50` — saturated, mid-scale blue
- `blue-95` — near-darkest blue

Primitive tokens are **not for direct use in components**. They are the foundation that semantic tokens (`surface-background`, `surface-foreground`, `text-primary`, `border-default`, etc.) map to. If you find yourself referencing a primitive directly in a component, that's a signal a semantic token is missing.

---

## Transition Notes

- The step naming and count changes mean existing references do not map directly to the new scales. A migration guide with explicit old-to-new mappings will accompany the token release.
- The three committed surface tokens (`human-00`, `human-05`, `human-10`) should be used to audit current surfaces — any background color that doesn't resolve to one of these three is technical debt.
- Semantic token values will be updated to reference the new primitive steps. Component tokens inherit from semantics, so component-level changes should be minimal.

---

*Last updated: March 2026*
