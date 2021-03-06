/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import CarsList from './src/components/Screens/carsList';
import { Platform, StyleSheet, Text, View } from 'react-native';
import { Container, Content, Header, Thumbnail } from 'native-base';
import store from './src/store/store';
import { Provider } from 'react-redux';
import AsyncStorage from '@react-native-community/async-storage'
import jwtdecode from 'jwt-decode'
import {NavigationActions} from 'react-navigation'

import AppNavigator from './src/components/Screens/index';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});


export default class App extends Component {
 
  
  render() {
    return (
      <Provider store={store}>
        <Container style={styles.container}>

          <AppNavigator />
          {/* <CarsList /> */}

        </Container>
      </Provider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    // justifyContent: 'center',
    // alignItems: 'center',
    // backgroundColor: '#F5FCFF',
  },
});
