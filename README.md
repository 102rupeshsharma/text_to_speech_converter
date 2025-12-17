# Voice to Text Desktop App

A simple desktop application that converts spoken audio into text using
microphone input. Built with React, Tauri, and Deepgram.

---

## Features

- Desktop application using Tauri
- Microphone audio recording
- Speech-to-text using Deepgram API
- Clear recording and processing states
- Clean and simple user interface

---

## Tech Stack

- React (Vite)
- Tauri
- JavaScript
- Deepgram Speech-to-Text API
- HTML & CSS

---

## How It Works

1. User clicks **Start Recording**
2. App captures microphone audio
3. User clicks **Stop Recording**
4. Audio is sent to Deepgram for transcription
5. Transcribed text is displayed on screen

This project uses **batch transcription** for stability and simplicity.

---

## Setup Instructions

### Prerequisites

- Node.js
- Rust (for Tauri)
- A Deepgram API key

---

### Installation

```bash
npm install
