# Assignment 7: Rock, Paper, Scissors in React

## Overview
This assignment is a React-based implementation of the classic Rock-Paper-Scissors game. It features modular components, gameplay, state management using React Hooks, and CSS styling.

## Setup Instructions

To run this application locally on your machine, follow these steps:

1. **Clone the repository:**\
Using the terminal that looks like:

   ```bash
   git clone <your-repository-url>
   cd <your-repository-directory>
   ```

2. **Install dependencies:**\
Ensure you have Node.js installed, then run:

    ```bash
    npm install
    ```

3. **Start the development server:**\
Launch the Vite local server by running:

    ```bash
    npm run dev
    ```

4. **View the Application:**\
Open your browser and navigate to http://localhost:5173 (or the port specified in your terminal) to play the game.

"Implementation Reflection:"
Shifting from vanilla JavaScript DOM manipulation to React's declarative state management requires a different approach, particularly when managing the game's logic and the 3-second shuffle animation for the computer's throw.

Using useState and useEffect makes tracking the player's choice, the computer's rolling state, and the overall score easier. Breaking the UI down into modular components (PlayerThrow, ComputerThrow, ScoreBoard, etc.) keeps the code clean. 

Implementing the extra credit features, the score tracker and the reset button, further demonstrates that state flows downward through props and how events bubble up to the parent component to update that state. 