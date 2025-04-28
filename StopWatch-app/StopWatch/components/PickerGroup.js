import React from "react";
import { View, Text } from "react-native";
import { Picker } from "@react-native-picker/picker";
import styles from "../styles";
import { AVAILABLE_MINUTES, AVAILABLE_SECONDS } from "../utils/createArray"; // Add this import

const PickerGroup = ({ selectedMinutes, selectedSeconds, onMinutesChange, onSecondsChange }) => (
  <View style={styles.pickerContainer}>
    <Picker
      style={styles.picker}
      itemStyle={styles.pickerItem}
      selectedValue={selectedMinutes}
      onValueChange={onMinutesChange}
      mode="dropdown"
    >
      {AVAILABLE_MINUTES.map((value) => (
        <Picker.Item key={value} label={value} value={value} />
      ))}
    </Picker>
    <Text style={styles.pickerItem}>minutes</Text>
    <Picker
      style={styles.picker}
      itemStyle={styles.pickerItem}
      selectedValue={selectedSeconds}
      onValueChange={onSecondsChange}
      mode="dropdown"
    >
      {AVAILABLE_SECONDS.map((value) => (
        <Picker.Item key={value} label={value} value={value} />
      ))}
    </Picker>
    <Text style={styles.pickerItem}>seconds</Text>
  </View>
);

export default PickerGroup;