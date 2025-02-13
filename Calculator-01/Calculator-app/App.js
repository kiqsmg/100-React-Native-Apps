import React, { useState } from 'react'
import { StyleSheet, Text, View, SafeAreaView, TouchableOpacity } from 'react-native';

export default function App() {

  const [input, setInput] = useState('');
  const [result, setResult] = useState('');

  const buttons = [
    'C', '±', '%', '/',
    '7', '8', '9', '*',
    '4', '5', '6', '-',
    '1', '2', '3', '+',
    '0', '.', '=',
  ];
  
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="light"/>
      <View style={styles.displayContainer }>
        <Text style={styles.inputText}>{input}</Text>
        <Text style={styles.resultText}>{result}</Text>
      </View>
      <View stle={styles.buttonContainer}>
        {buttons.map((item, index) => (
          <TouchableOpacity
            key={index}
            style={[
              styles.button,
              item === '0' && styles.zeroButton, //Special styling for the zero button
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
