import React from "react";
import { Text, Platform } from "react-native";
import styles from "../styles";

const TimeDisplay = ({ time }) => (
  <Text style={styles.timerText}>
    {formatTime(time)}
  </Text>
);

export default TimeDisplay;