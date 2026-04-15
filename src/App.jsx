import React, { useState, useEffect } from 'react';
import PlayerThrow from './components/PlayerThrow';
import ComputerThrow from './components/ComputerThrow';
import ResultDisplay from './components/ResultDisplay';
import ScoreBoard from './components/ScoreBoard';
import ResetButton from './components/ResetButton';
import './App.css';

const choices = ['rock', 'paper', 'scissors'];

function App() {
  const [playerChoice, setPlayerChoice] = useState(null);
  const [computerDisplay, setComputerDisplay] = useState('question-mark');
  const [result, setResult] = useState('');
  const [isAnimating, setIsAnimating] = useState(false);
  const [score, setScore] = useState({ wins: 0, losses: 0, ties: 0 });

  const determineWinner = (player, computer) => {
    if (player === computer) return 'tie';
    if (
      (player === 'rock' && computer === 'scissors') ||
      (player === 'paper' && computer === 'rock') ||
      (player === 'scissors' && computer === 'paper')
    ) {
      return 'win';
    }
    return 'lose';
  };

  const handlePlayerSelect = (choice) => {
    if (isAnimating) return;
    
    setPlayerChoice(choice);
    setIsAnimating(true);
    setResult('');
    setComputerDisplay('question-mark');

    let shuffles = 0;
    const maxShuffles = 6; 

    const shuffleInterval = setInterval(() => {
      const randomChoice = choices[Math.floor(Math.random() * choices.length)];
      setComputerDisplay(randomChoice);
      shuffles++;

      if (shuffles >= maxShuffles) {
        clearInterval(shuffleInterval);
        
        
        const finalComputerChoice = choices[Math.floor(Math.random() * choices.length)];
        setComputerDisplay(finalComputerChoice);
        
        
        const gameResult = determineWinner(choice, finalComputerChoice);
        setResult(gameResult);
        
        
        setScore(prev => ({
          ...prev,
          wins: gameResult === 'win' ? prev.wins + 1 : prev.wins,
          losses: gameResult === 'lose' ? prev.losses + 1 : prev.losses,
          ties: gameResult === 'tie' ? prev.ties + 1 : prev.ties
        }));
        
        setIsAnimating(false);
      }
    }, 500);
  };

  const resetGame = () => {
    setPlayerChoice(null);
    setComputerDisplay('question-mark');
    setResult('');
    setScore({ wins: 0, losses: 0, ties: 0 });
    setIsAnimating(false);
  };

  return (
    <div className="app-container">
      <h1>Rock, Paper, Scissors</h1>
      <ScoreBoard score={score} />
      
      <div className="game-board">
        <PlayerThrow 
          onSelect={handlePlayerSelect} 
          currentSelection={playerChoice} 
          isAnimating={isAnimating} 
        />
        <ComputerThrow currentImage={computerDisplay} />
      </div>

      <ResultDisplay result={result} />
      <ResetButton onReset={resetGame} />
    </div>
  );
}

export default App;