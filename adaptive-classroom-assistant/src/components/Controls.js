import React from 'react';

function Controls({ onReadAloud, onStopReading, onGenerateSummary, isReading, mode }) {
  return (
    <div className="controls">
      <button
        className="read-aloud"
        onClick={onReadAloud}
        disabled={isReading}
        aria-label="Read text aloud"
      >
        {isReading ? 'Reading...' : 'Read Aloud'}
      </button>
      
      <button
        className="stop-reading"
        onClick={onStopReading}
        disabled={!isReading}
        aria-label="Stop reading"
      >
        Stop Reading
      </button>
      
      <button
        className="generate-summary"
        onClick={onGenerateSummary}
        aria-label="Generate summary"
      >
        Generate Summary
      </button>
    </div>
  );
}

export default Controls;
