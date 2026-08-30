# Week 4 Challenge: The Gatekeeper's Decision

* **Category**: Conditional Decisions & Multi-way Branching
* **Topic**: Basic Decision Making (If/Then Logic)
* **Difficulty**: easy
* **Estimated Completion Time**: 2–3 days

Welcome to Week 4! I am so incredibly proud of how far you have come. You have spent the last few weeks learning how to organize and sort information. Now, it is time to give your logic a "brain." This week, we are moving from simply sorting things to making **decisions**.

## The Concept: Making Choices

In programming, computers don't actually "think," but they are amazing at following rules. A rule usually looks like this: **"If [this thing is true], then [do this action]."**

We call this a **Condition**. A condition is simply a question that can only be answered with a "Yes" or a "No" (True or False). Based on that answer, the computer chooses which path to take.

## Real-Life Analogy: The Nightclub Bouncer

Imagine you are standing in line outside a popular club. There is a bouncer at the door. The bouncer has one very simple rule written on a piece of paper: 

> *"If the person is 18 years old or older, let them in. Otherwise, tell them they cannot enter."*

When you walk up, the bouncer asks for your age. 
1. If you say "20," the bouncer sees that 20 is greater than 18. The condition is **True**, so they open the door.
2. If you say "15," the bouncer sees that 15 is less than 18. The condition is **False**, so they shake their head and say "No."

The bouncer isn't being mean; they are simply following a logical branch!

## Why This Matters in Programming

Decisions are the heart of every app you use. 
- A banking app uses decisions: *"If the balance is high enough, allow the withdrawal; otherwise, deny it."*
- A video game uses decisions: *"If the player touches the lava, decrease health; otherwise, keep playing."*
- A thermostat uses decisions: *"If the room is too cold, turn on the heater; otherwise, stay off."*

## The Weekly Challenge: The Gatekeeper's Decision

Your mission is to design the logic for a digital gatekeeper. You need to create a system that evaluates a person's age and decides whether they are allowed to enter a special event.

**The Rules:**
1. You will receive an age as your starting information.
2. If the age is **18 or greater**, the outcome should be: "Access Granted!"
3. If the age is **less than 18**, the outcome should be: "Access Denied!"

## Thinking Process & Strategy

Before you start, don't think about typing. Think about the flow:
- **Input**: What piece of information are we looking at? (The age).
- **The Test**: What is the mathematical comparison we need to make? (Is age $\ge$ 18?).
- **The Split**: How many different paths can we take? (Path A for Yes, Path B for No).
- **Output**: What is the final result we want to see?

## Instructions for `challenge.py`

1. Open your `challenge.py` file.
2. Do **not** try to write actual code yet. 
3. Use **comments** (lines starting with `#`) to write out your step-by-step logical plan. 
4. Follow the structure provided in the `program_logic` section of this guide. Your goal is to turn the "Bouncer Analogy" into a perfectly ordered list of instructions.

**You've got this! This is the moment where your logic starts to come to life. Happy thinking!**