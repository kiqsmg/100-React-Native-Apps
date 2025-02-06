// Make all the imports that we will use later on the code
import React, { useState } from 'react';
import { StyleSheet, Text, View, SafeAreaView, TouchableOpacity } from 'react-native';
import { StatusBar } from 'react-native';

export default function App() {
  // Create a const to store the input data from the button pressed
  const [input, setInput] = useState('');
  // Create a const to store the result from the calculation made by the calculator
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
      const sanitizedInput = input.replace(/[^-()\d/*+.]/g, '');
      const calculatedResult = evaluateExpression(sanitizedInput);
      setResult(calculateResult.toString());
    } catch {
      setResult('Error');
    }
  };

  const evaluateExpression = (expression) => {
    const evaluateTerm = (term) => {
      const numbers = term.split
    }
  };

  const terms = expression.split(/([+-])/);
  let total = evaluateTerm(terms[0]);

  for (let i = 1; i < terms.length; i += 2) {
    const operator = terms[i];
  }
}