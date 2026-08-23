# Week 3 Challenge: The Secret Code Breaker

* **Category**: Conditional Decisions & Multi-way Branching
* **Topic**: Basic Decision Making (Yes/No Logic)
* **Difficulty**: easy
* **Estimated Completion Time**: 2–4 days

## Welcome to Week 3!

Hello there, superstar! You have been doing an incredible job navigating the world of logic. You've already learned how to group things and sort them. This week, we are stepping up our game. We aren't just sorting things anymore; we are going to teach our logic how to **make a choice**. 

Welcome to the world of **Decision Making**!

## What is Decision Making?

In the world of logic, decision making is simply the ability to look at a piece of information and say: "If this is true, do one thing; otherwise, do something else."

It sounds simple, but this is the heartbeat of every smart device you own. Your phone makes decisions about whether to wake up when you touch it, and your thermostat makes decisions about whether to turn on the heat based on the temperature.

## The Real-Life Analogy: The Nightclub Bouncer

Imagine you are standing in line outside a very exclusive club. At the door, there is a bouncer. The bouncer has one simple rule: **"You must be 18 years or older to enter."**

As each person approaches, the bouncer performs a quick logical check:
1. **The Check**: "Is this person's age 18 or higher?"
2. **The 'Yes' Path**: If the answer is **Yes**, the bouncer says, "Welcome in!"
3. **The 'No' Path**: If the answer is **No**, the bouncer says, "Sorry, you cannot enter."

The bouncer doesn't guess; they follow a strict rule to produce a specific outcome based on the information provided.

## Why This Matters in Programming

Computers aren't actually "smart"—they are just incredibly fast at following rules. Without decision-making logic, a computer would just be a calculator that always does the same thing. By learning how to create "branches" (paths that a program can take), you allow your programs to react to different situations, handle errors, and interact with users in a meaningful way.

## The Weekly Challenge: The Security Gate

Your mission is to design the logic for an automated security gate at a high-security research lab. 

**The Scenario:**
All employees have a security clearance level represented by a number. To enter the "Vault Area," an employee must have a clearance level of **5 or higher**.

**Your Task:**
Create a logical plan that takes an employee's clearance level as input and decides whether the gate should **"Open"** or **"Stay Closed."**

**Expected Logic Flow:**
- If the number provided is 5, 6, 7, or any higher number $\rightarrow$ The gate **Opens**.
- If the number provided is 4, 3, 2, 1, or 0 $\rightarrow$ The gate **Stays Closed**.

## Thinking Process & Strategy

Before you write anything, grab a piece of paper and walk through these steps:
1. **Identify the Input**: What piece of information do we need to receive from the employee? (Their level).
2. **Identify the Threshold**: What is the magic number that separates "in" from "out"?
3. **Map the Paths**: If the number is exactly that magic number, what happens? What if it is higher? What if it is lower?
4. **Define the Outcomes**: What are the two exact messages the gate should display?

## Instructions for `challenge.py`

1. Open your `challenge.py` file.
2. Do **NOT** write any actual programming code (no symbols or special keywords).
3. Instead, use **Comments** (lines starting with `#`) to write out your step-by-step plan.
4. Use the `program_logic` structure provided in your assignment to guide your thinking.
5. Your goal is to write a "recipe" of logic so clear that even someone who doesn't know programming could follow it.

**You've got this! Take your time, think through the different numbers, and I'll see you at the finish line!**