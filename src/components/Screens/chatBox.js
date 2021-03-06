import React, { Component } from 'react';
import { Text, View, StyleSheet } from 'react-native';

import Chatbot from 'react-native-chatbot';
const style = StyleSheet.create({
  container: {
    flex: 1
  },

  text: {
    fontSize: 25
  }

});
const steps = [
  {
    id: '1',
    message: 'Wellome, Thanx for your consideration',
    trigger: '2'
  },
  {
    id: '2',
    user: true,
    trigger: '3'
  },{
    id:'3',
    message:'Soon, Our Caption contact from you for ride',
    end:true
    
  }
]
export default class Chat extends Component {
  render() {
    return (
      <View style={style.container}>
        <Chatbot steps={steps} />
      </View>
    );
  }
}


