/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View } from 'react-native';
import { Container, Content, Header, Thumbnail } from 'native-base';
import store from './src/store/store';
import { Provider } from 'react-redux';

// import HeaderComponent from './src/components/header'
// import TabsComponents from './src/components/homeTabs/index'
import AppNavigator from './src/components/Screens/index'
// import CarsList from './src/components/Screens/carsList';
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
          {/* <HeaderComponent /> */}
          {/* <TabsComponents />
        < */}
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
