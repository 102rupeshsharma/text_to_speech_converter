import { useState, useRef } from "react";
import "./App.css";

const DEEPGRAM_API_KEY = import.meta.env.VITE_DEEPGRAM_API_KEY;

function App() {
  const [isRecording, setIsRecording] = useState(false);
  const [hasStarted, setHasStarted] = useState(false);
  const [text, setText] = useState("");

  const mediaRecorderRef = useRef(null);
  const audioChunksRef = useRef([]);

  const startRecording = async () => {
    const stream = await navigator.mediaDevices.getUserMedia({ audio: true });

    mediaRecorderRef.current = new MediaRecorder(stream);
    audioChunksRef.current = [];
    setText("");
    setHasStarted(true);

    mediaRecorderRef.current.ondataavailable = (event) => {
      audioChunksRef.current.push(event.data);
    };

    mediaRecorderRef.current.start();
    setIsRecording(true);
  };

  const stopRecording = async () => {
    mediaRecorderRef.current.onstop = async () => {
      const audioBlob = new Blob(audioChunksRef.current, {
        type: "audio/webm",
      });

      const response = await fetch(
        "https://api.deepgram.com/v1/listen?model=nova-2&language=en",
        {
          method: "POST",
          headers: {
            Authorization: `Token ${DEEPGRAM_API_KEY}`,
            "Content-Type": "audio/webm",
          },
          body: audioBlob,
        }
      );

      const data = await response.json();
      const transcript =
        data.results?.channels[0]?.alternatives[0]?.transcript;

      setText(transcript || "No speech detected");
    };

    mediaRecorderRef.current.stop();
    setIsRecording(false);
  };

  return (
    <div className="app">
      <h1>Speech to Text</h1>

      <button
        onClick={isRecording ? stopRecording : startRecording}
        className={isRecording ? "stop" : "start"}
      >
        {isRecording ? "Stop Recording" : "Start Recording"}
      </button>

      {/* Initial message */}
      {!hasStarted && !isRecording && !text && (
        <p className="processing">Press start to record your voice</p>
      )}

      {/* Recording animation */}
      {isRecording && (
        <div className="recording">
          <span className="dot"></span>
          <span>Recording...</span>
        </div>
      )}

      {/* Processing message */}
      {hasStarted && !isRecording && !text && (
        <p className="processing">We are processing your speech...</p>
      )}

      {/* Show textarea only when text exists */}
      {text && (
        <textarea
          value={text}
          readOnly
        />
      )}
    </div>
  );
}

export default App;
