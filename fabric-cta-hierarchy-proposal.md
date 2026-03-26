# Fabric · CTA Hierarchy Proposal
*For review with product design leads · March 2026*

---

## The Decision

The primary question is whether Apollo's primary action should remain brand-signaled (yellow) or shift to a neutral system hierarchy (black primary, gray secondary, etc.). This affects CTA hierarchy and the overall interaction model across product and web — not just a single button color.

Before scoping additional experiments, Fabric recommends aligning on the intended hierarchy model. The proposal below defines that model and identifies the three surface contexts where it should be validated first.

---

## Proposed CTA Hierarchy

| Variant | Treatment | Role |
|---|---|---|
| **Brand** | Yellow fill · Black label · Asterisk icon | Brand expression — onboarding, marketing-adjacent surfaces |
| **Primary** | Dark fill · White label | The single dominant action per view |
| **Secondary** | Subtle gray fill · Gray label | Supporting action, typically paired with Primary |
| **Tertiary** | No fill · No border · Label only | Low-priority or inline actions |
| **Destructive Primary** | Pink fill · Red label · Red border | High-visibility irreversible action |
| **Destructive Secondary** | No fill · Red label only | Lower-visibility destructive action in dense or inline contexts |
| **AI Primary** | Lavender fill · Violet label · Sparkle icon · Violet border | AI-invoked action as the featured offering on a surface |
| **AI Secondary** | No fill · Violet label · Sparkle icon | AI-invoked action in a supporting or inline context |

**Core principle:** Visual weight communicates priority. Primary earns its dominance because everything else is quieter — not because it shouts louder.

Black replaces yellow as the primary interactive color because it achieves reliable contrast without semantic ambiguity. Yellow is retained in the system as the Brand variant — its role becomes more intentional, not less present.

---

## Hierarchy in Context

The following three surfaces represent the key validation points. Each should be reviewed with real screen designs in both light and dark mode to confirm the hierarchy reads clearly before experiments are scoped.

### Onboarding

High-stakes moment where brand expression is appropriate. The Brand (yellow) button may appear here alongside a black Primary — the hierarchy between them needs to be clearly resolved so users aren't choosing between two dominant signals.

| Light Mode | Dark Mode |
|---|---|
| *[ Insert screen ]* | *[ Insert screen ]* |

### Table Actions

Dense surface with repetitive controls. Primary and secondary CTAs must be scannable at speed — this is where the black/gray weight differential pays off most visibly. Tertiary ghost buttons should dominate here.

| Light Mode | Dark Mode |
|---|---|
| *[ Insert screen ]* | *[ Insert screen ]* |

### Upgrade Prompt

Conversion moment. Likely to combine Brand expression with a clear Primary CTA. The risk here is competing dominance — this surface needs a single visual entry point. Also a strong candidate for A/B experiment.

| Light Mode | Dark Mode |
|---|---|
| *[ Insert screen ]* | *[ Insert screen ]* |

---

## Dark Mode Considerations

CTA color will behave differently across themes. Key questions to validate:

- Does black Primary maintain sufficient dominance on a dark surface, or does it need a light/white inversion?
- Does Brand yellow remain distinguishable from semantic warning colors in dark mode?
- Does the Secondary button's subtle gray fill remain legible against dark backgrounds?

These are open questions. The goal of this review is to surface them before committing to experiment design.

---

## Suggested Next Step

Review this hierarchy with product design leads. For each of the three surfaces above, drop in real screens and assess whether the proposed weight model reads clearly in both light and dark mode. Once aligned, determine which surface is the strongest candidate for the next experiment.

---

*Fabric Design System · fabric-cta-hierarchy-proposal · March 2026*
