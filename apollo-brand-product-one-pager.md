# Apollo Brand × Product: Where the Brand Lives

Apollo is both a **brand** and a **tool**. These are not in conflict — but they require different things from design, and knowing when to apply each is the whole game.

---

## The Core Position

Most of the product is a tool. Users are in it to work — searching, prospecting, sequencing, reporting. Brand expression in those contexts creates friction, not affinity.

There are a small number of moments in the product, however, where the brand should be visibly present: when a user is encountering Apollo for the first time, when they're being asked to upgrade, when they hit a meaningful milestone. These are the surfaces where illustrations, brand color, expressive type, and motion are appropriate.

**The guiding rule: limit brand expression to high-intent and transitional moments. Applying it broadly dilutes it everywhere.**

---

## Where Brand Shows Up

**Onboarding and first impressions**
The first time a user encounters Apollo or a major capability, brand assets are appropriate. This includes illustration, brand color, and transitional motion.

- Welcome screens and account setup steps
- Feature introduction modals when a user accesses a capability for the first time
- Guided setup flows (e.g., connecting a mailbox, importing a list)

**Conversion and upgrade moments**
When a user is being asked to spend money or upgrade their plan, the brand should be present and direct. Yellow CTAs, outcome-focused copy, and illustrations that show what unlocks — not just a generic paywall.

- Credit limit reached prompts
- Plan upgrade modals
- Seat expansion nudges
- Feature preview surfaces for locked capabilities

A yellow button alone is not a brand moment. The brand moment is the combination: the right surface, copy that's direct and outcome-focused, supporting visuals, and a result that actually delivers on the promise. Any one of those elements in isolation is just a design choice.

**Empty states with discovery potential**
First-use empty states — where a user has never created anything in a given area — are an opportunity to show what's possible. Brand illustration and copy are appropriate here. Repeat empty states (e.g., a filtered table returning no results) are not.

- Empty Sequences view on first login
- Empty Saved Searches before a user has set any up
- Empty Pipeline view for a new workspace

**Milestone moments**
When a user completes a meaningful action for the first time, a brief brand acknowledgment is appropriate. This should be a defined list — not applied broadly to routine actions.

- First sequence launched
- First contact exported
- First deal moved to a new stage
- Onboarding completion

---

## Where Brand Pulls Back

Data tables. Settings. Bulk action flows. Form fields. Tooltips. Repeated workflow steps.

In these contexts, the design system handles brand consistency at the token level — type, color, and spacing. That's sufficient. Illustrations, brand motion, and yellow accent color do not belong here.

- Data tables and list views
- Settings and account management
- Bulk action flows
- Form fields and inline editing
- Tooltips and inline help text
- Repeat empty states (filtered views, search returning no results)
- Error and system status messages

---

## Voice, Tone, and Copy

Copy follows the same brand-mode / tool-mode logic as visuals. The mistake is treating all product copy as neutral utility text — or conversely, injecting brand personality into surfaces where users just need to get something done.

**In brand moments**, copy should be direct and outcome-focused. Lead with what the user gets, not what the feature does. Use forward momentum language. Don't hedge.

- *"You've used your 60 mobile credits. Get 300/month on Pro."* — not *"You've reached your limit. Upgrade to access more credits."*
- *"Your first sequence is ready to send."* — not *"Sequence creation complete."*
- *"Unlock AI Research — get answers about any account in seconds."* — not *"AI Research is available on paid plans."*

**In tool mode**, copy should be minimal and literal. Label the action. Describe the state. Don't add personality where users are focused on a task.

- Button labels: verb-first, specific. *"Export contacts"* not *"Get your contacts"*
- Tooltips: one sentence, factual. *"Exports use credits. 1 export = 1 credit."*
- Confirmations: state what happened. *"Sequence paused."* not *"Got it! Your sequence has been paused."*

**Apollo's voice across all surfaces** stays consistent even as tone shifts. The voice is always confident, specific, and direct. What changes is the energy level.

| Attribute | What it means in practice |
|---|---|
| **Confident** | No hedging. Don't say "this might help" or "you may want to consider." |
| **Specific** | Use real numbers and real outcomes. "265M+ contacts" not "a huge database." |
| **Direct** | Say the thing. Don't bury the point in a subordinate clause. |
| **Not cold** | Functional doesn't mean robotic. Short, warm sentences work in both modes. |

One consistent failure mode: over-celebration of small actions. *"Woohoo! You did it!"* on routine steps reads as patronizing and burns goodwill that should be saved for moments that actually warrant it.

---

## The Design System as Brand Foundation

Regardless of where a surface sits on the brand-to-tool spectrum, the design system carries brand consistency through tokens. These need to be kept in exact parity between the Figma library and the codebase.

| Layer | Role |
|---|---|
| **Typography** | Fixed scale and weights — no one-off sizes or font choices outside the system |
| **Color** | Semantic tokens only — every color has a defined use case |
| **Spacing** | 4px base scale applied consistently — no arbitrary values |
| **Iconography** | Single icon library, single stroke weight — no mixing sources |
| **Motion** | Defined duration and easing tokens — fast and functional in tool mode, expressive only in brand moments |
| **Illustration** | A managed, finite set — used in approved brand-moment surfaces only, never stock |

---

## The Test

When evaluating whether brand expression belongs on a surface, ask:

> *If we removed this — the illustration, the color accent, the animation — would the surface feel flat and generic? Or would it feel cleaner?*

If removing it makes the design cleaner, it doesn't belong. If removing it makes the surface feel like it could be any product, it's doing its job.
