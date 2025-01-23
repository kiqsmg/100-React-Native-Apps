import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, SafeAreaView } from 'react-native';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="auto" />
      <View style={styles.resultContainer}>
        <Text style={styles.resultText}>This is a Text</Text>
      </View>
      <View style={styles.inputContainer}>

      </View>

    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
  }, resultContainer: {

  }, resultText: {

  }, inputContainer: {

  },
});
