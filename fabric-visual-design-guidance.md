# Fabric Visual Design POV
### Tokens Northstar · Component Updates

*Version 1.0 · March 2026 · Fabric Design System*

---

## Purpose

This document articulates Fabric's visual design point of view as it relates to the Tokens Northstar initiative. It describes the outcomes we are working toward, explains how specific component updates advance those outcomes, and establishes a shared framework for evaluating future decisions.

The Tokens Northstar is not a reskin. It is a deliberate effort to close the gap between where Fabric is and where it needs to be — a design system that expresses a unified, legible, and trustworthy product experience from first impression to daily workflow.

---

## Intended Outcomes

The following outcomes define the standard against which Tokens Northstar work will be measured. Component decisions are made in service of these outcomes — not in isolation.

---

### 1 · A product visually aligned with the brand promise

Apollo's marketing surfaces communicate confidence, intelligence, and momentum. The product should feel like a continuation of that experience — not a step down from it.

Today, the visual language inside the product and the visual language of Apollo's brand share limited common ground. Colors diverge. Treatments feel independent. Users who encounter Apollo's brand before they log in should not have to recalibrate their expectations when they do.

The Tokens Northstar closes this gap by establishing shared token foundations that connect product and marketing. Brand expression — when it appears in the product — should feel intentional, not accidental.

---

### 2 · More intentional use of color, with less decorative noise

Color in Fabric's current state carries inconsistent meaning. The same hue appears as an action color in one context and a status signal in another. Decorative fills compete with semantic indicators. The result is a UI that is visually busy without being more informative.

The Tokens Northstar reorients color around semantic role. Every color in the interactive layer should answer one question: *what is this communicating?* Status, priority, category, and state each have a defined color lane. Colors that don't map to a role don't belong in the system.

---

### 3 · An established visual framework for interactive components

Fabric's interactive components — buttons, chips, badges, checkboxes, radios — currently lack a unified visual language for signaling interactivity and state. A component on one surface looks interactive; the same component on another surface is indistinguishable from static content.

The Tokens Northstar establishes a consistent framework: how components look at rest, how they respond to interaction, how they communicate selection and availability. Users should be able to develop reliable expectations about what they can click, what they've selected, and what is unavailable — without learning each surface individually.

---

### 4 · Clearer hierarchy and emphasis, making the UI more scannable

Every UI element is competing for the same finite attention. In Apollo's current product, that competition is poorly refereed — multiple elements claim the same level of emphasis, and users must work harder to identify what matters and where to act.

The Tokens Northstar introduces intentional hierarchy through disciplined use of weight, contrast, and emphasis. High-priority signals earn their prominence. Low-priority signals recede. The baseline is calm — so the things that matter actually stand out.

---

## Component Updates

The following sections document the specific changes Fabric is making to each component as part of the Tokens Northstar, the rationale behind those changes, and how they connect to the outcomes above.

---

## Buttons

### What Buttons Do

Buttons are the primary mechanism by which users initiate action. They carry more communicative responsibility than almost any other element in the system — they must signal priority, type of action, interactivity state, and context simultaneously. When the button system is inconsistent or semantically ambiguous, users make slower decisions and develop less confidence in the interface.

### What's Changing

Fabric is introducing a fully structured button taxonomy with eight distinct variants organized into four semantic families:

**Standard** — Three-tier hierarchy (Primary, Secondary, Tertiary) for all standard interactive moments. The Primary button shifts to a high-contrast black fill, establishing the clearest possible dominance signal on a light surface. Secondary and Tertiary variants step down in weight progressively, creating a reliable hierarchy that works without relying on placement or copy alone.

**Brand** — A dedicated variant for Apollo's brand yellow. Yellow is not removed from the system — it is relocated to the role it is best suited for: moments of brand expression, onboarding highlights, and marketing-adjacent surfaces. Separating brand color from interactive color resolves the semantic ambiguity of a warning-colored primary button and gives yellow more impact by making its usage intentional.

**Destructive** — Two-tier destructive variants (Destructive Primary, Destructive Secondary) using the semantic red family. Red is used exclusively for irreversible or consequence-heavy actions, with weight calibrated to the severity and surface context of the action.

**AI** — Two variants (AI Primary, AI Secondary) using the Indigo/violet family with the AI sparkle icon. AI actions occupy their own visual lane because they represent a fundamentally different kind of action — augmented, automated, or AI-generated. Distinguishing them visually allows users to develop accurate expectations about what will happen when they interact.

