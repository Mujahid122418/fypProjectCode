import React, { Component } from 'react';
import { Container, Content, Thumbnail, Form, Item, Label, Input, Icon, Button, Text, ListItem } from 'native-base';


export default class SignUpScreen extends Component {
    state={
        Type : "User"
    }
    static navigationOptions = {
        header: null
    }    
    render() {
        console.log(this.props)
        const path = 'https://businessdial.pk/wp-content/uploads/2019/03/Add-Business-Get-Business-2.jpg'
        return (
            <Container>
                <Content>
                    <Thumbnail style={{  position: 'absolute', marginTop: '20%', width: 150, height: 100, flex: 1, justifyContent: 'center', alignSelf: 'center' }} large square source={{ uri: path }} />
                    <Form style={{marginTop: '45%' }}>
                        <Item floatingLabel>
                            <Icon active name='person' />
                            <Label>Username</Label>
                            <Input />
                        </Item>
                        <Item floatingLabel last>
                            <Icon active name='key' />
                            <Label>Password</Label>
                            <Input />
                        </Item>
                        <Button  block style={{ alignSelf:'center', width:'95%' ,margin:'auto',backgroundColor:'black',marginTop: 30 }}  iconLeft>
                        <Icon name='unlock' />
                            <Text>SIGNUP</Text>
                        </Button>
                        {/* <Button block style={{ alignSelf:'center', width:'95%',  marginTop: 15 }} iconLeft>
                            <Icon name="logo-facebook" theme="filled" />
                            <Text>Facebook</Text>
                        </Button> */}
                        <Button block style={{ alignSelf:'center', width:'95%',  marginTop: 15 }} iconLeft
                         onPress = {this.createAccount}>
                            <Icon name="logo-facebook" theme="filled" />
                            <Text>Create a new Account</Text>
                        </Button>
                    </Form>
                    {/* <ListItem>
                        <Button onPress={() => this.props.navigation.navigate("MainPage")} block style={{ width: '38%', flex: 1, alignSelf: 'center', marginTop: 30 }} dark iconLeft>
                            <Icon name='unlock' />
                            <Text>SIGNUP</Text>
                        </Button>
                    </ListItem> */}

                </Content>
            </Container>
        )
    }
}