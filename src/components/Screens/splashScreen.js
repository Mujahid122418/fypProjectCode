import React, { Component } from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import logo from '../../images/logo.png';
export default class SplashScreen extends Component {
  componentWillMount() {
    setTimeout(() => {
      this.props.navigation.navigate('Welcome');
    }, 50);
  }

  render() {
    return (
      <View style={style.container}>
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
          <Image source={logo} style={style.logo} />
          <View style={{ marginTop: 0 }}>
            <Text style={{ fontSize: 40, fontWeight: 'bold', color: 'white' }}>Rent 4U</Text>
            <Text style={{ color: 'white', textAlign: 'center', fontSize: 16, fontWeight: 'bold', paddingTop: 10, opacity: 0.5 }}>We Are Hire You</Text>
            <Text style={{ color: 'white', textAlign: 'center', fontSize: 16, fontWeight: 'bold', paddingTop: 200, opacity: 0.9 }}>www.rent4u.com</Text>

          </View>
        </View>
      </View>
    );
  }
}
const style = StyleSheet.create({
  container: {
    flex: 1,
    // justifyContent:'center',
    // alignItems: 'center',
    backgroundColor: '#b12ff3',
    // width:400
  },
  logo: {
    width: 150,
    height: 150
  }
})
