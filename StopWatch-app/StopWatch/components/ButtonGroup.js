import React from "react";
import { TouchableOpacity, Text } from "react-native";
import styles from "../styles";

const ButtonGroup = ({ 
  isRunning, 
  onStart, 
  onStop, 
  onReset, 
  onAddLap 
}) => (
  <View style={styles.buttonRow}>
    {isRunning ? (
      <>
        <TouchableOpacity
          onPress={onAddLap}
          style={[styles.button, styles.secondaryButton]}
        >
          <Text style={styles.buttonText}>Lap</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={onStop}
          style={[styles.button, styles.stopButton]}
        >
          <Text style={[styles.buttonText, styles.stopButtonText]}>Stop</Text>
        </TouchableOpacity>
      </>
    ) : (
      <>
        <TouchableOpacity
          onPress={onReset}
          style={[styles.button, styles.secondaryButton]}
        >
          <Text style={styles.buttonText}>Reset</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={onStart}
          style={[styles.button, styles.startButton]}
        >
          <Text style={[styles.buttonText, styles.startButtonText]}>Start</Text>
        </TouchableOpacity>
      </>
    )}
  </View>
);

export default ButtonGroup;