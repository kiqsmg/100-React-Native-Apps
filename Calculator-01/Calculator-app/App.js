import React, { Component } from "react";
import { SafeAreaView, StyleSheet, Text, View } from "react-native";




export default class App extends Component {
  state = initialState;

  HandleTap = (type, value) => {
    this.setState((state) => calculator(type, value, state));
  };

  render() {
    
  }
}