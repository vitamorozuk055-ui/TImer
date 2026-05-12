# Timer + Stopwatch Web App
<img width="1899" height="920" alt="image" src="https://github.com/user-attachments/assets/5ad654f0-1732-439c-8b2c-2cd6cc2edb60" />

A modern and responsive Timer + Stopwatch application built with HTML, CSS, and JavaScript.

This project includes:

- Countdown Timer
- Stopwatch
- Dynamic UI switching
- Responsive design
- Real-time time updates

The app automatically switches between a countdown timer and a stopwatch after the timer ends.

---

# Features

- Live countdown timer
- Stopwatch functionality
- Automatic mode switching
- Responsive UI
- Clean modern design
- Beginner-friendly JavaScript logic
- Real-time DOM updates

---

# Technologies Used

- HTML5
- CSS3
- JavaScript (Vanilla JS)

---

# Project Structure

```bash
project-folder/
│
├── index.html
├── style.css
├── script.js
└── README.md
```

---

# Preview

The application displays:

- A countdown timer with:
  - Hours
  - Minutes
  - Seconds

After the timer finishes, the app can switch into a stopwatch mode that tracks elapsed time.

---

# How It Works

## Countdown Timer

The countdown timer:

- Starts from a specified duration
- Updates every second
- Displays remaining time
- Shows a completion message when time reaches zero

Example:

```javascript
startCountdown(40);
```

This starts a 40-second countdown.

---

## Stopwatch

The stopwatch:

- Starts counting upward
- Tracks minutes and seconds
- Updates in real time

Example:

```javascript
startStopwatch();
```

---

# Installation

## 1. Clone the repository

```bash
git clone https://github.com/your-username/timer-stopwatch-app.git
```

---

## 2. Open the project folder

```bash
cd timer-stopwatch-app
```

---

## 3. Run the project

Open:

```bash
index.html
```

in your browser.

---

# Main JavaScript Concepts

This project demonstrates:

- `setInterval()`
- DOM manipulation
- Date and time calculations
- Dynamic text updates
- Conditional rendering
- CSS class toggling
- Functions and variables

---

# Important Functions

## Formatting Time

```javascript
const formatTime = (time) => String(time).padStart(2, 0);
```

Adds leading zeros to time values.

Example:

```javascript
5 → 05
```

---

## Countdown Logic

```javascript
countdownInterval = setInterval(() => {
    // timer logic
}, 1000);
```

Runs the timer every second.

---

## Stopwatch Logic

```javascript
const elapsedTime = currentTime - stopwatchStartTime;
```

Calculates how much time has passed since the stopwatch started.

---

# Responsive Design

The application works on:

- Desktop
- Tablet
- Mobile devices

---

# Learning Goals

This project helps beginners learn:

- JavaScript timers
- Real-time applications
- Time calculations
- DOM updates
- UI state management
- Frontend project structure

---

# Future Improvements

Possible upgrades:

- Pause button
- Reset button
- Custom timer input
- Sound notifications
- Dark mode
- Lap system
- Local storage support
- Circular progress animation

---

# Example Usage

```javascript
startCountdown(60);
```

Starts a 1-minute countdown.

```javascript
startStopwatch();
```

Starts the stopwatch.

---

# Screenshot Section

Add screenshots later:

```md
![App Preview](images/preview.png)
```

---

# License

This project is open-source and free to use for educational purposes.

---

# Author

Created by Victor

---

# Support

If you like this project, consider giving it a ⭐ on GitHub.
