// Import StyleSheet and View Components
import { StyleSheet, View } from "react-native";

// Create Row reusable component that arranges its children horizontally using flexDirection
const Row = ({ children }) => {
  return <View style={styles.container}>{children}</View>;
};

// create styles of Row
const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
  },
});

export default Row;