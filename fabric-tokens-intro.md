# Design Tokens at Apollo — An Introduction

*Version 1.0 · March 2026 · Fabric Design System*

---

## What Tokens Are

Design tokens are the named, versioned values that carry every visual decision in Fabric. Instead of a component referencing a hex code, a hardcoded pixel value, or a font size stored in a local style — it references a token. The token is the contract between the design decision and its implementation.

This matters for three reasons. First, it makes changes propagate correctly: update the token value and every component that references it updates in lockstep, without hunting down individual usages. Second, it makes decisions auditable: a token name like `text-primary` communicates intent, whereas `#1A1A1A` communicates nothing. Third, it makes consistency enforceable: two components that need to behave the same way in the same context reference the same token, so they are identical by construction — not by coincidence.

Fabric uses a three-tier token architecture. Understanding the tiers is prerequisite to understanding how any individual token works.

```
Primitive tokens   →   Raw values. No semantic meaning. Not for direct use.
                        color: human-50, blue-40, size: 4, weight: 600

Semantic tokens    →   Named roles. Carry intent. Used in components.
                        text-primary, surface-background, space-md, type-body-md

Component tokens   →   Component-specific overrides. Inherit from semantics.
                        button-label-color, badge-border-radius, input-padding
```

**Primitives** are the source material — every raw value in the system. They have no opinion about where they're used. A designer or engineer should rarely, if ever, reference a primitive directly in a component. Doing so bypasses the semantic layer and breaks the architecture.

**Semantic tokens** are where intent lives. A semantic token answers the question: *what role is this value playing?* `text-primary` is not "dark gray" — it is the primary text color in a given context, which happens to resolve to a specific gray. The distinction matters because semantic tokens are validated for their role — `text-primary` is guaranteed to pass contrast requirements against `surface-background`. A raw gray is not.

**Component tokens** are the narrow layer of component-specific decisions that can't be fully absorbed by semantics without over-specifying them. A button's internal padding, a badge's border-radius, an input's placeholder opacity — these are real decisions that vary by component, but they still inherit from semantic values where possible.

---

## Color

Color is the most complex token category because color carries the most types of meaning simultaneously. At Apollo, color communicates hierarchy, state, status, interactivity, category, and brand — often on the same surface. The token system is what keeps those signals from colliding.

### The Primitive Layer

Fabric's primitive color scales run from `05` to `95` in 11 steps for all color scales, and from `00` to `100` in 13 steps for the `human` neutral scale. The step distribution follows a bell-curve: steps at the light and dark extremes are close together (subtle differences, for surfaces), and steps in the middle of the scale are further apart (stronger contrast, for interactive and accent colors).

This distribution means the token layer gets the right contrast behavior automatically. Surface colors live in the compressed extremes — smooth elevation, no jarring jumps. Interactive and accent colors live in the steep middle — enough contrast to punch through a surface and be perceived clearly. A linear scale would force a tradeoff between those two needs; the bell curve resolves it.

### Semantic Color Roles

Semantic color tokens map primitives to roles. The roles are:

**Surface** — The backgrounds UI elements sit on. Fabric commits to three surface tiers: `surface-background` (`human-00`), `surface-middleground` (`human-05`), and `surface-foreground` (`human-10`). These three values are the only permissible background colors in the product. Arbitrary surface values are not permitted — this is what makes light/dark mode predictable and what makes text contrast validatable.

**Text** — Content colors layered on surfaces. `text-primary` is the highest-contrast text value, used for the most important content on a surface. `text-secondary` steps down in contrast for supporting content. `text-disabled` communicates unavailability. All text tokens are pre-validated at 4.5:1 against the surface tier they are designed to sit on.

**Border** — Line colors used for component boundaries, dividers, and separators. `border-default`, `border-strong`, `border-subtle` represent a hierarchy of boundary weight. Interactive component borders are validated at 3:1 against their background surface.

**Interactive** — The color family powering standard actions. Currently resolves to black (`human-100`) for primary actions in Fabric's button hierarchy — chosen for maximum contrast and semantic neutrality. Interactive color is not brand color.

**Brand** — Apollo yellow. Reserved for moments of brand expression: onboarding highlights, upgrade prompts, marketing-adjacent surfaces. Brand color is not interactive color. Its power comes from scarcity — applying it broadly dilutes it.

**Destructive** — The red semantic family. Used exclusively for irreversible or high-consequence actions. Never used decoratively.

**AI** — The violet/indigo semantic family. Reserved for AI-generated or AI-augmented actions. Occupies its own visual lane so users can develop accurate expectations about what triggers AI behavior.

**Status** — The full set of semantic status values: success (green), warning (yellow), error (red), info (blue), neutral (gray). Status color always appears alongside a label or icon — color alone is not sufficient to communicate status.

### Light and Dark Mode

Every semantic color token has a light mode value and a dark mode value. The surface tier inverts: `surface-background` is white in light mode and near-black in dark mode. Text and border tokens are re-validated in both modes independently. A token that passes contrast in light mode is not assumed to pass in dark mode — the modes are separate verification gates.

---

## Typography

Typography tokens govern every dimension of how text is set: size, line height, weight, letter spacing, and font family. They are designed to be used together as a set — a size token without its corresponding line height token produces text that is technically correct but may not be spatially correct.

### Type Scale

Fabric's type scale is expressed as semantic size tokens that map to a defined size/line-height pair. The scale covers the full range of type use in the product:

