import React from 'react';

//Extra credit
function ScoreBoard({ score }) {
  return (
    <div className="score-board">
      <h3>Score</h3>
      <p>Wins: {score.wins} | Losses: {score.losses} | Ties: {score.ties}</p>
    </div>
  );
}

export default ScoreBoard;