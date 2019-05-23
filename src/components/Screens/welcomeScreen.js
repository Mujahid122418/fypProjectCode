import React, { Component } from 'react';
import { Platform, StyleSheet, View } from 'react-native';
import { Container, Thumbnail, Content, Button, Text } from 'native-base';
export default class WelComeScreen extends Component {
  static navigationOptions = {
    header: null

  }
  render() {

    const uri = 'https://i.pinimg.com/originals/cd/ba/7a/cdba7ad02665c51892c4860f6fc201af.png'
    return (
      <Container style={styles.container}>
        <Content>
          <Thumbnail style={{ width: 150, height: 100 }} large square source={{ uri: uri }} />

          <Button style={styles.button} block small rounded onPress={() => this.props.navigation.navigate("LogInScreen")} >
            <Text>Login</Text>
            </Button>
          <Button style={{ marginTop: 10, backgroundColor: '#F43843' }} block small rounded onPress={() => this.props.navigation.navigate("CreateAccount")}>
            <Text>SignUp</Text>
            </Button>
          {/* <Button onPress={() => this.props.navigation.navigate("Home")}>
              <Text>DashBoard</Text></Button> */}

        </Content>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 150,
    justifyContent: 'flex-end',
    alignItems: 'center',
    backgroundColor: '#F5FCFC',
  },
  button: {
    marginTop: 10

  }
});