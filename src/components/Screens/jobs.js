import React, { Component } from 'react';
import { StyleSheet } from 'react-native';
import { Container, Header, Content, Item, Input, Icon, ListItem, CheckBox, Body, Text, Form, Card, CardItem, Right, Left } from 'native-base';
export default class Jobs extends Component {
  render() {
    return (
      <Container>
        <Content>
          <Text>This is a chat box component for user and bussiness man's description page</Text>
          {/* <Form>
            <Item>
              <Icon active name='search' />
              <Input placeholder='Search' />
            </Item>
            <Item>
              <Icon active name='pin' />
              <Input placeholder='Search' />
            </Item>
          </Form>
          <ListItem>
            <CheckBox checked={true} />
            <Body>
              <Text>Full Time</Text>
            </Body>
            <CheckBox checked={true} />
            <Body>
              <Text>Part Time</Text>
            </Body>
          </ListItem>
          <ListItem>
            <CheckBox checked={true} />
            <Body>
              <Text>Temporary</Text>
            </Body>
            <CheckBox checked={true} />
            <Body>
              <Text>Freelance</Text>
            </Body>
          </ListItem>
          <ListItem>
            <CheckBox checked={true} />
            <Body>
              <Text>Internship</Text>
            </Body>
          </ListItem>
          <Card style={{ width: '90%', alignSelf: 'center' }}>
            <CardItem header button onPress={() => alert("This is Card Header")}>
              <Text>Job Title</Text>
            </CardItem>
            <CardItem>
              <Body>
                <Text>
                  Job decsription
                </Text>
              </Body>
            </CardItem>
            <CardItem>
              <Left>
              
                <Icon style={styles.text} active name='pin' />
                <Text style={styles.text}>Location</Text>
              </Left>
              <Body>

              <Text style={styles.text}>FullTime</Text>
              </Body>
              <Icon style={styles.text} active name='clock' />
              <Text style={styles.text}>2 year ago</Text>

            </CardItem>
          </Card> */}
        </Content>
      </Container>
    );
  }
}


// const styles = StyleSheet.create({
//   text: {
//     fontSize: 13
//   },
// });