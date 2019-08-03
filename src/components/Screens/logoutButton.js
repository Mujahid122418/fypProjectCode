import React, { Component } from "react";
import { Platform, StyleSheet, Text, View , Container} from "react-native";
export default class LogOutButton extends Component {
  render() {
    return (
      <Container style={styles.container}>
        <Text>Mujahid</Text>
      </Container>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    // flex: 1,
    // justifyContent: 'center',
    // alignItems: 'center',
    // backgroundColor: '#F5FCFF',
  }
});
