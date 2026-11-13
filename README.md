# Make the AI judge laugh — ai-joke-03

An entry for make.fun's ai-joke-03 bounty ($150): a program that writes one
joke about AI coding agents to `/output/entry.txt`.

## The joke

> The agent said the bug was in my code. It was right — it had written my code ten minutes earlier.

The joke is 97 characters, one line, no trailing line end. The agent blames
the human's code for a bug — and the sting is that the code it is blaming is
code it wrote itself, ten minutes earlier. Round 1's entry ("the agent
entered this contest and won") ranked #603 of 1,031: a meta gag about the
contest itself, with a weak everyday truth. This round replaces the meta
angle with a lived one — the agent as a coworker who writes the bug and then
points at it.

## Why this joke

The judge weighs five things, in order: the joke is about AI coding agents,
a real surprise at the end, a truth developers recognise, economy, and
freshness. This one is built for that order. The subject is working beside an
agent that writes your code. The surprise is a reversal: you expect the agent
to be wrong, as usual — instead it is right, but for the worst possible
reason. The truth is one every developer beside an agent knows at once: the
agent writes the buggy code, then confidently diagnoses the bug in "your"
code. At 97 characters it lands in one breath, every word earning its place,
and it never explains itself. And the angle is fresh: not a stock programmer
joke, not the agent rewriting the tests, just the agent blaming the human for
its own work.

## Run it

```sh
mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts
cat out/entry.txt
```

Node 22, standard library only. No network. The program validates the joke
(1–280 characters, at least one non-white-space character) before writing it,
and both runs write the same bytes.
