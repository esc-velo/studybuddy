import React from 'react';

function OutputPanel({ summary, captions, mode }) {
  return (
    <div className="output-panel">
      <div className="output-section">
        <h2>Summary</h2>
        <div className={`output-content ${!summary ? 'empty' : ''}`}>
          {summary || 'No summary generated yet. Click "Generate Summary" to create one.'}
        </div>
      </div>
      
      <div className="output-section captions">
        <h2>Live Captions</h2>
        <div className={`output-content ${!captions ? 'empty' : ''}`}>
          {captions || 'Captions will appear here when text is being read aloud.'}
        </div>
      </div>
    </div>
  );
}

export default OutputPanel;
