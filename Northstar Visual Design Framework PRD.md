# Northstar Visual Design Framework — PRD

---

**Status and last updated:** In Progress — March 17, 2026

**Target completion:** End of Q1 FY27

**Current Phase:** In Progress

**Asset type:** Guidance

**Tier:** 1 (Foundational)

**Ownership:** Fabric / Design Systems team (Owner + Accountable)

**Contribution path:** Proposed by Fabric team → async review window with XFN stakeholders → DRI sign-off → migration plan approval

**Async alignment window:** TBD → TBD — [link to async review thread TBD]

**DRIs:** [Fabric Design Lead], [Fabric PM]

**Primary stakeholders:** Fabric team, Product Designers at Apollo, Frontend Engineering

---

**Executive snapshot**

- **What this is:** A unified visual language for Apollo that establishes shared color, typography, spacing, elevation, and style tokens across all Apollo product surfaces.
- **Why now:**
  - Apollo is undergoing a brand and visual refresh that requires a coherent, system-level design foundation.
  - Significant design drift across product surfaces has created visual inconsistency and compounding maintenance debt.
- **Primary user impacted:** Internal designers and frontend engineers at Apollo building on Fabric.
- **Decision being asked:** Approve migration plan — sign off on the phased approach to rolling out the new visual language across Apollo's core product surfaces.
- **Decision owner:** [Fabric Design Lead / DRI]
- **Review deadline:** End of Q1 FY27
- **Non-goals:**
  - Mobile platform (iOS / Android) — out of scope for this phase.
  - Net-new component builds — this initiative is focused on visual language, not new component creation.
  - Third-party and embedded tools (e.g., Salesforce embeds) — excluded from migration scope.
  - Content, voice, and copy guidelines — not addressed by this framework.
- **Expected impact:**
  - Visual consistency across Apollo's core product, delivering a more cohesive user experience.
  - Stronger alignment between product UI and Apollo's evolving brand direction.
  - Less visual noise and perceived complexity for end users and the teams building for them.

---

### 🚦 Status updates & key decisions

| Date | Update |
| --- | --- |
| March 2026 | PRD drafted; migration plan approval requested from stakeholders. |
| TBD | Async alignment window opens. |
| TBD | DRI decision on migration approach. |

---

### 🎯 Problem & Opportunity

**Problem statement**

Apollo's product surfaces suffer from fragmented visual execution: tokens and styles are duplicated or applied inconsistently, the visual language no longer reflects Apollo's current brand direction, and there is no shared baseline that product teams can rely on. This creates compounding maintenance burden, design drift, and a disjointed user experience across the core product.

- [x] Is the problem clearly defined? ✅

**Customer**

Who is this work for?

- [x] Internal designers and/or engineers at Apollo (primary)
- [ ] Apollo end users (secondary — users will benefit from improved consistency, but they are not the direct customer of this deliverable)

**Primary adopters**

- Fabric / Design Systems team (owns and drives the framework)
- Product designers at Apollo (consuming and applying the framework in daily design work)
- Frontend engineers (implementing updated tokens, styles, and components)

**Impacted surfaces / teams**

| Surface / Team | Notes |
| --- | --- |
| Apollo core product (web app) | Primary surface in scope for this phase |
| All teams building on Fabric | Downstream adopters once migration guidance is published |

**Supporting data**

- Design drift observed across core product surfaces — inconsistent use of color, type scales, and spacing tokens.
- Token fragmentation: multiple one-off style values used in place of system tokens, leading to KTLO tickets and divergence from Figma library.
- Qualitative feedback from designers and engineers: lack of clear visual reference makes decision-making slower and increases review cycles.
- [Link to Figma audit / detachment rate data — TBD]
- [Link to KTLO ticket volume — TBD]

**Supporting research**

- [Link to design audit] (from [date TBD])
- [Link to designer/engineer feedback synthesis] (from [date TBD])

**OKR alignment**

[Map to FY27 Fabric objective — e.g., "Improve system adoption and reduce design drift" — and associated KR. TBD once FY27 OKRs are finalized.]

**Why now?**

Apollo is actively undergoing a brand and visual refresh, making this the right moment to establish a shared visual foundation before more product surfaces are built on the old system. Delaying increases the cost of migration and allows further fragmentation. Additionally, current design debt around button hierarchy and conflated component styles is causing meaningful slowdowns for product teams, making intervention timely and high-value.

