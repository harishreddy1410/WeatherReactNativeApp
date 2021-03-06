import { StatusBar } from 'expo-status-bar';
import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import  WeatherDetail  from './src/components/WeatherDetail'
import  Weather  from './src/components/Weather'

export default function App() {
  return (
    <View style={styles.container}>
      {/* <Text>Open up App.js to start working on your app!</Text>
       <WeatherDetail name="sunny"></WeatherDetail> 
      <StatusBar style="auto" /> */}
      <Weather />
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
