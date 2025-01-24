import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, SafeAreaView, TextInput } from 'react-native';

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
          {['7','8','9','/','4','5','6','*','1','2','3','-','0','c','=','+']}
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
  }, resultContainer: {

  }, resultText: {

  }, inputContainer: {

  }, inputText: {

  }, buttonContainer: {

  },
});
