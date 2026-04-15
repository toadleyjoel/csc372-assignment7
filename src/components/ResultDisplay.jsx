import React from 'react';

function ResultDisplay({ result }) {
  if (!result) return null;
  
  return (
    <div className="result-display">
      <h2>{result === 'tie' ? "It's a Tie!" : `You ${result}!`}</h2>
    </div>
  );
}

export default ResultDisplay;