# Project instructions for Claude

These rules apply to every Claude Code session in this repository.

## Required skills

This repo includes project skills in `.claude/skills/`. Use them every time their trigger applies. Invoke them with the Skill tool before you start the work, not after.

| Skill | Use it when | How |
|-------|-------------|-----|
| `hallmark` | Building or designing any new page, section, component or UI in this project | Run `/hallmark <prompt>`. For changes to an existing design, use `/hallmark redesign <path>` or `/hallmark audit <path>` |
| `security-audit` | Any security question, code review that touches auth, input handling, secrets or dependencies, and every full audit or pen-test request | Use guidance mode for focused questions. Use full audit mode only when the user asks for a full audit, a pen test or a report |

### Hallmark rules that always apply

Even when the full Hallmark flow is not running, follow its "Floor" (see `.claude/skills/hallmark/SKILL.md`) for any UI code you write here. In short:

- Colours and fonts go through `:root` tokens.
- No `transition: all`.
- Every control gets `:focus-visible`.
- Every animation gets a `prefers-reduced-motion` fallback.
- No invented metrics, testimonials or logos.
- No purple-to-blue gradients.

If Node is available, run `node .claude/skills/hallmark/scripts/sloplint.mjs <file> --render` before you hand back UI work.

### Security audit rules that always apply

- Inspect source read-only. Never probe deployed endpoints or external services.
- Report a finding only when it crosses a real trust boundary and has a concrete result. Give the smallest source fix for each one.

## Skill sources

The skills are vendored copies, MIT licensed (see the LICENSE file in each skill folder). To update one, copy its skill folder again from upstream:

- `hallmark`: https://github.com/Nutlope/hallmark (`skills/hallmark`, commit 4f6a46c)
- `security-audit`: https://github.com/cloudflare/security-audit-skill (`skills/security-audit`, commit c1c8a8c)
