import React from 'react';

const options = ['rock', 'paper', 'scissors'];

function PlayerThrow({ onSelect, currentSelection, isAnimating }) {
  return (
    <div className="player-throw">
      <h2>Your Throw</h2>
      <div className="options">
        {options.map((option) => (
          <img
            key={option}
            src={`/images/${option}.png`}
            alt={`Select ${option}`}
            tabIndex="0"
            className={`throw-option ${currentSelection === option ? 'selected' : ''}`}
            onClick={() => !isAnimating && onSelect(option)}
            onKeyDown={(e) => {
              if ((e.key === 'Enter' || e.key === ' ') && !isAnimating) {
                onSelect(option);
              }
            }}
          />
        ))}
      </div>
    </div>
  );
}

export default PlayerThrow;