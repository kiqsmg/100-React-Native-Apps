import React, { Component } from "react";
import { _View, SafeAreaView, ScrollViewBase, StyleSheet, Text, View } from "react-native";
import Button from "./components/Button";
import Row from "./components/Row";
import calculator from "./util/calculator";



export default class App extends Component {
  state = initialState;

  HandleTap = (type, value) => {
    this.setState((state) => calculator(type, value, state));
  };

  render() {
    return(
      <View style={StyleSheet.container}>
        

      </View>
    )
    
  }
}