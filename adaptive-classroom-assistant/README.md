# Adaptive Classroom Assistant

An accessible React application designed to support diverse learning needs through adaptive interfaces and assistive features.

## Features

- **Text Input**: Paste lecture text for processing
- **Three Accessibility Modes**:
  - **Normal**: Standard interface
  - **Visual Support**: Large fonts, high contrast (black background, white text)
  - **Hearing Support**: Enhanced caption styling
- **Read Aloud**: Browser-based text-to-speech using SpeechSynthesis API
- **Live Captions**: Real-time text display while reading
- **Summary Generation**: Mock AI-powered summarization
- **Keyboard Accessible**: Full keyboard navigation support
- **Responsive Design**: Works on desktop and mobile devices

## Setup

1. Install dependencies:
```bash
npm install
```

2. Start the development server:
```bash
npm start
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser

## Usage

1. **Select Mode**: Choose your preferred accessibility mode from the dropdown
2. **Enter Text**: Paste lecture text into the textarea
3. **Read Aloud**: Click to have the browser read the text
4. **Stop Reading**: Stop the text-to-speech playback
5. **Generate Summary**: Create a brief summary of the content

## Accessibility Features

- **ARIA labels** on all interactive elements
- **Keyboard navigation** fully supported
- **Focus indicators** clearly visible
- **High contrast mode** for visual impairments
- **Enhanced captions** for hearing support
- **Responsive text sizing** based on mode

## Browser Compatibility

Requires a modern browser with SpeechSynthesis API support:
- Chrome/Edge (recommended)
- Firefox
- Safari

## Project Structure

```
src/
├── App.js                    # Main application component
├── App.css                   # Global styles and mode-specific styling
├── index.js                  # Entry point
└── components/
    ├── ModeSelector.js       # Accessibility mode selector
    ├── TextInput.js          # Lecture text input
    ├── Controls.js           # Action buttons
    └── OutputPanel.js        # Summary and captions display
```

## Technologies

- React 18
- React Hooks (useState, useEffect)
- Web Speech API (SpeechSynthesis)
- CSS3 for responsive design
- No external UI libraries

## License

MIT
