<!--
Source: https://platform.claude.com/docs/en/build-with-claude/prompt-engineering/prompting-claude-sonnet-5 (section "Design and frontend defaults")
Retrieved: 2026-10-17 via WebFetch. Excerpt; long example prompt shortened (marked [...]). Not part of the published site.
-->

## Design and frontend defaults

Claude Sonnet 5 may settle into a consistent default visual style on open-ended frontend and design briefs. A default house style can read well for some briefs but feel off for dashboards, dev tools, fintech, healthcare, or enterprise apps.

Generic instructions ("don't use that color," "make it clean and minimal") tend to shift the model to a different fixed palette rather than producing variety. Two approaches work reliably:

**1. Specify a concrete alternative.** The model follows explicit specs precisely:

```text
Design a desktop landing page for a supplement brand called AEFRM.

The visual direction should come from a cold monochrome atmosphere using pale silver-gray tones [...]
Use 4px corner radius consistently across cards, buttons, inputs, and media frames. [...]
Buttons should be flat and precise, with subtle hover changes using transition: all 160ms ease out [...]
Color palette should stay within this range:
#E9ECEC, #C9D2D4, #8C9A9E, #44545B, #11171B.
```

**2. Have the model propose options before building.** This breaks the default and gives users control. [...] Example prompt:

```text
Before building, propose 4 distinct visual directions tailored to this brief (each as: bg hex / accent hex / typeface, plus a one-line rationale). Ask the user to pick one, then implement only that direction.
```

To steer away from generic patterns that users call the "AI slop" aesthetic, you can include a short directive in your system prompt. The frontend-design skill provides a fuller treatment, but this snippet works well alongside the preceding variety approaches:

```text
<frontend_aesthetics>
NEVER use generic AI-generated aesthetics like overused font families (Inter, Roboto, Arial, system fonts), cliched color schemes (particularly purple gradients on white or dark backgrounds), predictable layouts and component patterns, and cookie-cutter design that lacks context-specific character. Use unique fonts, cohesive colors and themes, and animations for effects and micro-interactions.
</frontend_aesthetics>
```
