# Brand Button vs. Primary Button — Usage Guidance

A **Primary button** advances the user's task. A **Brand button** advances Apollo's relationship with the user. When in doubt, default to black — Brand moments should feel rare enough to mean something.

---

## Characteristics at a Glance

| | Primary (Black) | Brand (Yellow) |
|---|---|---|
| **Intent** | Helps the user accomplish something | Represents a commercial or identity moment |
| **Apollo's role** | Tool | Brand |
| **Frequency** | Common across all surfaces | Rare — used sparingly and intentionally |
| **Surface fit** | Works in any context, including dense data views | Feels out of place in tables, forms, or transactional flows |
| **Reversibility** | Action is often reversible or low-stakes | Action often carries weight — a commitment or unlock |
| **User's frame of mind** | Task-focused | Decision or momentum-focused |

---

## Current State

In the existing Apollo UI, yellow is applied broadly across onboarding and conversion surfaces without a consistent rationale. The upgrade and pricing page is the clearest example of correct usage — the yellow "Upgrade" button anchors a genuine conversion moment and carries appropriate commercial weight. Within the onboarding wizard, however, yellow appears on actions like "Skip," "Go to home," "Save profile," and individual step progressions that are straightforward utility actions. These don't represent branded moments; they represent tasks the user needs to complete. The onboarding quiz flow — which consistently uses a black "Continue" — is actually the more principled pattern and should serve as the baseline for how progression steps are styled going forward. The audit should treat the pricing page as the reference point for what a Brand button moment looks like, and work backward from there.

---

## The Quick Test

If the button would feel equally appropriate in a dense data table, it's **Primary**. If removing the yellow would make the moment feel visually flat or less like Apollo, it's **Brand**.

---

## Recommended Approach

Migrating from a single yellow button to a two-button system requires a design-led audit before any implementation begins. The goal is consistent, documented decisions across every surface — not a series of judgment calls made independently by individual engineers or product teams.

- **Separate the audit from the implementation.** Before anything changes in code, someone on the design side needs to walk every surface with a yellow button and make a documented call — Brand or Primary. This is a Figma audit, not a Jira sprint.
- **Classify the obvious cases first.** Most yellow buttons will be straightforward. "Skip," "Save profile," and "Go to home" are clearly Primary. "Upgrade" is clearly Brand. Get these into a shared doc and move quickly.
- **Flag and resolve the debatable cases as a group.** Ambiguous buttons — particularly key onboarding progression steps — should be reviewed together with design leads before implementation. Don't let edge cases block the easy wins.
- **Ship surface by surface, not all at once.** The onboarding wizard is a good starting point — it has the most inconsistent yellow usage and a contained scope. Use it to pressure-test the criteria before rolling out to every surface.
- **Use the Tokens Northstar as the enforcement layer going forward.** The audit is a one-time cleanup. When the semantic token layer ships in Q2, `color.interactive.brand` becomes a named token with documented rules — that's what prevents the inconsistency from returning.

