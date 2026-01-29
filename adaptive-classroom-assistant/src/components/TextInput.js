import React from 'react';

function TextInput({ lectureText, setLectureText, mode }) {
  const handleTextChange = (e) => {
    setLectureText(e.target.value);
  };

  return (
    <div className="text-input">
      <label htmlFor="lecture-textarea">
        Paste Lecture Text:
      </label>
      <textarea
        id="lecture-textarea"
        value={lectureText}
        onChange={handleTextChange}
        placeholder="Paste your lecture text here..."
        aria-label="Lecture text input"
      />
    </div>
  );
}

export default TextInput;
