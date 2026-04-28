# 🧠 AI-Powered Programming Challenges

Welcome to the **AI-Powered Programming Challenges** repository! This project is designed specifically for absolute beginners with zero prior experience in programming. Our goal is to help you learn how to program through a hands-on, "learning by doing" approach, powered by AI to ensure a gradual and sustainable learning path without burnout.

## 🚀 Overview

The program automatically generates weekly challenges that guide you from absolute beginner to advanced programming understanding. Each week, the AI generates:
1.  **A Lesson:** A markdown file (`readme.md`) explaining core concepts using real-life analogies and simple language.
2.  **A Challenge:** A Python file (`challenge.py`) containing the logical structure and thinking steps for you to implement.

The AI ensures that the progression is strictly sequential, never reusing topics or week numbers, and scaling difficulty appropriately from Easy to Hard.

## 🛠 How It Works

1.  **AI Orchestration:** The system uses an LLM to act as an expert tutor. It reviews the history of completed challenges (stored in `data/lists.txt`) to determine the next logical step in your journey.
2.  **Logic-First Learning:** We focus on logic, reasoning, and step-by-step thinking. The AI provides structured instructions in Python comments, and it's your job to translate that logic into code.
3.  **Automated Generation:** The project is configured with GitHub Actions to potentially automate these challenges or can be run locally.

## 🏁 Getting Started

### Prerequisites
- [Node.js](https://nodejs.org/) (v16 or higher recommended)
- [npm](https://www.npmjs.com/)

### Installation
1. Clone the repository:
   ```bash
   git clone https://github.com/mrepol742/challenge.git
   cd challenges
   ```
2. Install dependencies:
   ```bash
   npm install
   ```

### Usage
To generate the next weekly challenge:
```bash
npm start
```
This will:
1. Consult the AI for the next lesson.
2. Create a new directory (e.g., `week-2/`).
3. Generate the `readme.md` (Lesson) and `challenge.py` (The actual task).
4. Update `data/lists.txt` to track your progress.

## 🤝 Credits & Inspiration

This project is inspired by and credits the following repository:
- [mrepol742/challenge](https://github.com/mrepol742/challenge/)

### Special Thanks to the Programmers:
- **Melvin Jones Repol**
- **John Paul Caigas**
- **John Jeremy Antiguo**
- **Ronald Torrejos Limpiado**
- **Jay Patrick Cano**
- **John Roy Calimlim**
- **Genesis Fernandez**
- **Ian Devinagracia**
- **Jaime Agdon**
- **Rovie Francisco**

## 📜 License
This project is licensed under the ISC License.
