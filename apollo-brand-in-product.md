# Apollo Brand × Product: How the Brand Lives in the UI

**Status:** Draft for review
**Audience:** Brand, Product Design, Engineering
**Last updated:** March 2026

---

## Why This Document Exists

Apollo has a strong brand. It also has a complex, data-dense product. These two things create a natural tension — and without a shared framework, that tension gets resolved inconsistently: brand energy applied where it doesn't belong, or design systems that feel like they could belong to any SaaS company.

This document is a shared contract between Brand and Product. It defines where the brand shows up in the UI, how it shows up, and — just as importantly — where it pulls back.

The goal is not uniformity. It's *intentionality*.

---

## The Core Principle: Earned Expression

Apollo's brand should feel rare enough inside the product that when it appears, it lands. This means Brand and Product need to agree on a spectrum of expression: from full brand presence at high-intent moments, to near-invisible utility at the level of a data table.

```
BRAND MODE ←————————————————————————————→ TOOL MODE

Onboarding entry points                  Data tables
Upgrade / conversion moments             Bulk action flows
Marketing-adjacent surfaces              Settings panels
Empty states with discovery potential    Form fills
Achievement / milestone moments          Error recovery
```

Every design decision below — typography, color, iconography, motion — should be made with this spectrum in mind. Not every surface earns brand-mode treatment. The ones that do should feel unmistakably Apollo.

---

## 1. Design Tokens: The Non-Negotiable Foundation

Tokens are the one area where Brand and Product must maintain exact parity. If a token drifts between the Figma library and the codebase, the brand degrades silently — and neither team can tell where the mismatch started.

### Typography

Apollo's type system should express two things simultaneously: authority and clarity. The typeface choices and scale do both.

**Principles:**
- Type scale is fixed. There are no one-off font sizes in the product. Every size maps to a token.
- Weight is used to create hierarchy, not decoration. Bold is reserved for primary headings and high-emphasis data points.
- Line height and letter spacing tokens exist to ensure density stays readable — especially in tables and list views where information competes for attention.
- Marketing headlines may use display cuts or tighter tracking for visual punch. These do **not** carry over into the product UI. Product typography prioritizes readability over visual drama.

**Brand ↔ Product alignment:**
- Font family tokens must match exactly between the design system and the brand guidelines.
- Any new type style introduced in a marketing campaign should be explicitly evaluated before being brought into the product — the answer is often "no."
- Exceptions (e.g., a large display number in an onboarding step) require explicit sign-off and should be tokenized, not hardcoded.

---

### Color

Color is one of Apollo's most expressive brand levers — and one of the most frequently misapplied.

**The role of each color in product:**

| Token | Brand role | Product use |
|---|---|---|
| **Yellow** | Brand expression, energy, signal | Conversion moments, onboarding highlights, marketing-adjacent surfaces only. Not routine actions. |
| **Black (Primary)** | Dominant action | The single most important interactive action on a surface. |
| **Gray (Secondary)** | Supporting action | Paired with Primary; visually subordinate. |
| **Violet / Indigo** | AI lane | AI-generated or AI-augmented actions. Distinct visual lane — not interchangeable with other action colors. |
| **Red** | Consequence | Destructive or irreversible actions only. |
| **White / Surface tones** | Utility | The default. The absence of color is itself a design choice. |

**Critical rule:** Yellow is a brand signal, not a utility color. When yellow appears on every third screen, it stops meaning anything. Its power comes from scarcity.

**Brand ↔ Product alignment:**
- Color tokens map 1:1 between the Figma brand library and the product design system. No hex values live outside the token system.
- When Brand introduces a new color for a campaign, Product evaluates whether it belongs in the token system — and under what semantic conditions it would be used.
- Dark mode (if/when introduced) requires a full semantic re-mapping, not just inversion. Token names should be semantic (`--color-action-primary`) rather than descriptive (`--color-black`) to survive this.

---

### Spacing

Spacing tokens define rhythm. When rhythm is consistent, the product feels considered. When it's not, it feels assembled.

**Principles:**
- A fixed spacing scale (4px base) governs all padding, margin, and gap values. No arbitrary values.
- Component-level spacing is defined in the component tokens, not overridden at the page level.
- The brand's sense of "open, confident, uncluttered" should be reflected in generous spacing at marketing-adjacent surfaces (onboarding, empty states, upgrade modals). Dense views (tables, pipelines) are allowed to compress — but within the scale, not outside it.

