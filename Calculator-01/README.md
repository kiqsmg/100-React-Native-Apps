# React Native Calculator App

A fully functional calculator app built with React Native and Expo Go, featuring a clean UI and complete arithmetic operations.

<img width="20%" src="https://raw.githubusercontent.com/kiqsmg/100-React-Native-Apps/main/Calculator-01/fotos/calculator.jpeg">


## Youtube step by step video
- Components: https: [//youtu.be/2Ja7smKzHd4?si=l5BuH6KAvUbdHBnf](https://www.youtube.com/watch?v=2Ja7smKzHd4&t=340s)
- Calculator logic:
- Puting it all together: 



## 🌟 Features
 - **Basic Operations**: Addition, Subtraction, Multiplication, Division
- **Advanced Functions**: Percentage, Positive/Negative toggle, clear/reset
- **Memory Handling**: Stores previous values during operations
- **Responsive Design**: Adapts to different screen sizes
- **Clean UI**: Dark theme with large, readable display
- **Expression Tracking**: Shows full calculation expression



## 🛠️ Tech Stack
- **Frontend**: React Native
- **Development**: Expo Go
- **State Management**: Component-level state
- **Styling**: React Native StyleSheet



## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/kiqsmg/100-React-Native-Apps.git

2. Navigate to the calculator project:
   ```bash
   cd Calculator-01

3. Install dependencies:
   ```bash
   npm install

4. Start the development server:
   ```bash
   expo start



# Project Structure

Calculator-01/
├── components/        # Reusable components
│   ├── Button.js     # Calculator buttons
│   └── Row.js        # Button row layout
├── util/             # Business logic
│   └── calculator.js # Calculation functions
├── App.js            # Main application
└── fotos/            # Screenshots



# Key Implementation Details
- State Management: Uses class component state to track
   - Current value
   - Previous value
   - Active operator
   - Calculation expression
- Core Logic: The calculator function handles:
  
  const calculator = (type, value, state) => {
  // Handles different operation types
  switch(type) {
    case "number": return handleNumber(value, state);
    case "operator": return handleOperator(value, state);
    // ... other cases
  }
}



# How to Use:

Press number buttons to input values
Select an operation (+, -, *, /)
View the expression as you build it
Press "=" to calculate the result
Use "AC" to clear all calculations



# Contributing:

Pull requests are welcome. For major changes, please open an issue first to discuss what you'd like to change.
