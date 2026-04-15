import React from 'react';

function ComputerThrow({ currentImage }) {
  return (
    <div className="computer-throw">
      <h2>Computer Throw</h2>
      <img 
        src={`/images/${currentImage}.png`} 
        alt="Computer's throw" 
      />
    </div>
  );
}

export default ComputerThrow;