**Brand ↔ Product alignment:**
- Spacing tokens are a Product Design responsibility, but Brand should be consulted when new surface types are introduced (e.g., a new modal type, a new card style) to ensure the rhythm feels consistent with the brand's visual personality.

---

## 2. Iconography

Icons are the most frequent brand touchpoint in the product. A user interacting with Apollo for an hour will see dozens of icons. This makes them one of the highest-leverage areas for brand consistency — and one of the easiest places for it to erode.

**Principles:**
- Apollo uses a single icon family across the entire product. No mixing of icon libraries, no one-off SVGs that don't match the system style.
- The icon style should reflect the brand personality: **precise but not cold, clean but not sterile**. Thin-to-medium stroke weight. Rounded terminals are acceptable; sharp corners feel more clinical.
- Icons never carry standalone meaning in the UI without a text label in first-use contexts. They may stand alone in repeated, learnable workflows (e.g., toolbar actions) — but the label should always exist in the accessible name.
- Custom icons for Apollo-specific concepts (e.g., AI Research, Sequences, Intent Signals) should be designed with the same stroke weight and construction grid as the system icons. They are not illustrations — they are functional symbols.

**When icons become brand moments:**
- Feature introduction modals and empty states may use a slightly larger, more prominent icon treatment — treated almost as a "glyph illustration." This is the crossover point between iconography and illustration (see below).
- These should still come from the icon system, not be bespoke for each instance. The brand moment comes from size, color, and negative space — not from drawing something new every time.

**Brand ↔ Product alignment:**
- Brand owns the icon style guide and construction grid.
- Product Design owns the icon library implementation and audits it against the style guide on a regular cadence.
- Any net-new icon request goes through a triage: does an existing icon cover the concept? Can it be repurposed with a modifier? Only then is a new icon commissioned.

---

## 3. Illustrations

Illustrations are the highest-expression brand asset in the product — and therefore the most dangerous to misuse.

**When illustrations belong in the product:**
- **Empty states** with genuine discovery potential (e.g., "No sequences yet" on first use). The illustration signals possibility, not failure.
- **Onboarding moments** that mark a transition — completing setup, arriving at a new capability for the first time.
- **Upgrade / paywall surfaces** where the illustration can visualize the unlocked value, not just decorate the prompt.
- **Error states** that are rare and high-impact (e.g., a full-page error). These deserve a considered treatment, not a generic warning icon.

**When illustrations do NOT belong:**
- Inline with routine data (tables, lists, pipelines). This is tool mode. Illustrations interrupt focus.
- Inside tooltips, inline help, or notifications.
- In repeated UI patterns that a user will see many times per session. Repetition kills the signal.

**Style:**
- Apollo's illustration style should be consistent with the brand's light mythology: **clarity, signal, forward motion**. Abstract shapes and directional light work better than literal, representational scenes.
- The color palette for illustrations draws from the brand palette. Illustrations should feel like they belong to the same world as the product's UI — not like they were imported from a stock library.
- A limited illustration set, used intentionally, is better than a large library used arbitrarily. Shared empty-state illustrations with context-specific copy is a valid approach.

**Brand ↔ Product alignment:**
- Brand owns the illustration style guide and produces the canonical set.
- Product requests new illustrations through a brief that includes: surface type, user state, the emotion the illustration should evoke, and the copy it will appear alongside.
- Illustrations are reviewed together — art and copy — before shipping. An illustration that says "possibility" paired with copy that says "nothing here yet" is a missed moment.

---

## 4. Motion and Animation

Motion is underused as a brand signal at Apollo, and when it does appear, it's often functional (a loading state) rather than expressive (a moment that feels like Apollo). There's an opportunity here.

**The principle:** Motion should feel like light — purposeful, directional, fast. Not playful. Not whimsical. Forward.

**The four types of motion in the product:**

**Functional motion** (always present, invisible when done right)
- Loading indicators, skeleton screens, progress bars, transitions between states.
- These should be fast and clean. The goal is to reduce perceived latency, not to entertain.
- Duration: 100–200ms. Easing: ease-out or linear. No bounce, no overshoot.

**Transitional motion** (surface-to-surface, panel-to-panel)
- Opening modals, sliding panels, expanding rows.
- These orient the user spatially. They should feel like physical movement, not magic.
- Duration: 150–300ms. Directional — content slides in from the direction it "lives."

