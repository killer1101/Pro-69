import React, { Component } from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';
import Constants from 'expo-constants';
import { createAppContainer } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import QrScanner from './screens/qrScanner';

export default class App extends Component {
  render() {
    return (
      <View style ={styles.container}>
       <AppContainer/>
      </View>
    );
  }
}

const qrScanner = createBottomTabNavigator({
  QrScreen: { screen: QrScanner },
});

const AppContainer = createAppContainer(qrScanner);
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#ecf0f1',
    padding: 8,
  },
});