### How This Connects to the Outcomes

The button taxonomy directly advances Outcomes 2, 3, and 4. Color is applied according to semantic role — brand, interactive, destructive, or AI — not aesthetic preference *(Outcome 2)*. Every button variant has a defined visual treatment for interactivity, selection, and state *(Outcome 3)*. The three-tier Standard hierarchy ensures primary actions are always legible as dominant, without requiring adjacent context to interpret *(Outcome 4)*.

The Brand button variant also supports Outcome 1: Apollo's yellow appears in the product as a considered brand signal, rather than being absent or misapplied.

### Before / After

```
┌──────────────────────────────────────────────────────────────────────────────┐
│  BEFORE                                                                       │
│                                                                               │
│  [ Yellow Primary ]   [ Outlined Secondary ]   [ Text Tertiary ]             │
│                                                                               │
│  Single family. Yellow primary creates semantic ambiguity with warning        │
│  states. No dedicated destructive or AI variants. Hierarchy relies on        │
│  placement rather than visual weight.                                         │
└──────────────────────────────────────────────────────────────────────────────┘

┌──────────────────────────────────────────────────────────────────────────────┐
│  AFTER                                                                        │
│                                                                               │
│  [ Black Primary ]   [ Gray Secondary ]   [ Text Tertiary ]                  │
│  [ Yellow Brand ]                                                             │
│  [ Red Destr. Primary ]   [ Red Destr. Secondary ]                           │
│  [ Violet AI Primary ]   [ Violet AI Secondary ]                             │
│                                                                               │
│  Four semantic families. Each variant has a defined role, weight, and         │
│  color lane. Hierarchy is perceivable without reading labels.                 │
└──────────────────────────────────────────────────────────────────────────────┘
```

*↑ Visual placeholder — replace with component frame from Figma*

---

## Chips

### What Chips Do

Chips are compact, interactive elements used for filtering, categorization, multi-select input, and lightweight toggles. In Apollo's product, they appear heavily in search and filtering contexts — surfaces where users are actively making decisions about scope and criteria. Their legibility at this task is critical.

### What's Changing

Fabric is standardizing the chip component around a clearer distinction between **states** and **categories**. Currently, chips use varied color fills that conflate the visual language of "this filter is active" with "this chip belongs to a category." The result is filtering surfaces that feel visually noisy and where selection state is difficult to parse at a glance.

The updated chip system introduces:

- A consistent **default state** using a neutral, low-weight surface that integrates calmly into the baseline
- A distinct **selected state** using a filled, higher-contrast treatment that clearly signals activation
- **Semantic category color** applied only where category distinction carries genuine user value — not as decoration
- Removal of decorative color fills that don't map to a semantic role

### How This Connects to the Outcomes

Chips are a direct application of Outcome 2 (intentional color, less decorative noise) and Outcome 4 (clearer hierarchy and scannability). When selected and unselected chips are visually distinct and when category color is earned rather than default, users can parse filtering state significantly faster. A calmer default chip baseline also reduces the visual load on dense filtering surfaces.

### Before / After

```
┌──────────────────────────────────────────────────────────────────────────────┐
│  BEFORE                                                                       │
│                                                                               │
│  [ Colored Chip A ]   [ Colored Chip B ]   [ Colored Chip C (selected) ]     │
│                                                                               │
│  Decorative color fills applied broadly. Selected state is not clearly        │
│  differentiated from default state. Visual noise on filtering surfaces.       │
└──────────────────────────────────────────────────────────────────────────────┘

┌──────────────────────────────────────────────────────────────────────────────┐
│  AFTER                                                                        │
│                                                                               │
│  [ Neutral Chip A ]   [ Neutral Chip B ]   [ Filled/Bold Chip C (selected) ] │
│                                                                               │
│  Neutral default. Selected state is visually unambiguous. Semantic color      │
│  applied only where it encodes meaningful category distinction.               │
└──────────────────────────────────────────────────────────────────────────────┘
```

*↑ Visual placeholder — replace with component frame from Figma*

---

## Badges

### What Badges Do

Badges are non-interactive indicators that communicate status, category, count, or label. In Apollo's product, they appear across contact records, sequences, pipeline views, and data tables — often in high density. Their role is to allow users to scan and categorize information quickly, without requiring them to read every value.

### What's Changing

