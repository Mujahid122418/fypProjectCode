import React from 'react';
import { createStackNavigator, createAppContainer, createSwitchNavigator, createBottomTabNavigator, createMaterialTopTabNavigator } from "react-navigation";
import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs'
import MapScreen from './mapScreen'
import NewsFeed from './newsFood'
import Cars from './cars'
import CarsList from './carsList';
import SplashScreen from './splashScreen';
import Chat from './chatBox';

import WelComeScreen from './welcomeScreen';
import LogInScreen from './loginInScreen';
import SignUpScreen from './signUpScreen';
import createUserSignupForm from './createUserSignupForm';
import Icon from 'react-native-vector-icons/FontAwesome5';
import CarRentalOffices from './rentalOfficesDiscription';
// Main Bottom tab naivgators
const appTabNavigator = createMaterialBottomTabNavigator({
  Home: {
    screen: MapScreen,
    animationEnabled: true,
    navigationOptions: { tabBarIcon: ({ tintColor, focused }) => (<Icon name="home" size={24} focused style={{ color: '#ff7043' }} />) }
  },
  Cars: {
    screen: Cars,
    navigationOptions: { tabBarIcon: ({ tintColor }) => (<Icon name="car" size={24} style={{ color: '#ff7043' }} />) }
  },
  // NewsFeed: {
  //   screen: NewsFeed,
  //   navigationOptions: { tabBarIcon: ({ tintColor }) => (<Icon name="newspaper" size={24} style={{ color: '#43a047' }} />) }

  // },

  ChatBox: {
    screen: Chat,
    navigationOptions: { tabBarIcon: ({ tintColor }) => (<Icon name="comment-dots" size={24} style={{ color: '#ff7043' }} />) }


  },
}, {
    activeColor: '#f0edf6',
    inactiveColor: '#3e2465',
    barStyle: { backgroundColor: '#694fad' },
  }
)


// main stack navigatior
const authStackNavigation = createStackNavigator({
  SplashScreen: {
    screen: SplashScreen,
    navigationOptions: {
      header: null
    }
  },
  Welcome: WelComeScreen,
  CarsList: CarsList,
  CarRentalOffices: CarRentalOffices,
  LOginSignup: WelComeScreen,
  LogInScreen: LogInScreen,
  SignUpScreen: SignUpScreen,
  CreateAccount: createUserSignupForm,
  App: {
    screen: appTabNavigator,
    navigationOptions: {
      header: null
    }
  },
})

// main switch navigators
// const AppNavigator = createSwitchNavigator({
//   // Home: HeaderComponent,
//   SplashScreen: authStackNavigation

// });

export default createAppContainer(authStackNavigation);
