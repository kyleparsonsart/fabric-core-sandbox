# Tokens Northstar — State of the Project
*March 2026 · Owner: Kyle Parsons, Fabric Core*

---

## Where We Stand

Three phases. One hard deadline: **August 1, 2026**. All three phases must ship and stabilize before ApolloNEXT on September 30.

| Phase | Category | Adoption | Status |
|---|---|---|---|
| 1 | Typography | 🟡 68.1% | In QA — staging complete |
| 2 | Spacing | 🔴 25.6% / 🟡 82.3% | Blocked on Phase 1 |
| 3 | Color | 🟢 96.1% / 🔴 19.7% | Pre-work in progress |

> Each phase must reach **91%+ adoption ("Good")** before the next begins. Partial completion is not acceptable.

---

## Phase 1 · Typography
### The only thing blocking production is the L0–L1 audit.

Engineering has done the work. Type styles, semantic tokens, and the mono font removal are all live in staging. Design QA is complete. The remaining step is a design-side audit of the mapped styles — verifying that current token assignments match the Northstar vision — before Supriya can finalize staging and the phase moves to production.

**This week's action:**
- Kyle completes L0–L1 audit → delivers to Supriya by mid-week
- Supriya updates staging env
- Regression testing → production release

**Open eng tasks after audit:**
- Incorporate audit feedback into staging
- Ensure full Fabric component coverage
- Regression testing

---

## Phase 2 · Spacing
### The hardest phase. Starts Q2. XFN support is not optional.

Spacing has the lowest starting baseline of any phase — effectively Critical at 25.6% for `--spacing-*` — and the largest raw value footprint (7,079 instances to remediate). Getting from Critical to Good is a different order of magnitude than what Phase 1 required.

**Design prerequisites before Q2 kickoff:**
- Build the semantic Figma Variables collection (currently only a primitive ramp exists)
- Conduct L0–L1 spacing audit across core Apollo surfaces
- Remap component spacing tokens

**What will make or break this phase:**

The token framework is ready on paper. The real question is whether product teams outside DS will have capacity to remediate spacing on surfaces they own. That commitment needs to be secured early in Q2 — before engineering is mid-flight and discovers coverage gaps they can't close alone.

**Ranked risks:**

1. **XFN bandwidth** — No path to 90% without product team support. Needs leadership alignment now, not during execution.
2. **Critical baseline** — 25.6% → 91%+ is the steepest climb in the project. Budget for more time than Phase 1 required.
3. **Semantic Variables gap** — If the Figma semantic collection isn't ready at Q2 kickoff, engineering has no source of truth to build against.
4. **Timeline compression** — ~13 weeks from Phase 1 completion to August 1. No room for rework loops.
5. **Regression surface** — 7,079 raw values is a large blast radius. Regression testing needs to be comprehensive, not spot-check.

---

## Phase 3 · Color
### Coverage is strong. Foundation work is the focus.

Color token adoption is in good shape where it counts — `--color-ui-` / `--color-base-` is at 96.1%. The critical gap is `--elevation-*` (box-shadow) at 19.7%, which will need a focused remediation pass. Engineering picks this up mid-Q2.

Active pre-work:
- Primitive ramps expanding to 10 shades per color, with contrast steps shaped into a bell curve — this is what makes light/dark semantic mappings predictable rather than brittle
- Semantic token framework draft exists and is being refined
- Figma Variables needs updating with the new primitive and semantic layer before engineering begins

This phase is the most systemically coupled — it touches theming infrastructure and dark mode — so the design foundation needs to be airtight before a single token is pushed to code.

---

## The Critical Path

```
L0–L1 Audit (this week, Kyle)
    → Staging update (Supriya, mid-week)
        → Regression testing
            → Phase 1 ships to production
                → Phase 2 engineering kicks off (Q2)
                    [Parallel: Semantic Variables + XFN alignment]
                        → Phase 2 ships to production
                            → Phase 3 engineering kicks off (mid-Q2)
                                → All phases complete by Aug 1
                                    → ApolloNEXT buffer (Sept 30)
```

Every step is load-bearing. A slip in Phase 1 compresses Phase 2, which compresses Phase 3.

---

## What Needs to Happen Right Now

| Owner | Action | Urgency |
|---|---|---|
| Kyle | Complete L0–L1 typography audit | This week |
| Kyle | Begin semantic Figma Variables collection for spacing | Before Q2 |
| Kyle | Finalize color primitive ramps + semantic draft | Before mid-Q2 |
| Kyle + Leadership | Secure XFN commitment from product teams for Phase 2 remediation | Before Phase 2 kickoff |
| Supriya | Update staging with audit feedback | Next week |
| Shared | Align on regression testing protocol for Phase 1 → production | Before Phase 1 ships |