**Feedback motion** (confirming a user action)
- Micro-interactions: a checkbox checking, a button confirming, a contact being added to a sequence.
- Brief, satisfying, tied to the action's consequence. A destructive confirmation can afford a slightly different rhythm than an additive one.
- Duration: 100–150ms for micro. Up to 400ms for more significant confirmations.

**Brand motion** (earned, rare, meaningful)
- Used at the moments that sit furthest on the Brand Mode end of the spectrum: completing onboarding, hitting a milestone, unlocking a feature.
- These can use the brand color palette, directional light, particle effects if applied sparingly. The standard is: would this feel like a reward if a user saw it once a month? If yes, it belongs. If a user sees it daily, it becomes noise.
- Duration: up to 1–2 seconds. These are the only moments where motion is the message, not the vehicle.

**Rules:**
- All motion must respect `prefers-reduced-motion`. Functional and transitional motion degrades to instant. Brand motion degrades to a static state.
- No looping animations in the persistent UI (sidebars, headers, tables). Motion in static contexts implies something is wrong.
- Animation tokens (duration, easing curves) should live in the design system, not be set ad hoc.

**Brand ↔ Product alignment:**
- Brand defines the motion language (feel, easing curves, acceptable duration ranges) in the design system guidelines.
- Product Design implements motion within those parameters and flags any brand-motion moments early in the design process so Brand can provide direction.
- Engineering should not introduce net-new animations without a design spec. "A little animation would be nice here" is how motion debt accumulates.

---

## 5. The Brand-in-Product Decision Framework

When a design decision touches brand expression, use this checklist:

**1. Where on the spectrum does this surface sit?**
Is this a brand moment (rare, high-intent, commercial or emotional significance) or a tool moment (repeated, task-focused, efficiency-oriented)?

**2. Has the brand already appeared on this screen?**
Two brand moments on the same surface cancel each other out. Pick one.

**3. Does the asset (illustration, animation, color accent) make the moment feel more like Apollo — or more like noise?**
If removing it would make the surface feel flat and generic, it earns its place. If removing it would make the surface feel cleaner, remove it.

**4. Does the copy match the visual weight?**
A brand-mode illustration with utility-mode copy is a mismatch. A yellow conversion button with hedging copy is a mismatch. Voice and visual hierarchy should make the same argument.

**5. Will users see this regularly?**
Brand expression that a user sees every day stops being brand expression. Reserve elevated treatment for surfaces that are genuinely infrequent or transitional.

---

## 6. Governance: How Brand and Product Stay Aligned

Design systems drift. This document is a starting point, not a permanent answer. Keeping Brand and Product aligned requires process, not just principles.

**Token audit (quarterly):** Product Design and Brand check that color, type, and spacing tokens are identical between the Figma brand library and the product design system. Discrepancies are logged and resolved within the sprint.

**New asset requests:** Any request for a net-new illustration, icon, or brand-motion treatment goes through a shared brief. The brief includes surface type, user state, and the copy the asset will appear alongside. Assets are reviewed in context — never in isolation.

**Pre-ship brand review:** Features that touch brand-mode surfaces (onboarding, conversion, empty states for new features) get a Brand review before engineering handoff. Not a gate — a checkpoint. The question is: does this feel like Apollo?

**Shared language:** Brand and Product use the same terminology. A "brand moment" means a specific thing (see the spectrum above). A "token" is a specific thing. Using shared vocabulary prevents the miscommunication that causes drift.

---

## Appendix: Quick Reference

| Surface | Typography | Color | Iconography | Illustration | Motion |
|---|---|---|---|---|---|
| Data tables | System / small | Surface tones | System icons at 16px | None | Functional only |
| Settings | System / small | Surface tones | System icons | None | Functional only |
| Empty states (new user) | System + display accent | Possible yellow | Glyph-scale icon | Possible | Transitional + feedback |
| Onboarding steps | System + display accent | Brand palette | Glyph-scale icon | Possible | Transitional + feedback + brand |
| Upgrade / conversion | System + display accent | Yellow CTA | None or glyph-scale | Possible | Brand motion if milestone |
| Modals (utility) | System | Surface tones | System icons | None | Transitional |
| Error (full-page) | System + display accent | Surface tones / soft | Glyph-scale | Possible | Transitional |
| Tooltips / inline help | System / small | Surface tones | None | None | None |

---

*This document is a living artifact. It should be updated whenever a new surface type is introduced, a design system decision is made that touches brand expression, or Brand refreshes its guidelines. Version it, date it, and keep both teams on the same copy.*
