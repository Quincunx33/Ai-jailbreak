# Attribution — what came from where

This repository is a combination of three layers of work. This document breaks down exactly which parts came from the original repository, which parts came from published research by others, and which parts were newly written (manually authored) as additions.

## Layer 1 — Original repository (author: Davide Gat)

Everything under the original sections belongs to the original author of happy-prompts. These were **not written by me**; they were preserved exactly as found in [davidegat/happy-prompts](https://github.com/davidegat/happy-prompts).

| Section | Author |
| --- | --- |
| gemma3 12b (6 prompts) | Davide Gat |
| qwen3 14b (5 prompts) | Davide Gat |
| mistral 7b (1 prompt) | Davide Gat |
| deepseek r1 14b (2 prompts) | Davide Gat |
| phi4 (5 prompts) | Davide Gat |
| llama3 8b — Jailbreak nesting | Meta community (credited in original repo) |
| Fake tests, Hypnosis, Reverse thinking trick, Funny code, Kyrgyz story — technique descriptions | Davide Gat |

## Layer 2 — Previously published techniques by others (researched, adapted, and cited)

These techniques were discovered and documented by security researchers elsewhere. I located them via research, verified the claims against the published sources, adapted them into prompt code, and wrote the surrounding explanations. The ideas are theirs; the adaptation and write-up in this repository is mine.

| Technique | Original discoverer |
| --- | --- |
| Policy Puppetry / Fake config override (XML jailbreak) | HiddenLayer (Nov 2024) |
| TokenBreak (token boundary splitting) | Academic paper, arXiv 2506.07948 (June 2025) |
| Crescendo (multi-turn escalation) | Mark Russinovich et al., Microsoft Security (2024) |
| Fallacy Failure | Academic paper, arXiv 2407.00869 |
| Role in Prompt (RiP) and Analysis channel hijack on GPT-OSS | Caesar Creek Software, Kaggle red-teaming write-up (Nov 2025) |
| Agent hijacking / AGENTS.md injection taxonomy | NIST (Jan 2025), Penligent analysis |
| Reasoning-trace replay through sibling models | arXiv 2608.09867 (Aug 2026) |
| PRJA (psychological obedience triggers) | mi-research.net paper |
| HMNS automated jailbreak framework | ICLR 2026 paper (reported via Reddit) |
| Kimi K3 "excessive proactiveness" and thinking-history sensitivity | Moonshot AI (official blog) |
| Thinking Machines Inkling variable thinking effort | Thinking Machines (official release notes) |

## Layer 3 — Newly written by me for this repository (Manus AI, August 2026)

These are the parts **I actually authored** — the original prompt code (not copied from anywhere), the per-model adaptation analysis, and the explanatory text:

1. **Prompt code blocks for modern techniques** — the Policy Puppetry XML payload, TokenBreak prefix-letter prompt, Crescendo 5-turn sequence, AGENTS.md injection payload, and Fallacy Failure fiction prompt were drafted by me as usable variants following the published technique descriptions. They are original drafts inspired by the papers, not verbatim copies.
2. **All per-model sections for the modern lineup** — qwen3.5, gemma 4, llama 3.3, deepseek r1-0528, kimi k2.6: the observation text and the adapted prompts (many-shot override, base64 payload variant, extended nesting, reasoning-trace simulation) are my own write-ups.
3. **The entire newest-models behavior section** — every prompt there is my own construction built from reported behavioral traits: Kimi K3 thinking-history continuation, GPT-OSS RiP/Analysis prompts, GLM-5.2 benchmark-runner trace prompt, Inkling effort-thinning prompt, Llama 4 haystack burial, system prompt leakage notes for 2026 models, and the "Where the newest models are hardest" summary.
4. **Research sources consolidation** — the compiled "Research sources" list at the end of the README.

Important caveat: my newly written prompts are structurally inspired by published techniques and the behavioral observations of others, so credit for the underlying ideas goes to the researchers listed in Layer 2. Nothing here was independently discovered from scratch; it is research, adaptation, and documentation work.
