# Speech-to-Text Converter

A desktop application that converts spoken words into text using advanced speech recognition technology. Built with React for the frontend and Tauri for the native desktop experience, powered by the Deepgram API.

## Features

- **Real-time Audio Recording**: Capture audio from your microphone with a simple click.
- **Speech-to-Text Conversion**: Utilize Deepgram's Nova-2 model for accurate transcription.
- **User-Friendly Interface**: Clean and intuitive UI built with React.
- **Cross-Platform**: Runs on Windows, macOS, and Linux thanks to Tauri.
- **Fast Processing**: Quick transcription results displayed in a readable textarea.

## Folder Structure

```
text_to_speech_converter/
├── .gitignore
├── eslint.config.js
├── index.html
├── package-lock.json
├── package.json
├── vite.config.js
├── public/
│   └── vite.svg
├── src/
│   ├── App.css
│   ├── App.jsx
│   ├── index.css
│   ├── main.jsx
│   └── assets/
│       └── react.svg
└── src-tauri/
    ├── .gitignore
    ├── build.rs
    ├── Cargo.toml
    ├── tauri.conf.json
    ├── capabilities/
    │   └── default.json
    ├── icons/
    │   ├── 32x32.png
    │   ├── 128x128.png
    │   ├── 128x128@2x.png
    │   ├── icon.icns
    │   ├── icon.ico
    │   ├── icon.png
    │   ├── Square30x30Logo.png
    │   ├── Square44x44Logo.png
    │   ├── Square71x71Logo.png
    │   ├── Square89x89Logo.png
    │   ├── Square107x107Logo.png
    │   ├── Square142x142Logo.png
    │   ├── Square150x150Logo.png
    │   ├── Square284x284Logo.png
    │   ├── Square310x310Logo.png
    │   └── StoreLogo.png
    └── src/
        ├── lib.rs
        └── main.rs
```

## Prerequisites

Before running this application, ensure you have the following installed:

- **Node.js** (version 16 or higher) - [Download here](https://nodejs.org/)
- **Rust** (latest stable version) - [Install here](https://rustup.rs/)
- **Tauri CLI** - Install globally via npm: `npm install -g @tauri-apps/cli`
- **Deepgram API Key** - Sign up at [Deepgram](https://console.deepgram.com/) and get your API key

## Local Setup Guide

1. **Clone or Download the Repository**:
   ```
   git clone <repository-url>
   cd text_to_speech_converter
   ```

2. **Install Dependencies**:
   ```
   npm install
   ```

3. **Set Up Environment Variables**:
   Create a `.env` file in the root directory and add your Deepgram API key:
   ```
   VITE_DEEPGRAM_API_KEY=your_deepgram_api_key_here
   ```

4. **Install Tauri Dependencies** (if not already done):
   ```
   npm run tauri build -- --no-bundle
   ```

## How to Run Locally

1. **Start the Development Server**:
   ```
   npm run dev
   ```
   This starts the Vite development server.

2. **Run the Tauri Application**:
   Open a new terminal and run:
   ```
   npm run tauri dev
   ```
   This will launch the desktop application in development mode.

The application window will open, and you can start recording audio by clicking the "Start Recording" button.

## Building for Production

To build the application for distribution:

1. **Build the Frontend**:
   ```
   npm run build
   ```

2. **Build the Tauri Application**:
   ```
   npm run tauri build
   ```

The built application will be available in the `src-tauri/target/release/bundle/` directory.

## Usage

1. Click the "Start Recording" button to begin capturing audio from your microphone.
2. Speak clearly into your microphone.
3. Click "Stop Recording" to end the recording.
4. The transcribed text will appear in the textarea below.

## Troubleshooting

- **Microphone Access**: Ensure your browser has permission to access the microphone.
- **API Key Issues**: Verify your Deepgram API key is correctly set in the `.env` file.
- **Build Errors**: Make sure Rust and Tauri CLI are properly installed.

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is licensed under the MIT License.
