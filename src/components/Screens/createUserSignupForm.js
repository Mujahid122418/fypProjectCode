import React, { Component } from 'react';
import ImagePicker from 'react-native-image-picker';
// AppRegistry, StyleSheet, Text, View, PixelRatio, TouchableOpacity, Image,
import { Alert, StyleSheet, PixelRatio, TouchableOpacity, Image } from 'react-native'
import { Container, Content, Thumbnail, Form, Item, View, Label, Input, Button, Text, ListItem } from 'native-base';
import Icon from 'react-native-vector-icons/FontAwesome5';

import { RadioButton } from 'react-native-paper';
import logo from '../../images/logo.png'
import MapScreen from './mapScreen';

import store from '../../store/store';


export default class createUserSignupForm extends Component {
  state = {
    type: "Business",
    checked: 'first',
    username: 'Mujahid',
    business: '',
    email: '',
    number: '',
    address: '',
    password: '123',
    image: '',
    ImageSource: null
  }
  selectPhotoTapped() {
    const options = {
      quality: 1.0,
      maxWidth: 500,
      maxHeight: 500,
      storageOptions: {
        skipBackup: true
      }
    };

    ImagePicker.showImagePicker(options, (response) => {
      console.log('Response = ', response);

      if (response.didCancel) {
        console.log('User cancelled photo picker');
      }
      else if (response.error) {
        console.log('ImagePicker Error: ', response.error);
      }
      else if (response.customButton) {
        console.log('User tapped custom button: ', response.customButton);
      }
      else {
        let source = { uri: response.uri };

        // You can also display the image using data:
        // let source = { uri: 'data:image/jpeg;base64,' + response.data };

        this.setState({
          base64Image: 'data:image/jpeg;base64,' + response.data,
          ImageSource: source

        });
      }
    });
  }
  createAccount = () => {

    // this.props.navigation.navigate("CreateAccount")
    store.dispatch({
      type: 'USER_SIGNING_UP',
      data: this.state
    });
    // Alert.alert(JSON.stringify(this.state.type));


  }
  static navigationOptions = {
    header: null
  }
  onChange = (evt) => {

    this.setState({
      [evt.target.name]: evt.target.value
    });
    // Alert.alert(evt.nativeEvent.target.name)
    console.log(evt)

  }
  // onClick = () => {
  //     Alert.alert('added');
  // }
  onLocationMarked = (location) => {
    this.setState({
      location: {
        type: "Point",
        coordinates: [location.latitude, location.longitude]
      }
    });
    Alert.alert('signup');
  }
  render() {
    const type = this.state.type;
    console.log(this.props)
    // const path = 'https://i.pinimg.com/originals/cd/ba/7a/cdba7ad02665c51892c4860f6fc201af.png'
    return (

      <Container>

        <Content>
          <Image style={{ width: 150, height: 150, marginLeft: 100, marginTop: 50 }} source={logo} />
          {/* <Thumbnail style={{ position: 'absolute', marginTop: '8%', width: 150, height: 100, flex: 1, justifyContent: 'center', alignSelf: 'center' }} large square source={{ uri: path }} /> */}
          <Form style={{ marginTop: '5%' }}>
            <View style={{ flex: 1, flexDirection: 'row', alignContent: 'center', justifyContent: 'center' }}>

              <Text>User</Text>
              <RadioButton
                value="User"


                status={this.state.type === 'User' ? 'checked' : 'unchecked'}
                onPress={() => { this.setState({ type: 'User' }); }}
              />
              <Text>business</Text>

              <RadioButton
                value="Business"

                status={this.state.type === 'Business' ? 'checked' : 'unchecked'}
                onPress={() => { this.setState({ type: 'Business', }); }}
              />
            </View>
            {this.state.type == "Business" && <MapScreen onLocationHandled={this.onLocationMarked}  />}
            <Item floatingLabel>
            <Icon name='user' size={25} color="black" />

              <Label>Username</Label>
              <Input name="username" value={this.state.username} onChangeText={(text) => { this.setState({ username: text }) }} />
            </Item>
            {this.state.type == "Business" && <Item floatingLabel>
              <Icon active name='business' />
              <Label>Business Name</Label>
              <Input name="business" value={this.state.business} onChangeText={(text) => { this.setState({ business: text }) }} />
            </Item>}
            <Item floatingLabel>
              <Icon active name='email' />
              <Label>Email</Label>
              <Input name="email" value={this.state.email} onChangeText={(text) => { this.setState({ email: text }) }} />
            </Item>
            <Item floatingLabel>
              <Icon active name='phone' />
              <Label> Contact Number</Label>
              <Input name="number" value={this.state.number} onChangeText={(text) => { this.setState({ number: text }) }} />
            </Item>
            <Item floatingLabel>
              <Icon active name='logo-apple' />
              <Label> Address</Label>
              <Input name="address" value={this.state.address} onChangeText={(text) => { this.setState({ address: text }) }} />
            </Item>

            <Item floatingLabel last>
              <Icon active name='key' />
              <Label>Password</Label>
              <Input name="password" value={this.state.password} onChangeText={(text) => { this.setState({ password: text }) }} />
            </Item>
            {this.state.type == "Business" &&
              <View style={styles.container}>

                <TouchableOpacity onPress={this.selectPhotoTapped.bind(this)}>
                  <View style={styles.ImageContainer}>
                    {this.state.ImageSource === null ? <Text>Select a Photo</Text> :
                      <Image name="image" value={this.state.Image} onChange={(image) => { this.setState({ image: image }) }} style={styles.ImageContainer} source={this.state.ImageSource} />
                    }
                  </View>


                </TouchableOpacity>

              </View>
            }
            <TouchableOpacity style={{
              backgroundColor: '#b12ff3', width: 300, height: 40, alignItems: 'center', justifyContent: 'center', marginTop: 50, borderRadius: 25, marginLeft: 28, marginBottom: 20
            }}
              // onClick={this.onClick}
              // block style={{ alignSelf: 'center', width: '95%', margin: 'auto', backgroundColor: 'black', marginTop: 30 }} iconLeft
              onPress={this.createAccount}
            >
              {/* <Icon name='unlock' /> */}
              <Text style={{color:'white'}}>SIGNUP</Text>
            </TouchableOpacity>

            {/* <Picker
                            mode="dropdown"
                            andriodIcon={<Icon name="arrow-down" />}
                            style={{ width: '100px' }}
                            placeholder="Select your SIM"
                            placeholderStyle={{ color: "#bfc6ea" }}
                            placeholderIconColor="#007aff"
                            selectedValue={this.state.selected2}
                            onValueChange={this.onValueChange2.bind(this)}
                        >
                            <Picker.Item label="Wallet" value="key0" />
                            <Picker.Item label="ATM Card" value="key1" />
                            <Picker.Item label="Debit Card" value="key2" />
                            <Picker.Item label="Credit Card" value="key3" />
                            <Picker.Item label="Net Banking" value="key4" />
                        </Picker> */}

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

const styles = StyleSheet.create({

  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    // backgroundColor: '#FFF8E1'
    marginTop: 20
  },

  ImageContainer: {
    borderRadius: 10,
    width: 250,
    height: 150,
    borderColor: '#9B9B9B',
    borderWidth: 1 / PixelRatio.get(),
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',


  },
 


});