Fabric is refocusing badge usage around **semantic status** and reducing its application as a general-purpose visual label. The current badge system applies color broadly — to category tags, user labels, data attributes, and status indicators alike — with insufficient distinction between these roles. The result is a product surface where everything looks like a badge, and badges stop being useful signals.

The updated badge system introduces:

- A defined set of **semantic status badges** (success, warning, error, info, neutral) with consistent color mappings tied to the semantic token layer
- A **category/label badge** variant in neutral — used when a label is informational rather than status-bearing
- Stricter guidelines on when badges are appropriate versus when plain text or a different component should be used
- Reduced color variety to prevent the "badge rainbow" effect that degrades scannability in data-dense views

### How This Connects to the Outcomes

Badge changes directly serve Outcome 2 (intentional color use) and Outcome 4 (scannability and hierarchy). When badge color means something specific and consistent, users can scan a records list and extract status information without interpreting each badge individually. When badge color is decorative or inconsistent, scanning fails and users default to reading — slowing them down on surfaces designed for speed.

### Before / After

```
┌──────────────────────────────────────────────────────────────────────────────┐
│  BEFORE                                                                       │
│                                                                               │
│  [ Blue Badge ]  [ Green Badge ]  [ Purple Badge ]  [ Yellow Badge ]          │
│  [ Orange Badge ]  [ Teal Badge ]  [ Red Badge ]                              │
│                                                                               │
│  Color applied broadly across categories and statuses without semantic         │
│  mapping. High chromatic variety reduces signal value of any individual badge.│
└──────────────────────────────────────────────────────────────────────────────┘

┌──────────────────────────────────────────────────────────────────────────────┐
│  AFTER                                                                        │
│                                                                               │
│  [ Green: Success ]  [ Yellow: Warning ]  [ Red: Error ]                      │
│  [ Blue: Info ]  [ Neutral: Label ]                                           │
│                                                                               │
│  Semantic color lanes. Each badge color maps to a consistent meaning.         │
│  Neutral variant for non-status labels. Reduced palette, stronger signal.    │
└──────────────────────────────────────────────────────────────────────────────┘
```

*↑ Visual placeholder — replace with component frame from Figma*

---

## Radio Buttons

### What Radio Buttons Do

Radio buttons present a set of mutually exclusive options and allow users to select exactly one. They appear in forms, settings panels, filter drawers, and configuration flows. Their clarity directly impacts form completion confidence — if a user cannot immediately tell which option is selected, or cannot distinguish the interactive component from surrounding content, they lose trust in the form.

### What's Changing

Fabric is updating the radio button to establish clearer, more consistent visual communication across all states. The current implementation has inconsistencies in how selected and unselected states are distinguished, how the component responds visually to hover and focus, and how it appears in disabled or error states.

The updated radio button system defines explicit treatments for each state:

- **Default (unselected):** Neutral ring, low visual weight, integrates into the surface without drawing attention
- **Selected:** Filled center with a brand-appropriate fill color, clearly distinct from the unselected state
- **Hover:** Subtle ring elevation to signal interactivity before the user commits
- **Focus:** Clear focus ring meeting accessibility requirements, distinct from the selected state
- **Disabled:** Significantly reduced opacity, non-interactive cursor
- **Error:** Border shifts to semantic red to signal that a required selection has not been made

### How This Connects to the Outcomes

Radio button changes directly advance Outcome 3: establishing an interactive framework where users can reliably interpret what is selectable, what is selected, and what is unavailable. Consistent state communication across radio buttons also contributes to Outcome 4 — when form elements communicate their state clearly, users can scan a configuration panel and understand the current setup at a glance rather than reading each field individually.

### Before / After

```
┌──────────────────────────────────────────────────────────────────────────────┐
│  BEFORE                                                                       │
│                                                                               │
│  ○  Option A        ●  Option B (selected)       ○  Option C                 │
│                                                                               │
│  Inconsistent state treatment across surfaces. Limited hover/focus            │
│  feedback. Error and disabled states are underdefined.                        │
└──────────────────────────────────────────────────────────────────────────────┘

┌──────────────────────────────────────────────────────────────────────────────┐
│  AFTER                                                                        │
│                                                                               │
│  ○  Default    ◉  Selected    ○̈  Hover    [◉]  Focus    ○  Disabled (muted)  │
│  ○⚠  Error state (red ring)                                                  │
│                                                                               │
│  Fully defined state set. Interactivity is legible at every stage of          │
│  user interaction. States are consistent across all form surfaces.            │
└──────────────────────────────────────────────────────────────────────────────┘
```

