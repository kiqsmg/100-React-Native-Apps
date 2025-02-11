import React from 'react'
import { StyleSheet, Text, View, SafeAreaView, TouchableOpacity } from 'react-native';

function App() {

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

export default App