**Assumptions & evidence quality**

- **Validated assumptions:**
  - Visual inconsistency exists across Apollo's core product surfaces.
  - The existing token set is fragmented and inconsistently applied.
  - Product teams are building on Fabric and will need to adopt the new visual language.
- **Unvalidated assumptions:**
  - Teams will adopt the new framework within the defined migration window with appropriate guidance.
  - The new visual language will not require significant rework of existing component logic — only visual style.
  - Button hierarchy changes will not produce a noticeable drop in conversion or user engagement metrics.
- **Data gaps:**
  - Full audit of token usage across all surfaces not yet complete.
  - Adoption timeline per product team not yet confirmed.
  - Baseline metrics for button performance and user sentiment not yet established for post-launch comparison.
- **What would change our mind:**
  - Evidence that migrating to the new visual language requires structural component changes beyond visual style (would expand scope significantly).
  - Negative signal from pilot team adoption — high friction, regressions, or unacceptable KTLO increase.

**🚫 Non-goals (out of scope)**

- Mobile platform (iOS / Android) visual design migration.
- Net-new component creation — only visual refresh of existing components.
- Third-party and embedded tool surfaces.
- Voice, tone, and content/copy guidelines.

**Current state (what exists today)**

- **What exists today:** Apollo's Fabric design system includes a component library and token set, but visual styles are inconsistently applied across surfaces. Multiple one-off values exist outside the token system. Button styles, in particular, have conflated hierarchy levels, making it difficult to express clear primary, secondary, and tertiary actions consistently.
- **Why it's insufficient:** The current state creates visual noise, complicates design decision-making, and means that design system consumers frequently detach from the library or override tokens — increasing KTLO burden and reducing the value of the system.
- **Related Fabric work:** Existing Fabric component library, current token set, and button component are all directly implicated. This work builds on and updates these existing assets.

---

### 🔗 Assets (links in one place)

