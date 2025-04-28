import { Vibration } from "react-native";
import { Audio } from 'expo-av';

export default class Timer {
  constructor(callback) {
    this.startTime = 0;
    this.endTime = 0;
    this.elapsed = 0;
    this.timer = null;
    this.callback = callback;
  }

  async playSound() {
    const { sound } = await Audio.Sound.createAsync(
      require('../assets/tone/tone.mp3')
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
        Vibration.vibrate();
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