import React, { Component } from 'react';
import {Platform, StyleSheet, View} from 'react-native';
import { Container, Thumbnail, Content, Button ,Text} from 'native-base';
import CarsList from './carsList';
// import CarsList from './carsList'
export default class Cars extends Component {
  render() {
    // const uri = 'https://businessdial.pk/wp-content/uploads/2019/03/Add-Business-Get-Business-2.jpg'
    return (
      <Container >
     <Text>Mujahid</Text>
      {/* <CarsList navigation={this.props.navigation}   email={this.props.targetEmail}/> */}
      
      </Container>
    );
  }
}                    

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
});