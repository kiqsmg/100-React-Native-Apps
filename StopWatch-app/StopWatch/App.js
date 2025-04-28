import React, { Component } from "react";
import { View, StatusBar } from "react-native";
import Timer from "./components/Timer";
import TimeDisplay from "./components/TimeDisplay";
import PickerGroup from "./components/PickerGroup";
import ButtonGroup from "./components/ButtonGroup";
import LapList from "./components/LapList";
import { AVAILABLE_MINUTES, AVAILABLE_SECONDS } from "./utils/createArray";
import styles from "./styles";

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

  render() {
    const { isRunning, elapsedTime, laps, selectedMinutes, selectedSeconds } = this.state;

    return (
      <View style={styles.container}>
        <StatusBar barStyle="light-content" />
        <TimeDisplay time={elapsedTime} />

        {!isRunning && (
          <PickerGroup
            selectedMinutes={selectedMinutes}
            selectedSeconds={selectedSeconds}
            onMinutesChange={(itemValue) => this.setState({ selectedMinutes: itemValue })}
            onSecondsChange={(itemValue) => this.setState({ selectedSeconds: itemValue })}
          />
        )}

        <ButtonGroup
          isRunning={isRunning}
          onStart={this.start}
          onStop={this.stop}
          onReset={this.reset}
          onAddLap={this.addLap}
        />

        {laps.length > 0 && <LapList laps={laps} />}
      </View>
    );
  }
}