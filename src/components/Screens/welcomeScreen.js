import React, { Component } from 'react';
import { Platform, StyleSheet, View, Image, TouchableOpacity } from 'react-native';
import { Container, Thumbnail, Content, Button, Text } from 'native-base';
import logo from '../../images/logo.png';
import { Colors } from 'react-native-paper';
export default class WelComeScreen extends Component {
  static navigationOptions = {
    header: null

  }
  render() {


    return (
      <Container style={styles.container}>
        <Content>
          {/* <Thumbnail style={{ width: 150, height: 100 }} large square source={{ uri: uri }} /> */}
          <Image style={styles.logo} source={logo} />
          <TouchableOpacity style={styles.button} block small rounded onPress={() => this.props.navigation.navigate("LogInScreen")} >
            <Text style={{color:'white', fontWeight:'bold'}}>Login</Text>
          </TouchableOpacity>
          <TouchableOpacity style={[styles.button,{ marginTop: 20, backgroundColor: '#b12ff3', height:40 }, shadow]} block small rounded onPress={() => this.props.navigation.navigate("CreateAccount")}>
            <Text style={{color:'white', fontWeight:'bold'}}>SignUp</Text>
          </TouchableOpacity>
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
    paddingTop: 100,
    justifyContent: 'flex-end',
    alignItems: 'center',
    backgroundColor: '#F5FCFC',
  },
  button: {
    // marginTop: 20,
    // width: 300,
    // height:40

    backgroundColor: '#b12ff3',
    width: 300,
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 10,
    borderRadius: 25, 
    

  },
  logo:{
    width:150,
     height:150,
     marginLeft:75
  }
});

const shadow = {
  // shadowColor: '#FC6764  ',
  shadowRadius: 10,
  shadowOpacity: 0.3,
  elevation: 8,
  shadowOffset: {
      width: 0,
      height: 4
  }
}