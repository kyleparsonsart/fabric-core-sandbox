# Tokens Northstar PRD

**Product:** Apollo Design System (Tokens)
**Owner:** Fabric Core (Design Systems)
**Primary Stakeholders:** DS Engineering, Product Design, Brand, UXR
**Status:** In Progress
**Target Completion:** August 1, 2026
**External Milestone:** ApolloNEXT — September 30, 2026
**Baseline token metrics:** [Token Usage - Baseline Metrics](#)

---

## Problem Statement

Apollo's UI currently suffers from inconsistent visual hierarchy and limited scanability. On the design system side, token adoption differs across product areas, making global UI updates, theming (such as dark mode), and future visual evolution more complex to implement. While a clear visual direction has been designed and approved from the Token Northstar, the system currently lacks a consistent enforcement layer to ensure this direction scales predictably and safely into production while also supporting future visual design decisions.

---

## Objective

Deliver **Tokens Northstar** as a phased foundation (Typography, Spacing, Color) that standardizes Apollo's UI at scale and enables faster, safer product delivery. This work directly supports FY27 AOP goals through the following outcomes and metrics:

**Improve NRR and retention through UI consistency**
- ≥ 80% of the app standardized on semantic tokens
- Measurable reduction in UI inconsistencies across core workflows
- Fewer UX regressions tied to visual or theming changes

**Increase upmarket readiness and win rates**
- 100% of core surfaces meet UI consistency and polish standards required for MM/Enterprise readiness
- Dark mode and future theming enabled without component rewrites
- Reduced variance in visual quality across high-traffic sales surfaces

**Accelerate product delivery and execution speed**
- 25–30% faster feature delivery in tokenized surfaces (aligned with Fabric reuse targets)
- Reduced design and engineering rework caused by one-off styling decisions
- Faster global UI updates driven by token changes rather than refactors

**Enable AI-native platform execution**
- Shared token foundations adopted across AI surfaces (Assistants, Agents, AI Sheets, etc.)
- Tokens support consistent presentation across human- and agent-driven experiences
- Reduced need for AI-specific UI exceptions or overrides

**Reduce platform and delivery risk**
- ≥ 90% token adoption score ("Good") for each phase before advancing
- No raw values in production for completed token categories
- Token changes are auditable, reversible, and safe to cascade

---

## Background & Completed Work

The following work is complete and serves as fixed input into this PRD:

- ✅ Internal Design Systems sentiment gathering on Apollo's existing UI
- ✅ [UI competitive analysis](#) informing differentiation within the sales platform landscape
- ✅ Authored and agreed-upon [UI Design Principles](#)
- ✅ [Visual design explorations](#) across high-traffic Apollo surfaces, approved by the VP of Design
- ✅ Brand alignment and approval supporting a shift from a sterile gray-and-white UI to a warmer sand-based theme

---

## Goals & Success Metrics

Tokens Northstar is successful when:

- Apollo's core app is fully normalized on tokens, phase by phase
- Components consume semantic tokens exclusively
- No parallel or ad-hoc styling paths exist
- Each token phase ships to production and has an **adoption score** of `Good` (91%+) before the next phase begins
- Dark mode is enabled through semantic reassignment, not component rewrites
- Approved visual direction matches production output exactly

---

## Non-Goals

This project does not aim to:

- Introduce large net-new token systems
- Allow partial adoption within a phase (i.e., components-only)
- Redesign components unrelated to token normalization
- Permit advisory-only token usage

---

## Scope

**In scope**
- Typography, spacing, and color tokens
- Full Apollo core app coverage per phase
- Component-level token remapping where required
- Production release per phase, with optional feature flags

**Out of scope**
- Marketing site
- Experimental UI patterns outside the core app
- Un-sequenced or parallel token migrations

---

## Token Architecture

Apollo's token model follows a **primitives → semantics → components** structure. Components consume semantic tokens exclusively. Each phase reinforces this contract before proceeding to the next.

---

## Sources of Truth

**Design**
- [Tokens Northstar Designs](#)
- [Foundations Figma File](#) (variable location)
- [Color Token Foundation (Completed)](#)
- [Token Usage - Baseline Metrics](#)

**Documentation & Change Tracking:** Notion token change-log database
- [Color Token Mapping Database](#)

**Engineering:** Token package in GitHub

---

## Token Adoption

The **Token Adoption Score** measures how consistently a token category (Typography, Spacing, or Color) is applied across the Apollo UI. It is used to assess readiness for each phase of Tokens Northstar, identify migration risk, and determine whether tokens can safely cascade across surfaces without regressions.

Lower scores indicate higher risk and priority for normalization work. Higher scores signal stability and readiness for future token changes.

### Scoring Breakdown

| Score | Label | Description |
|-------|-------|-------------|
| 🔴 0–25% | **Critical** | Little to no adoption. Token usage is largely absent or bypassed in favor of raw values. Components rely on hardcoded values or primitives directly. High risk of visual drift. Global token changes would have minimal or unpredictable impact. **Immediate audit required. Block new component/feature work until baseline compliance is established.** |
| 🟠 26–50% | **Poor** | Token category is inconsistently applied or not widely communicated. Token usage exists but is fragmented or uneven. Some components follow tokens; others rely on legacy patterns. Manual overrides and one-off values are common. Global token updates require significant manual cleanup. |
| 🟡 51–90% | **Needs Work** | Decent component coverage, but still at risk during major token changes. Majority of components consume tokens correctly, but small meaningful pockets of raw values or legacy tokens remain. Global changes mostly cascade but still require spot fixes. Requires focused cleanup and regression prevention to graduate. |
| 🟢 91–100% | **Good** | Acceptable parity, allowing tokens to cascade across surfaces effectively. Token usage is consistent and enforced. No meaningful raw value leakage. Global token changes cascade predictably and safely. Dark mode / theming changes can be made via semantic reassignment. **This is the exit criteria for each phase.** |

| Critical (0–25%) | Poor (26–50%) | Needs Work (51–90%) | Good (91–100%) |
|---|---|---|---|
| "Stop & Fix" | "Migrate & Educate" | "Stabilize & Propagate" | "Monitor & Govern" |

---

## Token Northstar Phases

Tokens Northstar is delivered in three phased stages — **Typography, Spacing, and Color** — ordered by dependency and risk. Each phase fully normalizes and propagates its token category across the Apollo UI before the next phase begins, ensuring system stability, reducing regression risk, and allowing changes to safely cascade across surfaces.

---

### Phase 1: Typography Tokens

> ⚠️ Adoption scores below are placeholders and need refreshing before the next review.

| Total Instances | Using Tokens | Raw Values (non-token) | Adoption Score |
|---|---|---|---|
| 5,910 | 4,027 | 1,883 | 🟡 68.1% — Needs Work |

**Current status:** In progress — late-stage QA. Type styles are live in staging. Visual QA completed. Mono font family removal (engineering oversight) has been pushed to staging. Next step: L0–L1 audit of currently mapped styles to evaluate whether assignments are accurate and match the Northstar vision. Audit is Kyle's deliverable (target: next week), to be handed off to Supriya (lead eng) by mid-week for staging updates.

#### Summary

This phase focuses on normalizing Apollo's typographic system to establish a consistent, legible hierarchy that improves scanability and directive focus across dense sales workflows. Typography is treated as the lowest-risk, highest-signal entry point into phased token enforcement and serves as the proving ground for adoption discipline.

#### Problem

Typography usage across Apollo is inconsistent, with a mix of legacy styles, semantic tokens, primitive tokens, and raw values coexisting in production. This leads to uneven hierarchy, reduced scanability, and difficulty making global type adjustments safely.

#### Objective

Normalize all typography usage onto a single semantic token framework that is propagated across components, eliminating raw values and primitive usage in production UI.

#### In Scope

- Font families, sizes, weights, line heights, and paragraph heights
- Typographic hierarchy tokens (headings, body, labels, metadata)
- Mapping legacy typography tokens to normalized semantic tokens
- Component-level typography remapping where required

#### Out of Scope

- Net-new typographic concepts unrelated to hierarchy normalization
- Component redesigns beyond token reassignment

#### Success Criteria

- All components consume semantic typography tokens exclusively
- No raw font values or legacy typography styles remain in production
- No components reference primitive typography tokens
- Improved hierarchy consistency across high-density Apollo surfaces

#### Key Design Responsibilities

- ~~Update Token Northstar visuals based on peer and product designer feedback~~ ✅
- ~~Finalize typography hierarchy and semantic naming~~ ✅
- ~~Document the type system in the Foundations Figma file~~ ✅
- ~~Identify potential breaking changes and decide between revision vs. replacement~~ ✅
- ~~Visual QA of staging environment~~ ✅
- ~~Flag mono font family removal~~ ✅
- [ ] L0–L1 audit of mapped styles against Northstar vision

#### Key Engineering Responsibilities

- ~~Update the token code package to reflect final typography decisions~~ ✅ (in staging)
- ~~Replace all raw typography values with semantic tokens~~ ✅ (in staging)
- ~~Remove mono font family~~ ✅ (in staging)
- [ ] Incorporate L0–L1 audit feedback into staging environment (owner: Supriya)
- [ ] Ensure Fabric components fully consume typography tokens
- [ ] Perform regression testing across impacted surfaces

#### Exit Criteria

Phase 1 is considered complete only when typography tokens are fully standardized in production and no legacy or raw typography usage remains.

---

### Phase 2: Spacing Tokens

> ⚠️ Adoption scores below are placeholders and need refreshing before the next review.

| Category | Total Instances | Using Tokens | Raw Values (non-token) | Adoption Score |
|---|---|---|---|---|
| `--spacing-*` | 9,510 | 2,431 | 7,079 (px values) | 🔴 25.6% — Critical |
| `--radius-*` | 1,857 | 1,528 | 329 (px values) | 🟡 82.3% — Needs Work |

> **Note:** The spacing adoption score (25.6%) falls within the **Critical** range (0–25%) per the scoring rubric. This should be verified and confirmed before the phase kicks off.

**Current status:** Not started — blocked on Phase 1 completion. Engineering kickoff targeted for start of Q2. On the design side, spacing guidance has been written and the spacing scale is finalized. Outstanding design prerequisite: Figma Variables needs a semantic collection built on top of the existing primitive ramp (currently only a primitive ramp exists). A similar L0–L1 audit process to Phase 1 will be used to validate spacing assignments across the Apollo UI before pushing to 90% coverage. Full remediation will likely require cross-functional support from product teams outside DS.

#### Summary

This phase normalizes spatial rhythm across Apollo to reduce visual noise, improve grouping, and create predictable layout patterns. Spacing tokens are standardized as the sole mechanism for layout and component spacing decisions.

#### Problem

Apollo currently relies heavily on raw pixel values for spacing, resulting in inconsistent rhythm, fragmented grouping, and excessive one-off overrides. This makes layouts harder to reason about and harder to evolve.

#### Objective

Establish spacing tokens as the mandatory source of truth for all padding, margin, gap, and radius values, eliminating raw spacing values from production UI.

#### In Scope

- Spacing scale normalization
- Padding, margin, and gap token remapping
- Corner radius token enforcement
- Component-level spacing adjustments where required

#### Out of Scope

- Layout redesigns not required for token compliance
- Experimental spacing systems outside the approved scale

#### Success Criteria

- All spacing values reference spacing or radius tokens exclusively
- Consistent vertical and horizontal rhythm across Apollo surfaces
- Significant reduction in one-off spacing overrides within components

#### Key Design Responsibilities

- ~~Update Token Northstar visuals based on spacing-related feedback~~ ✅
- ~~Finalize spacing scale and hierarchy~~ ✅
- ~~Document spacing tokens in the Fabric Foundations site~~ ✅
- ~~Write spacing guidance documentation~~ ✅
- [ ] Build semantic Figma Variables collection on top of primitive ramp
- [ ] Remap component spacing tokens where necessary
- [ ] Conduct L0–L1 audit of spacing assignments across core Apollo surfaces

#### Key Engineering Responsibilities

- [ ] Ensure all Fabric components consume spacing and radius tokens
- [ ] Identify and replace all raw spacing values
- [ ] Perform regression testing to validate layout stability

#### Exit Criteria

Phase 2 is complete when no raw spacing values remain in production and spacing tokens are fully enforced across the core app.

#### Risks

**Cross-functional bandwidth** is the highest-severity risk for this phase. Reaching 90% coverage across the Apollo UI will require remediation work on surfaces owned by product teams outside DS. Those teams have their own roadmaps and may not have capacity to prioritize spacing token adoption without explicit leadership alignment and dedicated resourcing.

**Critical starting baseline** compounds the effort. At 25.6%, spacing has the lowest adoption of any token category entering its phase. The gap from Critical to Good (91%+) is a much heavier lift than Phase 1's starting point of 68.1% — and the final 30–40% of coverage typically requires the most coordination.

**Semantic Figma Variables gap** is a design-side prerequisite that must close before engineering has a reliable source of truth to implement against. If the semantic collection isn't built ahead of the Q2 engineering kickoff, it will create downstream delays in the implementation phase.

**Timeline compression** is a real constraint. With Phase 1 completing in late April at the earliest, Phase 2 engineering has approximately 13 weeks to reach exit criteria before the August 1 deadline — assuming no re-work loops and no slippage in cross-functional support.

**Large regression surface.** With 7,079 raw pixel values to replace across 9,510 instances, the blast radius of spacing changes is significantly larger than Phase 1. Comprehensive regression testing coverage will be essential to catch layout issues before they reach production.

---

### Phase 3: Color Tokens

> ⚠️ Adoption scores below are placeholders and need refreshing before the next review.

| Category | Total Instances | Using Tokens | Raw Values (non-token) | Adoption Score |
|---|---|---|---|---|
| `--color-ui-`, `--color-base-` | 13,272 | 12,417 | 855 (hex + rgba) | 🟢 96.1% — Good |
| `--elevation-*` | 854 | 168 | 686 (box-shadow) | 🔴 19.7% — Critical |

**Current status:** Pre-work in progress — engineering pickup targeted for mid-Q2. Coverage is in a strong position overall, with active design improvements underway. Primitive color ramps are being expanded from the current scale to 10 shades per color, with contrast ratios between steps shaped into a bell curve to support smooth light/dark mode semantic mappings. A working draft of the newest semantic token framework exists. Figma Variables needs to be updated to reflect both the expanded primitive ramps and the new semantic layer before the engineering phase begins.

#### Summary

This phase migrates Apollo to a role-based semantic color token framework that supports the approved visual direction, enables dark mode, and simplifies future theming. This is the most systemically coupled phase and is gated behind full completion of Typography and Spacing.

#### Problem

Apollo's legacy component-based color semantics create unnecessary complexity, token sprawl, and make theming difficult. While adoption is high, the structure itself limits scalability and clarity.

#### Objective

Fully migrate all color usage to a role-based semantic color framework, eliminating legacy component-based semantics and enforcing color tokens as mandatory infrastructure.

#### In Scope

- Migration from component-based semantic color tokens to role-based semantic tokens
- Deprecation and remapping of all legacy color tokens
- Light and dark mode semantic mappings
- Brand-aligned color application across the core app

#### Out of Scope

- Partial color migration or coexistence of old and new semantics
- Non-core app surfaces

#### Success Criteria

- No component references legacy or component-based color semantics
- Dark mode implemented entirely through semantic reassignment
- Color tokens are fully normalized, standardized, and mandatory
- No raw color values (hex, rgba) remain in production

#### Key Design Responsibilities

- ~~Update Token Northstar visuals with final color adjustments~~ ✅
- ~~Introduce new primitive or semantic color tokens only when strictly necessary~~ ✅
- [ ] Expand primitive color ramps to 10 shades per color with bell-curve contrast distribution (in progress)
- [ ] Finalize newest semantic token framework (working draft exists)
- [ ] Update Figma Variables with expanded primitive ramps and new semantic layer
- [ ] Complete component-level color token remapping
- [ ] Maintain and update the color token mapping database

#### Key Engineering Responsibilities

- [ ] Ensure all Fabric components consume the new role-based color tokens
- [ ] Replace all raw color values and legacy references
- [ ] Implement and validate dark mode via semantic reassignment
- [ ] Perform regression testing across light and dark themes

#### Exit Criteria

Phase 3 is complete when the legacy color system is fully deprecated, dark mode ships without component rewrites, and the role-based color framework is the only supported system in production.

---

## Functional Requirements

- Each phase must fully ship and stabilize before the next phase begins
- Tokens introduced or modified in one phase must not regress in later phases
- Engineering deliverables must be propagated and versioned
- Migration guidance must accompany each phase

---

## Non-Functional Requirements

- Avoid breaking changes where possible
- No runtime performance impact
- Token changes are auditable and reversible
- The system supports future themes and brand evolution

---

## Workstreams & Ownership

### Token Definition & Validation
**Owner:** DS Design | **Support:** DS Engineering

Define and validate tokens for each phase using real Apollo surfaces.

### Engineering Implementation & Propagation
**Owner:** DS Engineering | **Support:** DS Design

Implement tokens in the GitHub package, standardize their usage, and ship to production per phase.

### Migration, Adoption & Governance
**Owner:** Shared

Ensure complete adoption per phase, provide migration guidance, and enable governance rules before proceeding.

---

## Risks & Mitigations

**Risk:** Dependencies on non–Design Systems engineering slow phase completion.
**Mitigation:** Phase-gated standardization, early dependency surfacing, and leadership escalation as needed.

> Partial completion of a phase is not acceptable.

---

## Timeline

Phases will be sequenced and completed by **August 1, 2026**, with buffer time reserved for validation and rollout ahead of the **September 30, 2026** ApolloNEXT product marketing event.

---

## Why This Matters

By sequencing Typography, Spacing, and Color, Tokens Northstar becomes a **repeatable, enforceable system upgrade**, not a one-time refactor. This phased approach reduces risk, accelerates adoption, and establishes a durable foundation for Apollo's UI moving forward.
