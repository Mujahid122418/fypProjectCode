import React, { Component } from 'react';
import { Container, Content, Thumbnail, Form, Item, Label, Input, Icon, Button, Text, ListItem } from 'native-base';
import store from '../../store/store';
export default class LogInScreen extends Component {
    static navigationOptions = {
        header: null
    }
    state = {
        username: 'A',
        password: 'A'
    }
    loginUser = () => {
        store.dispatch({
            type: 'USER_LOGIN',
            data: this.state,
            ctx:this.props.navigation
        });
    }
    onChange = (evt) => {

        this.setState({
            [evt.target.name]: evt.target.value
        });
    }
    render() {
        console.log(this.props)
        const path = 'https://i.pinimg.com/originals/cd/ba/7a/cdba7ad02665c51892c4860f6fc201af.png'
        return (
            <Container>
                <Content>
                    <Thumbnail style={{ position: 'absolute', marginTop: '20%', width: 150, height: 100, flex: 1, justifyContent: 'center', alignSelf: 'center' }} large square source={{ uri: path }} />
                    <Form style={{ marginTop: '45%' }}>
                        <Item floatingLabel>
                            <Icon active name='person' />
                            <Label>Username</Label>
                            <Input name="username" value={this.state.username} onChangeText={(text) => { this.setState({ username: text }) }} />
                        </Item>
                        <Item floatingLabel last>
                            <Icon active name='key' />
                            <Label>Password</Label>
                            <Input name="password" value={this.state.password} onChangeText={(text) => { this.setState({ password: text }) }} />
                        </Item>
                        <Button block style={{ alignSelf: 'center', width: '95%', margin: 'auto', backgroundColor: 'black', marginTop: 30 }} iconLeft
                            onPress={this.loginUser}
                        // onPress={() => this.props.navigation.navigate("App")}
                        >
                            <Icon name='unlock' />
                            <Text>login</Text>
                        </Button>
                        <Button block style={{ alignSelf: 'center', width: '95%', marginTop: 15 }} iconLeft
                      
                        onPress={()=>this.props.navigation.navigate("CreateAccount")}
                        >
                            <Icon name="logo-facebook" theme="filled" />
                            <Text>Create a new Account</Text>
                        </Button>
                        {/* <Button block style={{ alignSelf:'center', width:'95%',  marginTop: 15 }} iconLeft
                         onPress = {()=> this.props.navigation.navigate("App")}
                        >
                            <Icon name="logo-facebook" theme="filled" />
                            <Text>Facebook</Text>
                        </Button> */}
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