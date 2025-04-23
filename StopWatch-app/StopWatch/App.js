// Import React, Components and all the react native components that will be used
import React, { Component } from "react";
import {
  StyleSheet,
  View,
  Text,
  Dimensions,
  StatusBar,
  TouchableOpacity,
  Platform,
  Vibration
} from "react-native";
import { Picker } from "@react-native-picker/picker";
import { Audio } from 'expo-av';

const screen = Dimensions.get("window");

// Improved timer accuracy using Date object
class Timer {
  constructor(callback) {
    this.startTime = 0;
    this.endTime = 0;
    this.elapsed = 0;
    this.timer = null;
    this.callback = callback;
  }

  async playSound() {
    const { sound } = await Audio.Sound.createAsync(
      require('./assets/tone/tone.mp3') // ajuste o caminho conforme necessário
    );
    await sound.playAsync();
  }

  start() {
    this.startTime = Date.now() - this.elapsed;
    this.timer = setInterval(() => {
      this.elapsed = Date.now() - this.startTime;
      this.callback(this.elapsed);
    }, 10);
  }

  startCountdown(duration) {
    this.startTime = Date.now();
    this.endTime = this.startTime + duration;
    this.timer = setInterval(() => {
      const remaining = this.endTime - Date.now();
      if (remaining <= 0) {
        clearInterval(this.timer);
        this.callback(0);
        Vibration.vibrate(); // Vibração ao fim do tempo
        this.playSound();
      } else {
        this.callback(remaining);
      }
    }, 10);
  }

  stop() {
    clearInterval(this.timer);
  }

  reset() {
    this.elapsed = 0;
  }
}

const formatTime = (time) => {
  const date = new Date(time);
  const hours = date.getUTCHours().toString().padStart(2, '0');
  const minutes = date.getUTCMinutes().toString().padStart(2, '0');
  const seconds = date.getUTCSeconds().toString().padStart(2, '0');
  const milliseconds = Math.floor(date.getUTCMilliseconds() / 10).toString().padStart(2, '0');

  return hours !== '00'
    ? `${hours}:${minutes}:${seconds}.${milliseconds}`
    : `${minutes}:${seconds}.${milliseconds}`;
};

const createArray = (length) => {
  return Array.from({ length }, (_, i) => i.toString());
};

const AVAILABLE_MINUTES = createArray(60);
const AVAILABLE_SECONDS = createArray(60);

export default class App extends Component {
  state = {
    elapsedTime: 0,
    isRunning: false,
    selectedMinutes: "0",
    selectedSeconds: "0",
    laps: []
  };

  timer = new Timer((elapsed) => {
    this.setState({ elapsedTime: elapsed });
  });

  componentWillUnmount() {
    this.timer.stop();
  }

  start = () => {
    const { selectedMinutes, selectedSeconds } = this.state;
    const totalDuration =
      parseInt(selectedMinutes) * 60 * 1000 +
      parseInt(selectedSeconds) * 1000;

    if (totalDuration > 0) {
      this.timer.startCountdown(totalDuration);
    } else {
      this.timer.start();
    }
    this.setState({ isRunning: true });
  };

  stop = () => {
    this.timer.stop();
    this.setState({ isRunning: false });
  };

  reset = () => {
    this.timer.stop();
    this.timer.reset();
    this.setState({
      elapsedTime: 0,
      isRunning: false,
      laps: []
    });
  };

  addLap = () => {
    this.setState(prevState => ({
      laps: [prevState.elapsedTime, ...prevState.laps]
    }));
  };

  renderPickers = () => (
    <View style={styles.pickerContainer}>
      <Picker
        style={styles.picker}
        itemStyle={styles.pickerItem}
        selectedValue={this.state.selectedMinutes}
        onValueChange={(itemValue) => {
          this.setState({ selectedMinutes: itemValue });
        }}
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
        selectedValue={this.state.selectedSeconds}
        onValueChange={(itemValue) => {
          this.setState({ selectedSeconds: itemValue });
        }}
        mode="dropdown"
      >
        {AVAILABLE_SECONDS.map((value) => (
          <Picker.Item key={value} label={value} value={value} />
        ))}
      </Picker>
      <Text style={styles.pickerItem}>seconds</Text>
    </View>
  );

  render() {
    const { isRunning, elapsedTime, laps } = this.state;

    return (
      <View style={styles.container}>
        <StatusBar barStyle="light-content" />
        <Text style={styles.timerText}>{formatTime(elapsedTime)}</Text>

        {!isRunning && this.renderPickers()}

        <View style={styles.buttonRow}>
          {isRunning ? (
            <>
              <TouchableOpacity
                onPress={this.addLap}
                style={[styles.button, styles.secondaryButton]}
              >
                <Text style={styles.buttonText}>Lap</Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={this.stop}
                style={[styles.button, styles.stopButton]}
              >
                <Text style={[styles.buttonText, styles.stopButtonText]}>Stop</Text>
              </TouchableOpacity>
            </>
          ) : (
            <>
              <TouchableOpacity
                onPress={this.reset}
                style={[styles.button, styles.secondaryButton]}
              >
                <Text style={styles.buttonText}>Reset</Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={this.start}
                style={[styles.button, styles.startButton]}
              >
                <Text style={[styles.buttonText, styles.startButtonText]}>Start</Text>
              </TouchableOpacity>
            </>
          )}
        </View>

        {/* Lap times */}
        {laps.length > 0 && (
          <View style={styles.lapContainer}>
            {laps.map((lap, index) => (
              <Text key={index} style={styles.lapText}>
                Lap {laps.length - index}: {formatTime(lap)}
              </Text>
            ))}
          </View>
        )}
      </View>
    );
  }
}

// Updated styles
const styles = StyleSheet.create({
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
