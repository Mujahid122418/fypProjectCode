import React, { Component } from "react";
import ImagePicker from "react-native-image-picker";
// AppRegistry, StyleSheet, Text, View, PixelRatio, TouchableOpacity, Image,
import {
  Alert,
  StyleSheet,
  PixelRatio,
  TouchableOpacity,
  Image
} from "react-native";
import {
  Container,
  Content,
  Thumbnail,
  Form,
  Item,
  View,
  Label,
  Input,
  Button,
  Text,
  ListItem
} from "native-base";

import Icon from "react-native-vector-icons/Ionicons";

import { RadioButton } from "react-native-paper";
import logo from "../../images/logo.png";
import MapScreen from "./mapScreen";

import store from "../../store/store";
import { validate } from "@babel/types";

const initState = {
  type: "Business",
  checked: "first",
  username: "",
  usernameError: "",
  business: "",
  businessError: "",
  email: "",
  emailError: "",
  number: "",
  numberError: "",
  address: "",
  addressError: "",
  drivingLicenceNum: "",
  drivingLicenceNumError: "",
  password: "",
  passwordError: "",
  image: "",
  Error: "",
  carModel: "",
  ErrorcarModel: "",
  photo: null
};

export default class createUserSignupForm extends Component {
  state = initState;

  // selectPhotoTapped() {
  //   const options = {
  //     quality: 1.0,
  //     maxWidth: 500,
  //     maxHeight: 500,
  //     storageOptions: {
  //       skipBackup: true
  //     }
  //   };
  //   ImagePicker.showImagePicker(options, (response) => {
  //     console.log('Response = ', response);

  //     if (response.didCancel) {
  //       console.log('User cancelled photo picker');
  //     }
  //     else if (response.error) {
  //       console.log('ImagePicker Error: ', response.error);
  //     }
  //     else if (response.customButton) {
  //       console.log('User tapped custom button: ', response.customButton);
  //     }
  //     else {
  //       let source = { uri: response.uri };

  //       // You can also display the image using data:
  //       // let source = { uri: 'data:image/jpeg;base64,' + response.data };

  //       this.setState({
  //         base64Image: 'data:image/jpeg;base64,' + response.data,
  //         ImageSource: source

  //       });
  //     }
  //   });
  // }
  handleChoosePhoto = () => {
    const options = {
      noData: true
    };
    ImagePicker.launchImageLibrary(options, response => {
      if (response.uri) {
        this.setState({ photo: response });
      }
    });
  };
  createAccount = () => {
    // this.props.navigation.navigate("CreateAccount")
    store.dispatch({
      type: "USER_SIGNING_UP",
      data: this.state
    });
    const isValid = this.validate();
    if (isValid) {
      this.setState({ initState });
    }
    // Alert.alert(' form submit');
    // Alert.alert(JSON.stringify(this.state.type));
    // const { username } = this.state;
    // if (username == "") {
    //   // Alert.alert('plz enter user name');
    //   this.setState({
    //     Error: "plz enter first name"
    //   })
    // } else {
    //   this.setState({
    //     Error: 'your form submited successfully'
    //   })
    // }
  };
  static navigationOptions = {
    header: null
  };
  onChange = evt => {
    this.setState({
      [evt.target.name]: evt.target.value
    });
    // Alert.alert(evt.nativeEvent.target.name)
    // console.log(evt)
  };
  validate = () => {
    let usernameError = "";
    let businessError = "";
    let emailError = "";
    let numberError = "";
    let addressError = "";
    let drivingLicenceNumError = "";
    let ErrorcarModel = "";
    let passwordError = "";
    if (!this.state.username) {
      usernameError = "plz enter username";
    }
    if (!this.state.business) {
      businessError = "plz enter business name";
    }
    if (!this.state.email) {
      emailError = "plz enter email";
    }
    if (!this.state.number) {
      numberError = "plz enter number";
    }
    if (!this.state.address) {
      addressError = "plz enter address";
    }
    if (!this.state.drivingLicenceNum) {
      drivingLicenceNumError = "plz enter driving licence number";
    }
    if (!this.state.ErrorcarModel) {
      ErrorcarModel = "plz enter car name & model";
    }
    if (!this.state.password) {
      passwordError = "plz enter password";
    }
    if (
      usernameError ||
      businessError ||
      emailError ||
      numberError ||
      addressError ||
      drivingLicenceNumError ||
      passwordError
    ) {
      this.setState({
        usernameError,
        businessError,
        emailError,
        numberError,
        drivingLicenceNumError,
        passwordError,
        addressError
      });
      return false;
    }
    return true;
  };

