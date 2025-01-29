import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View, SafeAreaView, TextInput, Touchable, TouchableOpacity } from 'react-native';

export default function App() {
  const[ input, setInput ] = useState('')
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="auto" />
      <View style={styles.resultContainer}>
        <Text style={styles.resultText}>This is a Text</Text>
      </View>
      <View style={styles.inputContainer}>
        <TextInput 
        style={styles.inputText}
        value={input}
        onChangeText={setInput}
        keyboardType='numeric'
        />
        <View style={styles.buttonContainer}>
          {['7','8','9','/','4','5','6','*','1','2','3','-','0','c','=','+'].map(
            (item,index) =>(
              <TouchableOpacity
              key={index}
              style={styles.button}
              onPress={()=> onButtonPress(item)}
              >
                <Text style={styles.buttontext}>{item}</Text>
              </TouchableOpacity>
            )
          )}
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex:1
  }, resultContainer: {
    flex:2,
    justifyContent: 'center',
    alignItems:'flex-end'
  }, resultText: {
    fontSize: 40
  }, inputContainer: {
    flex:1,
    justifyContent: 'center',
    alignItems:'flex-end'
  }, inputText: {
    fontSize: 30
  }, buttonContainer: {
    flex: 7,
    flexDirection: 'row',
    flexWrap: 'wrap'
  }, button: {
    fontSize: 24,
    width: "25%",
    height: "20%",
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth:1,
    borderColer:"#ccc"
  },
});