| Token | Typical use |
|---|---|
| `type-display` | Hero text, marketing-adjacent surfaces |
| `type-heading-xl` | Page titles, modal headers |
| `type-heading-lg` | Section headers, panel titles |
| `type-heading-md` | Card titles, drawer headers |
| `type-heading-sm` | Subsection headers, table column labels |
| `type-body-lg` | Lead paragraphs, prominent descriptive text |
| `type-body-md` | Default body text, form labels, descriptions |
| `type-body-sm` | Supporting text, secondary descriptions |
| `type-label-md` | Button labels, tab labels, navigation items |
| `type-label-sm` | Badges, chips, compact labels |
| `type-caption` | Help text, timestamps, metadata |
| `type-code` | Code snippets, monospace contexts |

The scale is not a menu of arbitrary choices — each step exists because there is a distinct content type in the product that requires it. Using a heading token for body text or a label token for a heading is a semantic mismatch, not just a size preference.

### Weight

Fabric uses two functional weights: **regular** (400) and **medium** (500) for most contexts, and **semibold** (600) reserved for the highest-emphasis headings and labels. Bold (700) and above are not part of the standard scale. Weight is a contrast lever — overusing heavy weights flattens hierarchy the same way overusing bright colors does.

Weight is expressed as a modifier on type tokens rather than a separate dimension. `type-heading-lg` implies semibold; `type-body-md` implies regular. Where a weight override is needed for emphasis within body text, it uses the medium weight — not bold.

### Font Family

Apollo's product uses a single sans-serif typeface for all UI text, with a monospace fallback for code contexts. The family is expressed through `font-family-base` and `font-family-code` semantic tokens. Components do not reference font families directly.

### Line Height and Letter Spacing

Line height is baked into each type size token as a ratio — not a fixed pixel value — so that text scales correctly across resolution environments. Letter spacing is defined per token tier: display and heading tokens use slightly tightened tracking; body and caption tokens use standard tracking. These are not arbitrary stylistic decisions — tracking that works at 32px often fails at 12px, and the token system handles this automatically.

---

## Spacing

Spacing tokens govern the distances between and within elements: padding, margin, gap, and component-level inset. Consistent spacing is what gives a UI its sense of order — and inconsistent spacing is one of the most common sources of visual noise in systems that have accumulated design debt.

### The Base Unit

Fabric's spacing system is built on a base unit of **4px**. All spacing tokens are multiples of 4. This is a widely-adopted constraint in interface design for a simple reason: 4px divides cleanly into most standard screen densities, and building a scale from a single unit means any two spacings in the system are always in a rational relationship to each other.

### The Scale

| Token | Value | Typical use |
|---|---|---|
| `space-1` | 4px | Intra-component gaps; icon-to-label spacing; inline separation |
| `space-2` | 8px | Internal component padding (compact); between closely related elements |
| `space-3` | 12px | Internal component padding (default); form field insets |
| `space-4` | 16px | Standard gap between related elements; card padding; list item spacing |
| `space-5` | 20px | Section-level internal spacing |
| `space-6` | 24px | Between distinct content groups; header-to-content gap |
| `space-8` | 32px | Section separation; panel-level padding |
| `space-10` | 40px | Large section breaks; modal vertical padding |
| `space-12` | 48px | Page-level top/bottom padding; major section divisions |
| `space-16` | 64px | Layout-level spacing; hero sections |

The scale is not continuous — it is intentionally gapped at the larger end. The gaps are where the system is telling you that layout decisions at that scale should be handled by layout components, not by applying large spacing values directly to elements.

### Density Variants

Apollo's product spans surfaces from marketing-adjacent pages (where breathing room reads as confidence) to dense data tables (where compactness is a feature, not a compromise). Fabric expresses this through density context tokens — a semantic layer above the raw spacing scale that maps component internal padding to the surface's density expectation.

The three density contexts are **comfortable**, **default**, and **compact**. A button in a comfortable context has more internal padding than the same button in a compact table row — without either referencing a raw spacing value directly. The density context handles the translation.

### Spacing and Component Tokens

Component tokens consume spacing semantics rather than raw values. A button's horizontal padding is not `16px` — it is `space-4`, which happens to be 16px. If the spacing scale or density context changes, the component updates correctly without manual intervention. This is the architectural payoff: spacing decisions made in the right layer propagate without drift.

---

## Using Tokens Correctly

The three-tier architecture — primitives, semantics, components — is only valuable if it is used correctly at every tier. The two most common failure modes are:

**Bypassing semantics.** A designer or engineer who references `human-50` instead of `text-primary` has sourced the right value by coincidence, not by contract. If `text-primary` changes (because its accessibility requirements change, or because the scale is updated), the bypassed reference will not update and will silently become incorrect. Semantic tokens are the only references that should appear in component work.

**Treating the primitive scale as a selection menu.** The primitive scale exists to support the semantic layer, not to give designers a wider color palette to pull from. A new color usage in a component is not an invitation to pick a new primitive — it is a signal that either an existing semantic token should be used, or a new semantic token should be proposed and validated.

Tokens are not a constraint for its own sake. They are the mechanism by which Fabric makes consistent, accessible, maintainable design the default — rather than something each team has to deliberately achieve on its own.

---

*Fabric Design System · Version 1.0 · March 2026*
*For questions or contributions, contact the Fabric team.*
