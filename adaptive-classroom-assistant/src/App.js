import React, { useState, useEffect } from "react";
import "./App.css";
import Home from "./pages/Home";

function App() {
  const [lectureText, setLectureText] = useState("");
  const [mode, setMode] = useState("normal");
  const [summary, setSummary] = useState("");
  const [isReading, setIsReading] = useState(false);
  const [captions, setCaptions] = useState("");
  const [statusMessage, setStatusMessage] = useState("");

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

    setStatusMessage("Processing lecture content for spoken explanation...");

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
      setStatusMessage("");
    };

    utterance.onerror = () => {
      setIsReading(false);
      setStatusMessage("");
      alert("Speech synthesis error occurred");
    };

    window.speechSynthesis.speak(utterance);
  };

  const handleStopReading = () => {
    window.speechSynthesis.cancel();
    setIsReading(false);
    setCaptions("");
    setStatusMessage("");
  };

  const handleGenerateSummary = () => {
    if (!lectureText.trim()) {
      alert("Please enter some text first");
      return;
    }

    setStatusMessage("Extracting key concepts and generating summary...");

    const sentences = lectureText
      .split(/[.!?]+/)
      .filter((s) => s.trim().length > 0);

    const numSentences = Math.min(3, Math.ceil(sentences.length * 0.3));
    const mockSummary = sentences.slice(0, numSentences).join(". ") + ".";

    setSummary(mockSummary);
    setStatusMessage("");
  };

  return (
    <Home
      lectureText={lectureText}
      setLectureText={setLectureText}
      mode={mode}
      setMode={setMode}
      summary={summary}
      captions={captions}
      isReading={isReading}
      statusMessage={statusMessage}
      onReadAloud={handleReadAloud}
      onStopReading={handleStopReading}
      onGenerateSummary={handleGenerateSummary}
    />
  );
}

export default App;
