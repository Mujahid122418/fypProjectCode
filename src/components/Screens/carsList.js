
import React, { Component } from 'react';
import { Image, TouchableOpacity } from 'react-native';
import { ScrollView } from 'react-native';
import { Container, Header, Content, Card, CardItem, Thumbnail, Text, Button, Icon, Left, Body, Right, ScrollableTab } from 'native-base';
export default class CarsList extends Component {
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

                <Right>
                  <TouchableOpacity onPress={() => this.props.navigation.navigate('CarRentalOffices')} style={{ backgroundColor: '#b12ff3', width: 120, height: 40, borderRadius: 50, justifyContent: 'center' }}  >
                    <Text style={{ color: 'white', marginLeft:35, fontWeight:'bold' }}>Book</Text>
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

                <Right>
                  <TouchableOpacity onPress={() => this.props.navigation.navigate("CarRentalOffices")} style={{ backgroundColor: '#b12ff3', width: 120, height: 40, alignContent: 'center', borderRadius: 50, justifyContent: 'center' }} >
                    <Text style={{ color: 'white',marginLeft:35, fontWeight:'bold'  }}>Book</Text>
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