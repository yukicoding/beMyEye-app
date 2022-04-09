import { StatusBar } from 'expo-status-bar';
import * as React from 'react';
import { useState, useEffect } from 'react';
import { StyleSheet, Text, View, TextInput, Button, Alert } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Provider } from 'react-redux';
import store from './app/store/index';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from './app/screens/HomeScreens';
import DetailsScreen from './app/screens/DetailsScreen';
import LoginScreen from './app/screens/LoginScreen';
const Tab = createBottomTabNavigator();

function MyTabs() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="登录" component={LoginScreen} />
      <Tab.Screen name="首页" component={HomeScreen} />
      <Tab.Screen name="个人中心" component={DetailsScreen} />
    </Tab.Navigator>
  );
}
export default function App() {
  const [number, setNumber] = useState<string>('0');
  return (
    <Provider store={store}>
      <NavigationContainer>
        <MyTabs />
      </NavigationContainer>
    </Provider>
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
