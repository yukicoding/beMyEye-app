import { StatusBar } from 'expo-status-bar';
import * as React from 'react';
import { useState, useEffect } from 'react';
import { StyleSheet, Text, View, TextInput, Button, Alert } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Provider } from 'react-redux';
import GeenButton from '../components/GeenButton';
export default function HomeScreen({ navigation }: any) {
  const wxLogin = () => {
    navigation.navigate('Details');
  };
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <GeenButton
        onPress={() => navigation.navigate('Details')}
        title="微信登陆1"
      ></GeenButton>
    </View>
  );
}
