// Import a series of components from React Native
// Dimensions ---> Alolow you to get the screen dimensions of the device (width and height)
// StyleSheet ---> Create styles in a performant and organized way (similar to CSS)
// Text ---> Displays text
// TouchbleOpacity ---> Wrapper for making views resppond to touches (like hover?) 

import { Dimensions, StyleSheet, Text, TouchableOpacity } from "react-native";
// Create a functional React Component (function taht accepts properties as input and returns JSX)
export default ({ onPress, text, size, theme }) => {
  const buttonStyles = [styles.button];
  const textStyles = [styles.text];

  // This reusable button adapts based on the size and theme props
  if (size === "double") {
    buttonStyles.push(styles.buttonDouble);
  }

  if (theme === "secondary") {
    buttonStyles.push(styles.buttonSecondary);
    textStyles.push(styles.textSecondary);
  } else if (theme === "accent") {
    buttonStyles.push(styles.buttonAccent);
  }

  return (
    <TouchableOpacity onPress={onPress} style={buttonStyles}>
      <Text style={textStyles}>{text}</Text>
    </TouchableOpacity>
  );
};

// set dimmenstion
// Fetches screen dimensions
const screen = Dimensions.get("window");
// Divides screen width into 4
const buttonWidth = screen.width / 4;

const styles = StyleSheet.create({
  button: {
    backgroundColor: "#333333",
    flex: 1,
    height: Math.floor(buttonWidth - 10),
    alignItems: "center",
    justifyContent: "center",
    borderRadius: Math.floor(buttonWidth),
    margin: 5,
  },
  text: {
    color: "#fff",
    fontSize: 24,
  },
  textSecondary: {
    color: "#060606",
  },
  buttonDouble: {
    width: screen.width / 2 - 10,
    flex: 0,
    alignItems: "flex-start",
    paddingLeft: 40,
  },
  buttonSecondary: {
    backgroundColor: "#a6a6a6",
  },
  buttonAccent: {
    backgroundColor: "#ffc107",
  },
});