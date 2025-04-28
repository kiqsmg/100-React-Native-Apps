import React from "react";
import { View, Text } from "react-native";
import styles from "../styles";
import { formatTime } from "../utils/formatTime";

const LapList = ({ laps }) => (
  <View style={styles.lapContainer}>
    {laps.map((lap, index) => (
      <Text key={index} style={styles.lapText}>
        Lap {laps.length - index}: {formatTime(lap)}
      </Text>
    ))}
  </View>
);

export default LapList;