# Week 5 Challenge: The Multi-Path Crossroads

* **Category**: Conditional Decisions & Multi-way Branching
* **Topic**: Multi-step Decision Making
* **Difficulty**: `medium`
* **Estimated Completion Time**: 2–4 days

Welcome back, explorer! You did an incredible job last week acting as the Gatekeeper. You learned how to make a single decision based on one rule. But life—and great software—is rarely that simple. Most of the time, one rule isn't enough to find the right answer. This week, we are leveling up! We are moving from simple "Yes/No" decisions to complex, multi-layered decision trees.

### The Concept: Layered Decisions
In our previous lessons, we looked at single conditions (e.g., "Is the light red?"). This week, we are introducing **Layered Decisions**. This is when you only ask a second question *after* the answer to the first question is known. 

Think of it like a series of filters. You don't check if someone is tall enough for a rollercoaster until you've first checked if they have a ticket! You only move to the next step if the previous step was successful.

### Real-Life Analogy: The Morning Routine
Imagine you are deciding what to wear in the morning. Your logic might look like this:
1. **First, look out the window.** Is it raining?
   - **If YES:** Check your closet. Do you have a raincoat?
     - **If you have a raincoat:** Wear the raincoat.
     - **If you DON'T have a raincoat:** Stay inside.
   - **If NO (it's not raining):** Check the temperature.
     - **If it's cold:** Wear a sweater.
     - **If it's warm:** Wear a t-shirt.

Notice how you didn't even bother checking the temperature if it was already raining! You only followed certain paths based on the results of the previous question.

### Why This Matters in Programming
Computers use this logic to handle complex workflows. When you log into an app, the computer doesn't just check if your password is correct; it also checks if your account is locked, if you have two-factor authentication enabled, and if you've tried too many times. These are "layers" of decisions that ensure the system works safely and intelligently.

### The Weekly Challenge: The Traveler's Guide
You are designing a logic system for a magical travel guide. The guide must tell a traveler which path to take based on three pieces of information:
1. **The Weather** (Sunny, Rainy, or Stormy)
2. **Energy Level** (High or Low)
3. **Supplies** (Do they have a 'Cloak' or 'Extra Food'?)

**Your Logic Requirements:**
* **Rule A:** If the weather is **Stormy**, the traveler *must* check their supplies. If they have a **Cloak**, they can take the "Secret Cave Path." If they do *not* have a cloak, they must "Stay at the Inn."
* **Rule B:** If the weather is **Rainy**, they should take the "Forest Path" if they have **Extra Food**, otherwise they should take the "Muddy Road."
* **Rule C:** If the weather is **Sunny**, look at their **Energy**. If it is **High**, they take the "Mountain Peak." If it is **Low**, they take the "Meadow Walk."

### Thinking Process & Strategy
Before you start writing, grab a piece of paper and draw a **Flowchart**. 
1. Start with a box for "Weather."
2. Draw three arrows coming out of it (Sunny, Rainy, Stormy).
3. From the "Stormy" arrow, draw a new question: "Has Cloak?"
4. From the "Sunny" arrow, draw a new question: "Energy Level?"

Visualizing the branches will prevent you from getting lost in the logic!

### Instructions for `challenge.py`
1. Open your `challenge.py` file.
2. Do **NOT** write any actual code. 
3. Use `#` to write out your logic as a series of step-by-step instructions (pseudocode).
4. Organize your steps clearly so that anyone could read them and follow the traveler's journey.

I am so proud of the progress you're making. You are no longer just following instructions; you are starting to think like a designer. Happy thinking!

**Keep pushing, you've got this!**