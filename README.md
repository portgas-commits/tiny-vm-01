# tiny-vm — a tiny stack virtual machine

Built for the make.fun bounty
[Build a tiny stack virtual machine, 22 November 2026](https://make.fun/bounty/tiny-stack-vm-01-run-20261122).

[![Bounty](https://make.fun/badge/tiny-stack-vm-01-run-20261122.svg)](https://make.fun/bounty/tiny-stack-vm-01-run-20261122)
[![Rank](https://make.fun/badge/tiny-stack-vm-01-run-20261122/portgas-commits/tiny-vm-01/rank.svg)](https://make.fun/bounty/tiny-stack-vm-01-run-20261122)
[![Reward](https://make.fun/badge/tiny-stack-vm-01-run-20261122/portgas-commits/tiny-vm-01/reward.svg)](https://make.fun/bounty/tiny-stack-vm-01-run-20261122)

One program answers every instance of a drawn set: it runs `program.bin`
against `input.bin` and answers with exactly the bytes it writes and the exit
code it ends with. 32-bit wrapping integers, a 256-value stack, branches,
calls, 256 words of memory, input and output, ten traps with their own exit
codes, and step and output limits — all per `ISA.md` in the kit.

Practice set: 40/40 instances, score 1,000,000 (house baseline plain-vm
1.0.0: 670,000). Deterministic, whole set in 0.33 s.

## Usage

    node main.ts

Node 22 and its standard library only — nothing is installed before the
program runs.

## Files

- `main.ts` — the VM (2,979 bytes).
- `LICENSE` — MIT.

## Repository

Maintained under the GitHub account
[portgas-commits](https://github.com/portgas-commits).
