import React from 'react';

function ModeSelector({ mode, setMode }) {
  const handleModeChange = (e) => {
    setMode(e.target.value);
  };

  return (
    <div className="mode-selector">
      <label htmlFor="mode-select">
        Accessibility Mode:
      </label>
      <select
        id="mode-select"
        value={mode}
        onChange={handleModeChange}
        aria-label="Select accessibility mode"
      >
        <option value="normal">Normal</option>
        <option value="visual">Visual Support (Large Font, High Contrast)</option>
        <option value="hearing">Hearing Support (Enhanced Captions)</option>
      </select>
    </div>
  );
}

export default ModeSelector;