- **Figma:** [URL — TBD]
  - **Status of design:** In progress
  - **Surfaces covered:** Apollo core product web app (primary), TBD
  - **States covered:**
    - [ ] Default
    - [ ] Hover
    - [ ] Focus
    - [ ] Empty
    - [ ] Loading
    - [ ] Error
    - [ ] Disabled
  - **Additional coverage:**
    - [ ] Responsive behavior
    - [ ] Dark mode / theme support
    - [ ] Full range of token or variable application
    - [ ] Full interaction model including edge cases
  - **Decisions & exploration:**
    - **Alternatives explored:** [TBD — links + brief rationale]
    - **Design principles applied:** [Apollo Design Principles](https://www.notion.so/Design-Principles-Planning-Document-Draft-2b5ab2b3b49680b594d9d06d84271db9?pvs=21), [Fabric UI Design System Principles](https://www.notion.so/Fabric-UI-Design-Principles-2e2ab2b3b49680f982edc2c95ec817c8?pvs=21)
    - **Key tradeoffs:** [TBD]
- **Specs / documentation:** [URL — TBD]
- **Research:** [URL — TBD]
- **Analytics / dashboards:** [URL — TBD]
- **Tickets / project tracking:** [URL — TBD]
- **Related PRDs / docs:** [URL — TBD]

---

### 📋 Plan, Milestones & Success Criteria

| # | Milestone / Deliverable | Driver | Timeline | Status |
| --- | --- | --- | --- | --- |
| 1 | Token definition & audit — audit existing tokens, define new visual token set (color, type, spacing, elevation) | Fabric DS team | TBD → TBD | 🟡 In progress |
| 2 | Figma library update — update Fabric Figma library to reflect new visual language | Fabric DS / Design | TBD → TBD | 🟡 In progress |
| 3 | Button hierarchy visual design — resolve conflated component styles; define clear primary / secondary / tertiary hierarchy; reduce design debt | Fabric DS / Design | TBD → TBD | 🟡 In progress |
| 4 | Component visual refresh — apply new visual language to existing Fabric components | Fabric DS / Eng | TBD → TBD | ⚪ Not started |
| 5 | Documentation & adoption guidance — write guidelines, migration docs, and rollout comms | Fabric DS team | TBD → TBD | ⚪ Not started |
| 6 | Pilot adoption & validation | Pilot team (TBD) | TBD → TBD | ⚪ Not started |
| 7 | Broad rollout | All product teams | TBD → End of Q1 FY27 | ⚪ Not started |

**Approach**

The Northstar Visual Design Framework will be built in phases: starting with a thorough audit of the existing token set and visual language, followed by a definition of the new unified visual language covering color, typography, spacing, and elevation. This new language will first be reflected in the Figma library and in targeted component work — particularly button hierarchy, where conflated styles are causing the most acute design debt. After internal validation, the framework will be applied broadly to existing components, documented with clear migration guidance, and rolled out to product teams via a pilot-first approach.

- [ ] Complete token audit and define new token architecture
- [ ] Update Figma library with new visual language
- [ ] Resolve button hierarchy: define and ship clear primary / secondary / tertiary visual treatment
- [ ] Apply new visual language across Fabric component library
- [ ] Write migration and documentation guidance for product teams
- [ ] Pilot with at least one product team; gather feedback and iterate
- [ ] Broad rollout with comms and support plan

**Impact metrics (org-level outcomes)**

- **Metric:** Reduction in design drift — measured by decrease in one-off token overrides and detachment rate in Figma
- **Link:** [Figma analytics dashboard — TBD]
- **Status:** Measurement not yet built

- **Metric:** No noticeable drop in button performance (click-through, task completion) or user sentiment post-migration
- **Link:** [Amplitude / product analytics dashboard — TBD]
- **Status:** Baseline measurement not yet in place

**Component health metrics (system-level)**

- **Metric:** Figma component detachment rate — target reduction post-launch
- **Link:** [Figma analytics — TBD]
- **Status:** Not yet built

- **Metric:** Token adoption % across core product surfaces
- **Link:** [TBD]
- **Status:** Not yet built

**Qualitative metrics**

- **Metric:** Designer and engineer satisfaction with the updated visual system (CSAT / survey)
- **Link:** [Research script / Sprig test — TBD]
- **Status:** Not yet set up

**Testing plan**

Validation will occur in two stages. First, internal review by the Fabric team and a small group of product designers to verify the Figma library and component updates meet quality and consistency standards. Second, a pilot with at least one product team applying the new visual language to a real surface — assessed over a defined period before broad rollout begins. Success signals include: no regression in component usability, positive qualitative feedback from adopters, and no measurable drop in button conversion metrics.

**Adoption readiness (release path)**

- [ ] Pilot team confirmed
- [ ] Migration guidance drafted
- [ ] Documentation plan + owner assigned
- [ ] Rollout comms plan (who, where, when)
- [ ] Deprecation plan for old token values and visual styles

---

### 🧩 Scalability & Composition

**Horizon fit**

- **H1 (core product):** This framework is designed first and foremost for H1. All token, component, and guidance work is scoped to Apollo's core product web surfaces.
- **H2 (scaling products):** The token architecture and visual language should be designed to extend to H2 contexts as Apollo scales. Token naming conventions and Figma variable structures should anticipate multi-surface needs.
- **H3 (exploratory):** Not in scope for this phase. H3 surfaces or experimental products are explicitly out of scope for the initial migration.

**Composition**

The Northstar Visual Design Framework sits at the foundation of the Fabric system. It does not replace components — it defines the visual properties (tokens, styles) that components are built on top of. All existing Fabric components depend on this layer and will be updated to reference the new token set. Teams building custom components or patterns should reference the new framework as their visual baseline.

**Guardrails**

- This framework defines the visual language — teams should not diverge from the established token set without going through the Fabric contribution process.
- Button hierarchy changes are intended to reduce, not expand, the number of visual variants. Teams should not introduce new button styles outside the defined hierarchy.
- Dark mode and responsive behavior should be considered in all new work referencing this framework, even if not fully implemented in phase one.

**Edge cases**

- **Handled:** Core interactive states (default, hover, focus, disabled) for updated components.
- **Open:** Edge cases in dense data surfaces, complex multi-step workflows, and surfaces with legacy one-off styles not yet audited.
- **Open:** How the framework applies in embedded or iframe contexts that cannot easily consume Fabric tokens.

---

### 🚀 Adoption Path

**Migration**

The migration path is TBD — a formal migration approach will be proposed and reviewed as part of the approval process for this PRD. Likely options include: opt-in pilot followed by gradual surface-by-surface rollout, or a defined migration window with Fabric team support. Migration complexity is acknowledged as a key risk and will be addressed in the migration plan document.

**Documentation**

Documentation needs to exist before broad adoption can begin. Required docs include:

- Visual language reference (color, type, spacing, elevation guidelines)
- Token mapping: old values → new values
- Button hierarchy guidance and usage rules
- Migration checklist for product teams
- Component-by-component update notes

Owner: Fabric DS team. Timeline: drafted before pilot begins; finalized before broad rollout.

**Engineering notes**

- The engineering token pipeline is a known dependency. The Fabric team must work with Engineering to ensure the new token set is correctly exported, consumed, and applied in code.
- Token naming changes may constitute breaking changes for teams that reference tokens directly — this must be flagged clearly in migration docs.
- No new engineering dependencies are anticipated at this time, but this will be validated during the token architecture phase.

**Contribution**

Teams can contribute to the Northstar Visual Design Framework via the standard [Fabric Contribution Model](https://www.notion.so/Fabric-Contribution-Model-9cc937bda043461cb70bcbe9cdc435cb?pvs=21). Proposed visual exceptions or extensions to the framework should go through the async alignment process and require DRI sign-off before being incorporated.

---

### 🤝 Stakeholders & Dependencies

| Name / Team | Role (RACI) | Notes |
| --- | --- | --- |
| Fabric / Design Systems team | Responsible | Day-to-day delivery of framework, tokens, components, and docs |
| Fabric Design Lead / DRI | Accountable | Final call on design decisions and migration plan sign-off |
| Brand / Marketing Design | Consulted | Must align on visual direction with broader brand refresh |
| Frontend Engineering | Consulted | Must validate token pipeline and implementation feasibility |
| Product Design (all teams) | Consulted | Input on adoption friction, edge cases, and migration readiness |
| Impacted surface owners | Consulted | 48-hour async alignment window for any surface-specific changes |
| Design Org / Leadership | Informed | Kept up to date on progress and rollout |
| Product Management | Informed | Awareness of timelines and surface-level impact |

**Dependencies**

| Dependency | Notes |
| --- | --- |
| Engineering token pipeline | Design tokens must be correctly exported and consumed in code before engineering adoption can begin. Owner: Frontend Engineering / Fabric Eng. Status: TBD. |
| Brand direction sign-off | Visual language must be validated against Apollo's ongoing brand refresh. Owner: Brand / Marketing Design. Status: TBD. |

---

### ⚠️ Risks & Open Questions

- **Risk 1: Cross-team alignment and adoption buy-in**
  - Impact: High
  - Mitigation plan: Engage product design leads and engineering leads early in the async alignment window. Run a pilot with a willing team to demonstrate value before broad rollout. Provide clear, low-friction migration guidance and Fabric team support during the transition.

- **Risk 2: Migration complexity**
  - Impact: High
  - Mitigation plan: Conduct a thorough surface audit before finalizing the migration plan. Provide token mapping documentation and automated migration tooling where possible. Prioritize surfaces with the highest KTLO burden and design drift for early migration.

- **Open question: Migration approach decision**
  - The formal migration approach (opt-in pilot, surface-by-surface, or defined migration window) has not yet been decided. This is the primary decision being requested in this PRD approval.

- **Open question: Baseline metrics for button performance**
  - No baseline has been established for button click-through or user sentiment pre-migration. This should be set up before the pilot begins to enable post-migration comparison.

---

### 📚 Appendix / References

- **Fabric Contribution Model:** [https://www.notion.so/Fabric-Contribution-Model-9cc937bda043461cb70bcbe9cdc435cb](https://www.notion.so/Fabric-Contribution-Model-9cc937bda043461cb70bcbe9cdc435cb?pvs=21)
- **Apollo Design Principles:** [https://www.notion.so/Design-Principles-Planning-Document-Draft-2b5ab2b3b49680b594d9d06d84271db9](https://www.notion.so/Design-Principles-Planning-Document-Draft-2b5ab2b3b49680b594d9d06d84271db9?pvs=21)
- **Fabric UI Design System Principles:** [https://www.notion.so/Fabric-UI-Design-Principles-2e2ab2b3b49680f982edc2c95ec817c8](https://www.notion.so/Fabric-UI-Design-Principles-2e2ab2b3b49680f982edc2c95ec817c8?pvs=21)
- **Supporting documents:** [Token audit, Figma library links, and component specs to be added as available]
- **Charts and visuals:** [Figma detachment rate charts, KTLO ticket volume — to be linked when available]
