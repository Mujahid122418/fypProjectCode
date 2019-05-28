
import React, { Component } from 'react';
import { Image, TouchableOpacity, Alert } from 'react-native';
import { ScrollView } from 'react-native';
import { Container, Header, Content, Card, CardItem, Thumbnail, Text, Button, Icon, Left, Body, Right, ScrollableTab } from 'native-base';
import store from '../../store/store';

export default class CarsList extends Component {
 
  state = {
    business: []
}
constructor(props) {
    super(props);

    this.email= this.props.navigation.getParam('email');
   
    Alert.alert(this.email);


    fetch('http://192.168.0.107:7080/allBusiness', {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        }
    }).then((resp) => resp.json()).then((resp) => {
        this.setState({ business: resp })
    })
}

  sendEmail = () => {
    var mailOptions = {
      from: 'mujahid122418@gmail.com',
      to: this.email,
      subject: 'Sending Email using Node.js',
      text: 'That was easy to send email via nodejs!'
    };
    return new Promise((s, e) => {
      fetch('http://192.168.0.107:7080/email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(mailOptions)
      });

    });
  }
  render() {
    return (
      <ScrollView>
        <Container>

          <Content>
            <Card>
              <CardItem>
                <Left>
                  <Thumbnail source={require('../../images/office.jpg')} />
                  <Body>
                    <Text>Rental office</Text>
                    <Text note>Jhang Road</Text>
                  </Body>
                </Left>
              </CardItem>
              <CardItem cardBody>
                <Image source={require('../../images/car1.jpg')} style={{ height: 150, width: null, flex: 1 }} />
              </CardItem>
              <CardItem>
                <Body>
                  <Button transparent>
                    <Text style={{ fontSize: 20 }}>Model</Text>
                    <Text >Civic 2018</Text>
                  </Button>
                </Body>
                {/* onPress={() => this.props.navigation.navigate('CarRentalOffices')} */}
                <Right>
                  <TouchableOpacity onPress={this.sendEmail} style={{ backgroundColor: '#b12ff3', width: 120, height: 40, borderRadius: 50, justifyContent: 'center' }}  >
                    <Text style={{ color: 'white', marginLeft: 35, fontWeight: 'bold' }}>Book car</Text>
                  </TouchableOpacity>
                </Right>
              </CardItem>
            </Card>

            <Card>
              <CardItem>
                <Left>
                  <Thumbnail source={require('../../images/office.jpg')} />
                  <Body>
                    <Text>Rental office</Text>
                    <Text note>Jhang Road</Text>
                  </Body>
                </Left>
              </CardItem>
              <CardItem cardBody>
                <Image source={require('../../images/cars1.jpg')} style={{ height: 150, width: null, flex: 1 }} />
              </CardItem>
              <CardItem>
                <Body>
                  <Button transparent>
                    <Text style={{ fontSize: 20 }}>Model</Text>
                    <Text >BMW 2019</Text>
                  </Button>
                </Body>
                {/* onPress={() => this.props.navigation.navigate("CarRentalOffices")} */}
                <Right>
                  <TouchableOpacity onPress={() => { this.sendEmail() }} style={{ backgroundColor: '#b12ff3', width: 120, height: 40, alignContent: 'center', borderRadius: 50, justifyContent: 'center' }} >
                    <Text style={{ color: 'white', marginLeft: 35, fontWeight: 'bold' }}>Book car</Text>
                  </TouchableOpacity>
                </Right>
              </CardItem>
            </Card>
          </Content>
        </Container>
      </ScrollView>

    );
  }
}