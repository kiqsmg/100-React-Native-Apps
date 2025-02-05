import React, { useState } from 'react';
import { StyleSheet, Text, View, SafeAreaView, TouchableOpacity } from 'react-native';
import { StatusBar } from 'react-native';

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
  }
}