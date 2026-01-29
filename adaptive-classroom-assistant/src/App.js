import React, { useState, useEffect } from "react";
import "./App.css";
import ModeSelector from "./components/ModeSelector";
import TextInput from "./components/TextInput";
import Controls from "./components/Controls";
import OutputPanel from "./components/OutputPanel";

function App() {
  const [lectureText, setLectureText] = useState("");
  const [mode, setMode] = useState("normal");
  const [summary, setSummary] = useState("");
  const [isReading, setIsReading] = useState(false);
  const [captions, setCaptions] = useState("");

  useEffect(() => {
    return () => {
      window.speechSynthesis.cancel();
    };
  }, []);

  const handleReadAloud = () => {
    if (!lectureText.trim()) {
      alert("Please enter some text first");
      return;
    }

    window.speechSynthesis.cancel();

    const utterance = new SpeechSynthesisUtterance(lectureText);
    utterance.rate = mode === "hearing" ? 0.9 : 1;
    utterance.pitch = 1;
    utterance.volume = 1;

    utterance.onstart = () => {
      setIsReading(true);
      setCaptions(lectureText);
    };

    utterance.onend = () => {
      setIsReading(false);
    };

    utterance.onerror = () => {
      setIsReading(false);
      alert("Speech synthesis error occurred");
    };

    window.speechSynthesis.speak(utterance);
  };

  const handleStopReading = () => {
    window.speechSynthesis.cancel();
    setIsReading(false);
    setCaptions("");
  };

  const handleGenerateSummary = () => {
    if (!lectureText.trim()) {
      alert("Please enter some text first");
      return;
    }

    // Mock summary generation
    const sentences = lectureText
      .split(/[.!?]+/)
      .filter((s) => s.trim().length > 0);
    const numSentences = Math.min(3, Math.ceil(sentences.length * 0.3));
    const mockSummary = sentences.slice(0, numSentences).join(". ") + ".";

    setSummary(mockSummary);
  };

  return (
    <div className={`App ${mode}`}>
      <header className="App-header">
        <h1>Adaptive Classroom Assistant</h1>
      </header>

      <main className="App-main">
        <ModeSelector mode={mode} setMode={setMode} />

        <TextInput
          lectureText={lectureText}
          setLectureText={setLectureText}
          mode={mode}
        />

        <Controls
          onReadAloud={handleReadAloud}
          onStopReading={handleStopReading}
          onGenerateSummary={handleGenerateSummary}
          isReading={isReading}
          mode={mode}
        />

        <OutputPanel summary={summary} captions={captions} mode={mode} />
      </main>
    </div>
  );
}

export default App;
