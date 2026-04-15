import React from 'react';

//Extra credit
function ResetButton({ onReset }) {
  return (
    <button onClick={onReset} style={{ marginTop: '20px', padding: '10px 20px' }}>
      Reset Game
    </button>
  );
}

export default ResetButton;