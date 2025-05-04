# React Native Stopwatch App

A fully functional Stopwatch and Countdown Timer app built with React Native and Expo Go, featuring precise time tracking, lap functionality, and a sleek dark UI.

<img width="20%" src="https://raw.githubusercontent.com/yourusername/your-repo/main/assets/stopwatch-screenshot.jpg">

## YouTube Tutorial Series
- Part 1: Building the Timer Logic - [Watch here](https://www.youtube.com/watch?v=example1)
- Part 2: Creating the UI Components - [Watch here](https://www.youtube.com/watch?v=example2)
- Part 3: Adding Advanced Features - [Watch here](https://www.youtube.com/watch?v=example3)

## 🌟 Features
- **Precise Time Tracking**: Accurate to milliseconds
- **Dual Functionality**: Stopwatch and Countdown Timer modes
- **Lap Timing**: Record and display multiple lap times
- **Customizable Countdown**: Set minutes and seconds
- **Alerts**: Vibration and sound notification when countdown completes
- **Responsive Design**: Works on various screen sizes
- **Dark Theme**: Easy-on-the-eyes interface

## 🛠️ Tech Stack
- **Frontend**: React Native
- **Development**: Expo Go
- **Audio**: Expo AV for sound notifications
- **Vibration**: React Native Vibration API
- **Styling**: React Native StyleSheet

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/react-native-stopwatch.git

2. Navigate to the project directory:
   ```bash
   cd react-native-stopwatch

3. Install dependencies:
   ```bash
   npm install

4. Start the development server:
   ```bash
   expo start

## Project Structure

stopwatch/
├── assets/            # Audio and image files
│   ├── tone.mp3      # Alert sound
│   └── screenshot.jpg
├── components/        # Reusable components
│   └── Timer.js      # Core timer logic
├── App.js            # Main application
└── styles.js         # Style definitions

## Key Implementation Details

### Timer Class
The custom Timer class provides precise time tracking:
```javascript
class Timer {
  constructor(callback) {
    this.startTime = 0;
    this.elapsed = 0;
    this.timer = null;
    this.callback = callback;
  }
  
  start() {
    this.startTime = Date.now() - this.elapsed;
    this.timer = setInterval(() => {
      this.elapsed = Date.now() - this.startTime;
      this.callback(this.elapsed);
    }, 10);
  }
  
  // ... other methods
}
