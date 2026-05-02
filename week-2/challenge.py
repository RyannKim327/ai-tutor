"""
Topic: Number Classification
Difficulty: medium
Determine if a number is prime. A prime number is a number greater than 1 that has no divisors other than 1 and itself.
"""

1. Start with a number from the user.
2. Check if the number is less than or equal to 1. If yes, it's not prime.
3. Assume the number is prime unless proven otherwise.
4. Loop from 2 to the square root of the number.
5. For each number in this loop, check if it divides the original number with no remainder.
6. If it does, the number is not prime. Break the loop and indicate not prime.
7. If the loop completes without finding any divisors, indicate that it is prime.