*↑ Visual placeholder — replace with component frame from Figma*

---

## Checkboxes

### What Checkboxes Do

Checkboxes allow users to select one or more options independently. They are among the most common form elements in Apollo's product — present in bulk selection, permission settings, filter configuration, and onboarding flows. They also carry a unique interaction challenge: the indeterminate state, which occurs when a parent checkbox has only some of its children selected. How clearly the system handles this three-way state (unchecked, indeterminate, checked) has direct implications for bulk-action workflows.

### What's Changing

Fabric is aligning the checkbox component with the same state framework applied to radio buttons, while adding explicit treatment for the indeterminate state and improved handling of the component in dense table contexts.

The updated checkbox system defines:

- **Default (unchecked):** Neutral border, minimal visual weight
- **Checked:** Filled box with a checkmark, using the interactive color token — clearly distinct from unchecked, readable at small sizes
- **Indeterminate:** Distinct visual treatment (dash/minus mark) that is unambiguous — neither checked nor unchecked, communicating partial selection accurately
- **Hover:** Ring or fill preview to telegraph interactivity
- **Focus:** Accessible focus ring
- **Disabled:** Reduced opacity, non-interactive
- **Error:** Border treatment in semantic red for required fields

Fabric is also establishing guidance on checkbox sizing in context — ensuring that checkboxes in data-dense table rows are not undersized to the point of being difficult to target or read.

### How This Connects to the Outcomes

Like radio buttons, checkbox updates directly serve Outcome 3 — establishing a consistent interactive framework that users can rely on across surfaces. The indeterminate state treatment is particularly relevant to Outcome 4: when users can scan a table and immediately understand which rows are partially selected versus fully selected versus unselected, bulk-action workflows become significantly faster and less error-prone. Clear state communication is a form of hierarchy — it tells users what the system knows and what it needs.

### Before / After

```
┌──────────────────────────────────────────────────────────────────────────────┐
│  BEFORE                                                                       │
│                                                                               │
│  ☐  Unchecked     ☑  Checked     [–]  Indeterminate (inconsistent)           │
│                                                                               │
│  Indeterminate state is visually ambiguous or absent on some surfaces.        │
│  Hover and focus states are inconsistent. Error state is undefined.           │
└──────────────────────────────────────────────────────────────────────────────┘

┌──────────────────────────────────────────────────────────────────────────────┐
│  AFTER                                                                        │
│                                                                               │
│  ☐  Default    ☑  Checked    [—]  Indeterminate    ☐̈  Hover    [☑]  Focus   │
│  ☐  Disabled (muted)    ☐⚠  Error (red border)                               │
│                                                                               │
│  Fully defined state set including unambiguous indeterminate treatment.       │
│  Consistent across all form and table surface contexts.                       │
└──────────────────────────────────────────────────────────────────────────────┘
```

*↑ Visual placeholder — replace with component frame from Figma*

---

## How These Changes Work Together

No component update here is isolated. The changes to Buttons, Chips, Badges, Radios, and Checkboxes are all moving in the same direction simultaneously:

- **Color is earning its place.** Across every component, color that doesn't carry semantic meaning is being removed or constrained. The result is a palette that is quieter overall and more powerful when it does appear.

- **States are being fully defined.** Every interactive component will communicate default, hover, selected/active, focus, disabled, and error states consistently. Users will be able to develop accurate instincts about what is interactive and what their current state is — across every surface they use.

- **Hierarchy is becoming structural.** The button taxonomy, badge system, and chip states are all built on the same premise: visual weight should be earned and proportional. Dominant signals are dominant for a reason. Quiet signals are quiet because they are less urgent — not because they were left unstyled.

This is what Fabric is building toward. These component updates represent the first concrete layer of a system that will continue to mature as the Tokens Northstar delivers its full architecture in Q2 2026.

---

## What Comes Next

The Tokens Northstar token architecture is scoped for Q2 2026 delivery. When it ships, it will formalize the semantic color layer that these component decisions are already expressing — establishing canonical token names, enforcing role-based color constraints, and creating the infrastructure for scalable theming and future dark mode work.

Component guidance will be updated at that time to reference token names directly. No visual changes to the components documented here are expected as part of that update.

---

*Fabric Design System · Version 1.0 · March 2026*
*For questions or contributions, contact the Fabric team.*
