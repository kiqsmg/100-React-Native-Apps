// Import React from react ---> import the CORE react lib
// Import Component from react ---> destructures the component class, letting create class components
// Import SafeAreaView ---> Wrapper for device padding safety (garanty responsiviness)
// Import StyleSheet ---> give style to the components
// Import Text ---> display text
// Import View ---> display boxes
// Import Button and Row ---> Components alredy created
// Import calculator from util ---> logic module handling calculations
// Import initialState from util ---> Default state for the calculator {displayValue: "0"}

import React, { Component } from "react";
import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import Button from "./components/Button";
import Row from "./components/Row";
import calculator, { initialState } from "./util/calculator";

// create class component of App --> create react component called App
export default class App extends Component {
  // Stores the starting values for the calculation
  state = initialState;

  // handle tap method --> handles all button presses
  // this.seState Gets current state
  // Type receives what type of button it was
  // Value has the associated value (number or operator)
  // Updates the new state values based on the calculation the 'calculator' function has given back to us
  HandleTap = (type, value) => {
    this.setState((state) => calculator(type, value, state));
  };

  // render method --> returns a View with the calculator UI elements
  render() {
    return (
      <View style={styles.container}>
        {/* Status bae here */}
        <SafeAreaView>
          {/* Displays a text for the current calculator's number --> 
          this.state.currentValue gets current number stored in the calculators memory( it updates every time you press a button) -->
           parseFloat converts the value to a float -->
            .toLocaleString formats the numberwith proper decimals symbols as ','and '.'  */}
          <Text style={styles.value}>
            {parseFloat(this.state.currentValue).toLocaleString()}
          </Text>

          {/* Do create componentRow */}
          <Row>
            <Button
              text="AC"
              theme="secondary"
              onPress={() => this.HandleTap("clear")}
            />

            <Button
              text="+/-"
              theme="secondary"
              onPress={() => this.HandleTap("posneg")}
            />

            <Button
              text="%"
              theme="secondary"
              onPress={() => this.HandleTap("percentage")}
            />

            <Button
              text="/"
              theme="accent"
              onPress={() => this.HandleTap("operator", "/")}
            />
          </Row>

          {/* Number */}
          <Row>
            <Button text="7" onPress={() => this.HandleTap("number", 7)} />
            <Button text="8" onPress={() => this.HandleTap("number", 8)} />
            <Button text="9" onPress={() => this.HandleTap("number", 9)} />
            <Button
              text="X"
              theme="accent"
              onPress={() => this.HandleTap("operator", "*")}
            />
          </Row>

          <Row>
            <Button text="4" onPress={() => this.HandleTap("number", 4)} />
            <Button text="5" onPress={() => this.HandleTap("number", 5)} />
            <Button text="6" onPress={() => this.HandleTap("number", 6)} />
            <Button
              text="-"
              theme="accent"
              onPress={() => this.HandleTap("operator", "-")}
            />
          </Row>

          <Row>
            <Button text="1" onPress={() => this.HandleTap("number", 1)} />
            <Button text="2" onPress={() => this.HandleTap("number", 2)} />
            <Button text="3" onPress={() => this.HandleTap("number", 3)} />
            <Button
              text="+"
              theme="accent"
              onPress={() => this.HandleTap("operator", "+")}
            />
          </Row>

          <Row>
            <Button text="🧿" onPress={() => this.HandleTap("emoji", null)} />
            <Button text="0" onPress={() => this.HandleTap("number", 0)} />
            <Button text="." onPress={() => this.HandleTap("number", ".")} />
            <Button
              text="="
              theme="accent"
              onPress={() => this.HandleTap("equal", "=")}
            />
          </Row>
        </SafeAreaView>
      </View>
    );
  }
}

// create styles of app
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000000",
    justifyContent: "flex-end",
  },
  value: {
    color: "#fff",
    fontSize: 70,
    textAlign: "right",
    marginRight: 20,
    marginBottom: 10,
  },
});