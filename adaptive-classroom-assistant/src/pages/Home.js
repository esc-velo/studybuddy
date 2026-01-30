import React from "react";
import ModeSelector from "../components/ModeSelector";
import TextInput from "../components/TextInput";
import Controls from "../components/Controls";
import OutputPanel from "../components/OutputPanel";

const Home = ({
  lectureText,
  setLectureText,
  mode,
  setMode,
  summary,
  captions,
  isReading,
  statusMessage,
  onReadAloud,
  onStopReading,
  onGenerateSummary,
}) => {
  return (
    <div className={`App ${mode}`}>
      {/* HEADER */}
      <header className="App-header">
        <h1>Adaptive Classroom Assistant</h1>
      </header>

      <main className="App-main">
        {/* PROBLEM STATE */}
        {!lectureText && (
          <div className="system-message">
            After-class doubts and accessibility barriers make learning harder.
            This assistant helps you understand concepts clearly and
            inclusively.
          </div>
        )}

        {/* MODE */}
        <ModeSelector mode={mode} setMode={setMode} />

        {/* MODE DESCRIPTION */}
        <div className="mode-description">
          {mode === "normal" && "Standard explanation mode enabled."}
          {mode === "visual" &&
            "High-contrast, slower-paced explanations enabled."}
          {mode === "hearing" &&
            "Speech-first explanations with live captions enabled."}
        </div>

        {/* INPUT */}
        <TextInput
          lectureText={lectureText}
          setLectureText={setLectureText}
          mode={mode}
        />

        {/* INPUT AWARENESS */}
        {lectureText && (
          <div className="system-message success">
            Topic received. Ready to explain and simplify.
          </div>
        )}

        {/* CONTROLS */}
        <Controls
          onReadAloud={onReadAloud}
          onStopReading={onStopReading}
          onGenerateSummary={onGenerateSummary}
          isReading={isReading}
          mode={mode}
        />

        {/* PROCESSING STATUS */}
        {statusMessage && (
          <div className="system-message processing">{statusMessage}</div>
        )}

        {/* OUTPUT */}
        <OutputPanel summary={summary} captions={captions} mode={mode} />

        {/* OUTPUT FRAMING */}
        {(summary || captions) && (
          <div className="system-message success">
            Clear, exam-relevant understanding generated.
          </div>
        )}
      </main>
    </div>
  );
};

export default Home;
