import React, { Component } from 'react';
import {Platform, StyleSheet, View} from 'react-native';
import { Container, Thumbnail, Content, Button ,Text} from 'native-base';
import CarRentalOffices from './rentalOfficesDiscription';
// import CarsList from './carsList'
export default class Blogs extends Component {
  render() {
    const uri = 'https://businessdial.pk/wp-content/uploads/2019/03/Add-Business-Get-Business-2.jpg'
    return (
      <Container >
      <CarRentalOffices/>
        {/* <Content> */}
          {/* <Thumbnail large square source={{ uri: uri }} /> */}
        <Text>Search near by car rental offices</Text>
        {/* </Content> */}
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