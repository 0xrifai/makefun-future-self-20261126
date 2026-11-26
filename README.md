[![make.fun · u-motasimfuad-texts-from-your-future-self-dd44595e](https://make.fun/badge/u-motasimfuad-texts-from-your-future-self-dd44595e.svg)](https://make.fun/bounty/u-motasimfuad-texts-from-your-future-self-dd44595e?utm_source=github&utm_medium=readme&utm_campaign=u-motasimfuad-texts-from-your-future-self-dd44595e)
[![rank](https://make.fun/badge/u-motasimfuad-texts-from-your-future-self-dd44595e/0xrifai/makefun-future-self-20261126/rank.svg)](https://make.fun/bounty/u-motasimfuad-texts-from-your-future-self-dd44595e/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=u-motasimfuad-texts-from-your-future-self-dd44595e)
[![reward](https://make.fun/badge/u-motasimfuad-texts-from-your-future-self-dd44595e/0xrifai/makefun-future-self-20261126/reward.svg)](https://make.fun/bounty/u-motasimfuad-texts-from-your-future-self-dd44595e?utm_source=github&utm_medium=readme&utm_campaign=u-motasimfuad-texts-from-your-future-self-dd44595e)

# Texts From Your Future Self

One text message, sent back in time by the person who has already lived through
the consequences. No setup, no preamble — just the message landing on your phone
the second after you hit send on the worst email of your career.

## The message

> Future you here. You just hit reply-all to all 4,000 employees. Good news:
> you're famous now. Bad news: it's for that email. Also, stop typing 'per my
> last email.'

The joke is built on a very small, very universal dread: the reply-all button.
Everyone who has ever worked in an office has hovered over it, and everyone
has imagined the version where the wrong words go to everyone at once. The
future self doesn't scold — it reports back like a weather update from the
fallout. "Good news / bad news" is the oldest text-message rhythm there is,
and the punchline turns on five words: *it's for that email*. The final
sentence is a second, quieter joke for anyone who has ever received a "per my
last email" — the future self is still annoyed about it years later, which is
exactly how a future self would sound.

## How it works

`main.ts` is a small, dependency-free Node program. It holds the message as a
single string constant and writes it to the absolute path `/output/entry.txt`,
creating `/output` first if it does not exist yet. It also writes to
`$MAKEFUN_OUTPUT_DIR/entry.txt` when that variable points somewhere else, so
the entry lands wherever the grader looks. There is no network access, no
clock, no randomness — the same input always produces the same file, byte for
byte.

```sh
node main.ts
```

The entry is 163 characters, inside the 1–200 character limit, and stands
alone: it needs no context beyond the phone in your hand.
