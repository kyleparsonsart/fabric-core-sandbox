# Accessibility at Apollo — Fabric's Token Standards for WCAG AA

*Version 1.1 · March 2026 · Fabric Design System*

---

## Position

Accessibility at Apollo is not a checklist. It is a design constraint that operates at the same level of authority as brand, hierarchy, and usability. WCAG AA compliance is the floor, not the aspiration — and Fabric's role is to make compliance the path of least resistance for every designer and engineer building on the system.

Fabric enforces accessibility through the **token layer**. Tokens are where visual decisions are made, validated, and locked in before they ever reach a component. Color contrast, typographic legibility, and spatial structure are not properties of components — they are properties of the tokens components consume. Get the token layer right, and components inherit compliance by construction. Bypass it, and compliance becomes something each team has to achieve independently, with no guarantee they will.

---

## Color Tokens

Color is where the most WCAG AA criteria concentrate, and where the token system provides the clearest compliance guarantee.

**SC 1.4.3 — Contrast (Minimum)** requires text to meet 4.5:1 against its background for normal text, and 3:1 for large text (≥ 18pt regular / ≥ 14pt bold). Fabric enforces this at the semantic token level: `text-primary`, `text-secondary`, and related text tokens are defined as pre-validated pairings against Fabric's three committed surface tokens (`surface-background`, `surface-middleground`, `surface-foreground`). A designer or engineer consuming these tokens correctly inherits passing contrast by construction. Referencing a primitive color value directly exits this guarantee.

**SC 1.4.11 — Non-text Contrast** requires interactive UI components and graphical objects to meet 3:1 against adjacent colors. This applies to control borders, focus rings, and icons. Fabric's `border-default` and related border tokens are validated at 3:1 against all surface tiers. A border that fails this threshold cannot define an interactive target.

**SC 1.4.1 — Use of Color** prohibits color from being the only means of conveying information. No semantic color token in Fabric is designed to operate as a standalone signal — status tokens always pair with a label or icon, error states always pair with a message and icon, and disabled states reduce both opacity and interactivity simultaneously. Color in the token system communicates meaning; it does not carry it alone.

Color tokens are re-validated in both light and dark mode independently. Passing in one mode does not imply passing in the other.

---

## Typography Tokens

Typography's accessibility requirements are fewer in number but material in impact — especially on dense product surfaces.

**SC 1.4.3 and 1.4.6 — Contrast** interact with type size: the applicable threshold (4.5:1 vs. 3:1) depends on whether text qualifies as large text. Fabric's type scale tokens encode which threshold applies — heading-scale tokens resolve to sizes where the 3:1 threshold is valid; body and label tokens resolve to sizes where 4.5:1 is required. The semantic text color tokens are validated at the appropriate threshold for the size they are designed to accompany.

**SC 1.4.4 — Resize Text** requires text to be resizable up to 200% without loss of content or functionality. Typography tokens express size as relative units (not fixed pixel values), ensuring text respects user browser settings and OS-level text scaling.

**SC 1.4.12 — Text Spacing** requires that no content or functionality is lost when users override line height, letter spacing, word spacing, or paragraph spacing to the thresholds defined in the criterion. Fabric's type tokens define line height and spacing as ratios against the type size, giving them the flexibility to accommodate text spacing overrides without breaking layout.

---

## Spacing Tokens

Spacing is the least obvious token category in terms of WCAG AA, but two criteria apply directly.

**SC 2.5.5 — Target Size** requires interactive touch targets to meet a minimum of 44×44px. Fabric's spacing tokens are sized with this in mind: component internal padding in the default density context produces interactive elements that meet this minimum. The density context token system — not raw value overrides — is the appropriate lever for adapting spacing to compact surfaces, and density contexts are defined to maintain minimum target sizes wherever possible.

**SC 1.3.3 — Sensory Characteristics** is relevant in the sense that layout structure must be perceivable without relying on position or shape alone. Consistent spatial rhythm — which spacing tokens enforce — is how proximity communicates grouping. When spacing is arbitrary (raw values, per-component overrides), grouping signals break down and the interface becomes harder to interpret for users who rely on visual structure to understand relationships. Token-enforced spacing is a prerequisite for layout that is consistently readable.

---

## Shared Enforcement Principles

**Compliance is a design constraint, not a post-hoc review.** Accessibility requirements are integrated into Fabric's token definition process. They are applied during design, not audited after shipping.

**Tokens are the authority on visual accessibility.** Any pattern that reaches past semantic tokens into primitives has exited the compliance perimeter Fabric provides. Teams that build outside the system own the full accessibility burden of what they build.

**Accessibility requirements travel with the token.** When a semantic token value changes, that change must be re-validated against all applicable WCAG AA criteria before it ships. A compliant token that becomes non-compliant in a future update is an accessibility regression — and regressions are treated with the same urgency as functional breakages.

---

*Fabric Design System · Version 1.1 · March 2026*
*For questions or contributions, contact the Fabric team.*