  onLocationMarked = location => {
    this.setState({
      location: {
        type: "Point",
        coordinates: [location.latitude, location.longitude]
      }
    });
    Alert.alert("signup");
  };
  render() {
    const { photo } = this.state;
    const type = this.state.type;
    console.log(this.props);
    // const path = 'https://i.pinimg.com/originals/cd/ba/7a/cdba7ad02665c51892c4860f6fc201af.png'
    return (
      <Container>
        <Text
          style={{
            color: "red",
            textAlign: "center",
            justifyContent: "center"
          }}
        >
          {this.state.Error}
        </Text>

        <Content>
          <Image
            style={{ width: 150, height: 150, marginLeft: 100, marginTop: 50 }}
            source={logo}
          />
          {/* <Thumbnail style={{ position: 'absolute', marginTop: '8%', width: 150, height: 100, flex: 1, justifyContent: 'center', alignSelf: 'center' }} large square source={{ uri: path }} /> */}
          <Form onSubmit={this.handelSubmit} style={{ marginTop: "5%" }}>
            <View
              style={{
                flex: 1,
                flexDirection: "row",
                alignContent: "center",
                justifyContent: "center"
              }}
            >
              <Text>User</Text>
              <RadioButton
                value="User"
                status={this.state.type === "User" ? "checked" : "unchecked"}
                onPress={() => {
                  this.setState({ type: "User" });
                }}
              />
              <Text>business</Text>

              <RadioButton
                value="Business"
                status={
                  this.state.type === "Business" ? "checked" : "unchecked"
                }
                onPress={() => {
                  this.setState({ type: "Business" });
                }}
              />
            </View>
            {this.state.type == "Business" && (
              <MapScreen onLocationHandled={this.onLocationMarked} />
            )}

            <Item >
            <Icon  name="md-person" size={20} color="black"  style={{marginRight:10}} />
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
            {this.state.type == "Business" && (
              <Item>
                <Icon name="md-people" size={20} color="black"  style={{marginRight:10}} />
                <Label>Business Name</Label>
                <Input
                  name="business"
                  value={this.state.business}
                  onChangeText={text => {
                    this.setState({ business: text });
                  }}
                />
              </Item>
            )}
            {this.state.businessError && this.state.type == "Business" ? (
              <View>
                <Text style={{ color: "red", textAlign: "center" }}>
                  {this.state.businessError}
                </Text>
              </View>
            ) : null}
            <Item>
              {/* <Icon active name="email" /> */}
              <Icon name="md-mail" size={20} color="black"  style={{marginRight:10}}  />
              <Label>Email </Label>

              <Input
                name="email"
                value={this.state.email}
                onChangeText={text => {
                  this.setState({ email: text });
                }}
              />
            </Item>
            {this.state.emailError ? (
              <View>
                <Text style={{ color: "red", textAlign: "center" }}>
                  {this.state.emailError}
                </Text>
              </View>
            ) : null}
            <Item >
            <Icon name="ios-call" size={20} color="black"  style={{marginRight:10}} />
              
              <Label> Contact Number</Label>
              <Input
                name="number"
                value={this.state.number}
                onChangeText={text => {
                  this.setState({ number: text });
                }}
              />
            </Item>
            {this.state.numberError ? (
              <View>
                <Text style={{ color: "red", textAlign: "center" }}>
                  {this.state.numberError}
                </Text>
              </View>
            ) : null}
            <Item >
              <Icon  name="md-pin" size={20} color="black"  style={{marginRight:10}} />
              <Label> Address</Label>
              <Input
                name="address"
                value={this.state.address}
                onChangeText={text => {
                  this.setState({ address: text });
                }}
              />
            </Item>
            {this.state.addressError ? (
              <View>
                <Text style={{ color: "red", textAlign: "center" }}>
                  {this.state.addressError}
                </Text>
              </View>
            ) : null}
            {this.state.type == "Business" && (
              <Item >
                <Icon  name="ios-keypad" size={20} color="black" style={{marginRight:10}} />
                <Label> Driving Licence Number</Label>
                <Input
                  name="drivingLicenceNum"
                  value={this.state.drivingLicenceNum}
                  onChangeText={text => {
                    this.setState({ drivingLicenceNum: text });
                  }}
                />
              </Item>
            )}
            {this.state.type == "Business" && (
              <Item >
                <Icon  name="md-car" size={20} color="black"  style={{marginRight:10}} />
                <Label> Car Model</Label>
                <Input
                  name="carModel"
                  value={this.state.carModel}
                  onChangeText={text => {
                    this.setState({ carModel: text });
                  }}
                />
              </Item>
            )}
            {this.state.drivingLicenceNumError &&
            this.state.type == "Business" ? (
              <View>
                <Text style={{ color: "red", textAlign: "center" }}>
                  {this.state.drivingLicenceNumError}
                </Text>
              </View>
            ) : null}
            <Item >
              <Icon  name="md-lock" size={20} color="black"   style={{marginRight:10}} />
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
            {/* {this.state.type == "Business" &&
              <View style={styles.container}>
                <TouchableOpacity onPress={this.selectPhotoTapped.bind(this)}>
                  <View style={styles.ImageContainer}>
                    {this.state.ImageSource === null ? <Text>Select a Photo</Text> :
                      <Image name="image" value={this.state.Image} onChange={(image) => { this.setState({ image: image }) }} style={styles.ImageContainer} source={this.state.ImageSource} />
                    }
                  </View>
                </TouchableOpacity>
              </View>
            } */}
            {this.state.type == "Business" && (
              <View style={styles.container}>
                <View
                  style={{
                    flex: 1,
                    alignItems: "center",
                    justifyContent: "center"
                  }}
                >
                  {photo && (
                    <Image
                      source={{ uri: photo.uri }}
                      // style={{ width: 250, height: 150 }}
                      style={styles.ImageContainer}
                    />
                  )}
                  <TouchableOpacity title="Choose Photo" onPress={this.handleChoosePhoto}>
                    <Text>Select Photo</Text>
                  </TouchableOpacity>
                </View>
              </View>
            )}
            <TouchableOpacity
              style={{
                backgroundColor: "#b12ff3",
                width: 300,
                height: 40,
                alignItems: "center",
                justifyContent: "center",
                marginTop: 50,
                borderRadius: 25,
                marginLeft: 28,
                marginBottom: 20
              }}
              // onClick={this.onClick}
              // block style={{ alignSelf: 'center', width: '95%', margin: 'auto', backgroundColor: 'black', marginTop: 30 }} iconLeft
              onPress={this.createAccount}
            >
              {/* <Icon name='unlock' /> */}
              <Text style={{ color: "white" }}>SIGNUP</Text>
            </TouchableOpacity>
          </Form>
        </Content>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    // backgroundColor: '#FFF8E1'
    marginTop: 20
  },

  ImageContainer: {
    borderRadius: 10,
    width: 250,
    height: 150,
    borderColor: "#9B9B9B",
    borderWidth: 1 / PixelRatio.get(),
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "white"
  }
});
