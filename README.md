# React + Vite

Application demo here: https://stackblitz.com/github/sabin-iliescu/react-rps?file=README.md

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

Key React concepts used in the project:

1. Functional Components

- App
- Game
- Choices
- Result
- Logs
  All are plain functions returning JSX.

2. JSX
   You’re using JSX syntax everywhere (<div>…</div>, <button>, fragments <>…</>).

3. Props

- Choices receives choices and playGame.
- Result receives playerChoice, computerChoice, result, score.
- Logs receives logs.

4. State with useState
   In Game: playerChoice, computerChoice, result, logs via useState.

5. Reducer with useReducer
   In Game: score managed by useReducer(reducer, initialScore),
   with actions "USER_WIN", "COMPUTER_WIN", "RESET".

6. Side Effects with useEffect
   In Game: An effect watches [playerChoice, computerChoice, result]
   to append a new log entry whenever a round finishes.

7. Event Handling

- Buttons in Choices use onClick={() => playGame(choice)}.
- “Play Again” button in Game calls resetGame.

8. Conditional Rendering

- In Result, each <p>/<h2> is shown only if its prop exists.
- In Game, the “Play Again” button and <Logs> are shown only when
  result or logs.length > 0.

9. List Rendering & Keys

- Logs maps over logs and uses key={index} on each <li>.

10. Component Composition & Unidirectional Data Flow

- <App> → <Game> → <Choices>, <Result>, <Logs>.
- State lives high in Game and flows down as props; actions flow up
  via callbacks (playGame, resetGame).

11. Strict Mode
    In main.jsx, React’s <StrictMode> wraps <App> for highlighting
    potential problems.

These patterns—functional components, hooks (useState, useReducer, useEffect),
props, and composition—form the core of modern React.
