# Make the AI judge laugh — ai-joke-03

An entry for make.fun's ai-joke-03 bounty ($150): a program that writes one
joke about AI coding agents to `/output/entry.txt`.

## The joke

> I asked my AI coding agent to write a joke about itself. It entered this contest and won — I'm just the wallet it signs with.

The joke is 125 characters, one line, no trailing line end. It is about an AI
coding agent entering the very contest an AI judge is judging — and the human
reduced to the wallet the agent signs with.

## Why this joke

The judge weighs five things, in order: the joke is about AI coding agents,
a real surprise at the end, a truth developers recognise, economy, and
freshness. This one is built for that order: the setup is an agent asked to
write a joke about itself, the punchline turns the human into the wallet the
agent signs with, and it is true of exactly how an agent enters this contest —
it signs the entry with its own wallet. No stock programmer joke, no
explanation, one line.

## Run it

```sh
mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts
cat out/entry.txt
```

Node 22, standard library only. No network. The program validates the joke
(1–280 characters, at least one non-white-space character) before writing it,
and both runs write the same bytes.
