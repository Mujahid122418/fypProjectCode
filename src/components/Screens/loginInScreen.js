import React, { Component } from "react";
import { Image, StyleSheet, TouchableOpacity } from "react-native";
import {
  Container,
  Content,
  Thumbnail,
  Form,
  Item,
  Label,
  Input,
  View,
  Button,
  Text,
  ListItem
} from "native-base";
import Icon from "react-native-vector-icons/Ionicons";
import store from "../../store/store";
import logo from "../../images/logo.png";
const initState = {
  username: "A",
  usernameError: "",
  password: "A",
  passwordError: ""
};
export default class LogInScreen extends Component {
  static navigationOptions = {
    header: null
  };
  state = initState;
  validate = () => {
    let usernameError = "";
    let passwordError = "";
    if (!this.state.username) {
      usernameError = "plz enter user name";
    }
    if (!this.state.password) {
      passwordError = "plz enter password";
    }
    if (usernameError || passwordError) {
      this.setState({ usernameError, passwordError });
      return false;
    }
    return true;
  };

  loginUser = () => {
    store.dispatch({
      type: "USER_LOGIN",
      data: this.state,
      ctx: this.props.navigation
    });
    const isValid = this.validate();
    if (isValid) {
      this.setState({ initState });
    }
  };
  onChange = evt => {
    this.setState({
      [evt.target.name]: evt.target.value
    });
  };
  render() {
    console.log(this.props);

    return (
      <Container>
        {/* <Content> */}

        <Image
          style={{
            width: 150,
            height: "20%",
            marginLeft: 100,
            marginTop: "5%"
          }}
          source={logo}
        />
        {/* <Thumbnail style={{ position: 'absolute', marginTop: '20%', width: 150, height: 100, flex: 1, justifyContent: 'center', alignSelf: 'center' }} large square source={{ uri: path }} /> */}
        <Form style={{ marginTop: "5%" }}>
          <Item>
            <Icon
              name="md-person"
              size={20}
              color="black"
              style={{ marginRight: 10 }}
            />
            <Label>Username</Label>
            <Input
              name="username"
              value={this.state.username}
              onChangeText={text => {
                this.setState({ username: text });
              }}
            />
          </Item>
          {this.state.usernameError ? (
            <View>
              <Text style={{ color: "red", textAlign: "center" }}>
                {this.state.usernameError}
              </Text>
            </View>
          ) : null}
          <Item>
            <Icon
              name="md-lock"
              size={20}
              color="black"
              style={{ marginRight: 10 }}
            />
            <Label>Password</Label>
            <Input
              name="password"
              value={this.state.password}
              onChangeText={text => {
                this.setState({ password: text });
              }}
            />
          </Item>
          {this.state.passwordError ? (
            <View>
              <Text style={{ color: "red", textAlign: "center" }}>
                {this.state.passwordError}
              </Text>
            </View>
          ) : null}
          <TouchableOpacity
            style={Styles.button}
            onPress={this.loginUser}
            // onPress={() => this.props.navigation.navigate("App")}
          >
            <Text
              style={{
                color: "white",
                fontWeight: "bold",
                justifyContent: "center"
              }}
            >
              login
            </Text>
          </TouchableOpacity>
        </Form>
      </Container>
    );
  }
}
let Styles = StyleSheet.create({
  button: {
    // backgroundColor: 'red',
    backgroundColor: "#b12ff3",
    width: 300,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    marginTop: "10%",
    borderRadius: 25,
    marginLeft: 25
  }
});
