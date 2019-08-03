
import React, { Component } from "react";
import styles from "./sidebar.style";
import { connect } from "react-redux";
import { NavigationActions } from "react-navigation";
import { ScrollView, Text, View, Alert } from "react-native";
import AsyncStorage from "@react-native-community/async-storage";

import Icon from "react-native-vector-icons/Ionicons";
import store from "../../store/store";
class SideMenu extends Component {
  navigateToScreen = route => () => {
    const navigateAction = NavigationActions.navigate({
      routeName: route
    });
    this.props.navigation.dispatch(navigateAction);
  };
  constructor(props) {
    super(props);
    this.state = {
      show: true
    };
  }
  whencheck = () => {
    let variavble = this.state.show;
    this.setState({
      show: !variavble
    });
  };
  logout = () => {
    try {
      AsyncStorage.removeItem("jwtToken");
      alert("clear token");
    } catch (err) {
      alert("error in reomiving token");
    }
    store.dispatch({
      type: "USER_LOGGED_IN",
      payload: {}
    });
    // this.navigateToScreen("LogInScreen")
    this.props.navigation.navigate("LogInScreen");
  };

  render() {
    // let show =true
    return (
      <View style={styles.container}>
      
    
        <ScrollView>
         
          <View>
            <Text style={styles.sectionHeadingStyle}>other</Text>
            <View style={styles.navSectionStyle}>
              <Icon name="md-hand" size={20} color="black" />
              <Text
                style={styles.navItem}
                onPress={this.navigateToScreen("Mubashar")}
              >
                need help?
              </Text>
            </View>
            <View style={styles.navSectionStyle}>
              <Icon name="ios-cart" size={20} color="black" />
              <Text
                style={styles.navItem}
                onPress={this.navigateToScreen("Home")}
              >
                rate us
              </Text>
            </View>
            <View style={styles.navSectionStyle}>
              <Icon name="ios-undo" size={20} color="black" />
              <Text
                style={styles.navItem}
                onPress={this.navigateToScreen("Location")}
              >
                share
              </Text>
            </View>
            <View style={styles.navSectionStyle}>
              <Icon name="md-git-branch" size={20} color="black" />
              <Text
                style={styles.navItem}
                onPress={this.navigateToScreen("Home")}
              >
                term and condiation
              </Text>
            </View>
          </View>
          <View style={styles.navSectionStyle}>
            <Icon name="md-git-branch" size={20} color="black" />
            <Text
              style={styles.navItem}
              onPress={this.navigateToScreen("Home")}
            >
              privacy policy
            </Text>
          </View>

          <View style={styles.navSectionStyle}>
            <Icon name="md-call" size={20} color="black" />
            <Text
              style={styles.navItem}
              onPress={this.navigateToScreen("Home")}
            >
              contact us
            </Text>
          </View>
          
          <View style={styles.navSectionStyle}>
            <Icon name="md-power" size={20} color="black" />
            <Text
              style={styles.navItem}
              onPress={()=>{this.logout()}}
            >
              logout
            </Text>
          </View>
        </ScrollView>
        <View style={styles.footerContainer}>
          <Text>About this Release </Text>
          <Text>Gamica Could </Text>
        </View>
      </View>
    );
  }
}

export default SideMenu

// function mapStateToProps(state) {
//   console.log(state);

//   return {
//     User: state.User.auth || false,
//     success: state.User.auth.success || false,
//     status: state.User.auth.status || false
//   };
// }

// function mapDispatchToProps(dispatch) {
//   return {
//     signout: () => dispatch(logoutUser())
//   };
// }

// export default connect(
//   mapStateToProps,
//   mapDispatchToProps
// )(SideMenu);
