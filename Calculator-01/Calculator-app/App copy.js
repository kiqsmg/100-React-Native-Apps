import React, { useState } from 'react';
import { StyleSheet, Text, View, SafeAreaView, TouchableOpacity } from 'react-native';
import { StatusBar } from 'expo-status-bar';

export default function App() {
  const [input, setInput] = useState('');
  const [result, setResult] = useState('');

  const handleButtonPress = (value) => {
    if (value === '=') {
      calculateResult();
    } else if (value === 'C') {
      setInput('');
      setResult('');
    } else if (value === '±') {
      setInput((prev) => (prev.startsWith('-') ? prev.slice(1) : `-${prev}`));
    } else if (value === '%') {
      setInput((prev) => (parseFloat(prev) / 100).toString());
    } else {
      setInput(input + value);
    }
  };

  const calculateResult = () => {
    try {
      const sanitizedInput = input.replace(/[^-()\d/*+.]/g, ''); // Sanitize input
      const calculatedResult = evaluateExpression(sanitizedInput);
      setResult(calculatedResult.toString());
    } catch {
      setResult('Error');
    }
  };

  const evaluateExpression = (expression) => {
    // Helper function to handle multiplication and division
    const evaluateTerm = (term) => {
      const numbers = term.split(/[*/]/).map(Number);
      const operators = term.split(/\d+/).filter(Boolean);
      let result = numbers[0];
      for (let i = 0; i < operators.length; i++) {
        if (operators[i] === '*') result *= numbers[i + 1];
        else if (operators[i] === '/') result /= numbers[i + 1];
      }
      return result;
    };

    // Split the expression into terms (separated by + or -)
    const terms = expression.split(/([+-])/);
    let total = evaluateTerm(terms[0]);

    for (let i = 1; i < terms.length; i += 2) {
      const operator = terms[i];
      const term = terms[i + 1];
      const value = evaluateTerm(term);
      if (operator === '+') total += value;
      else if (operator === '-') total -= value;
    }

    return total;
  };

  const buttons = [
    'C', '±', '%', '/',
    '7', '8', '9', '*',
    '4', '5', '6', '-',
    '1', '2', '3', '+',
    '0', '.', '=',
  ];

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="light" />
      <View style={styles.displayContainer}>
        <Text style={styles.inputText}>{input}</Text>
        <Text style={styles.resultText}>{result}</Text>
      </View>
      <View style={styles.buttonContainer}>
        {buttons.map((item, index) => (
          <TouchableOpacity
            key={index}
            style={[
              styles.button,
              item === '0' && styles.zeroButton, // Special style for the '0' button
              (item === '/' || item === '*' || item === '-' || item === '+' || item === '=') && styles.operatorButton,
              (item === 'C' || item === '±' || item === '%') && styles.functionButton,
            ]}
            onPress={() => handleButtonPress(item)}
          >
            <Text style={styles.buttonText}>{item}</Text>
          </TouchableOpacity>
        ))}
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
  },
  displayContainer: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
    padding: 20,
  },
  inputText: {
    color: '#fff',
    fontSize: 48,
    marginBottom: 10,
  },
  resultText: {
    color: '#fff',
    fontSize: 64,
  },
  buttonContainer: {
    flex: 2,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    padding: 10,
  },
  button: {
    width: 80,
    height: 80,
    borderRadius: 40,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 5,
    backgroundColor: '#333',
  },
  zeroButton: {
    width: 170, // Wider button for '0'
    alignItems: 'flex-start',
    paddingLeft: 30,
  },
  operatorButton: {
    backgroundColor: '#FF9500',
  },
  functionButton: {
    backgroundColor: '#A5A5A5',
  },
  buttonText: {
    color: '#fff',
    fontSize: 32,
  },
});