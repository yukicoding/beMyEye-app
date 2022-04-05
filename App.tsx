import { StatusBar } from 'expo-status-bar';
import * as React from 'react';
import { useState, useEffect } from 'react';
import { StyleSheet, Text, View, TextInput, Button, Alert } from 'react-native';

export default function App() {
  const [number, setNumber] = useState<string>('0');
  return (
    <View style={styles.container}>
      <Text>Hi aciel</Text>
      <TextInput
        value={number}
        onChangeText={(text) => setNumber(text)}
        placeholder="please in put"
        style={{ borderColor: 'black', height: 40 }}
      ></TextInput>
      <Button
        title="click me"
        onPress={() => Alert.alert('' + number)}
      ></Button>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
