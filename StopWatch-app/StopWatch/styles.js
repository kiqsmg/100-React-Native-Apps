import { Dimensions, Platform, StyleSheet } from "react-native";

const screen = Dimensions.get("window");

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#07121B",
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
  },
  buttonRow: {
    flexDirection: "row",
    marginTop: 30,
    justifyContent: "space-around",
    width: "100%",
  },
  button: {
    borderWidth: 3,
    width: screen.width / 3,
    height: screen.width / 3,
    borderRadius: screen.width / 3,
    alignItems: "center",
    justifyContent: "center",
    marginHorizontal: 10,
  },
  startButton: {
    borderColor: "#89AAFF",
  },
  stopButton: {
    borderColor: "#FF851B",
  },
  secondaryButton: {
    borderColor: "#666",
    width: screen.width / 4,
    height: screen.width / 4,
    borderRadius: screen.width / 4,
  },
  buttonText: {
    fontSize: 20,
    fontWeight: "bold",
  },
  startButtonText: {
    color: "#89AAFF",
  },
  stopButtonText: {
    color: "#FF851B",
  },
  timerText: {
    color: "#fff",
    fontSize: 60,
    marginBottom: 30,
    fontFamily: Platform.OS === "ios" ? "Courier New" : "monospace",
  },
  picker: {
    flex: 1,
    maxWidth: 100,
    ...Platform.select({
      android: {
        color: "#fff",
        backgroundColor: "rgba(92, 92, 92, 0.206)",
      },
    }),
  },
  pickerItem: {
    color: "#fff",
    fontSize: 20,
    ...Platform.select({
      android: {
        marginLeft: 10,
        marginRight: 10,
      },
    }),
  },
  pickerContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 30,
  },
  lapContainer: {
    marginTop: 30,
    width: "100%",
  },
  lapText: {
    color: "#fff",
    fontSize: 16,
    padding: 5,
    borderBottomWidth: 1,
    borderBottomColor: "#333",
  },
});