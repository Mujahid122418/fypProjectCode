import React, { Component } from "react";
import {
  Platform,
  StyleSheet,
  Button,
  Alert,
  Image,
  TouchableOpacity
} from "react-native";
import { Container, Thumbnail, View, Content } from "native-base";
import { Dimensions, Text, TouchableHighlight } from "react-native";
import locationLogo from "../../images/image.png";
import Logout from "../../images/logout.png";
import AsyncStorage from "@react-native-community/async-storage";
// import Geolocation from 'react-native-geolocation-service';
import MapView, { Marker } from "react-native-maps";
import store from "../../store/store";
import {ip} from './shareAPI';
function getDistanceFromLatLonInKm(lat1, lon1, lat2, lon2) {
  var R = 6371; // Radius of the earth in km
  var dLat = deg2rad(lat2 - lat1); // deg2rad below
  var dLon = deg2rad(lon2 - lon1);
  var a =
    Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.cos(deg2rad(lat1)) *
      Math.cos(deg2rad(lat2)) *
      Math.sin(dLon / 2) *
      Math.sin(dLon / 2);
  var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  var d = R * c; // Distance in km
  return d;
}

function deg2rad(deg) {
  return deg * (Math.PI / 180);
}

export default class MapScreen extends Component {
  static navigationOptions = {
    header: null
  };
  state = {
    focusedLocation: {
      latitude: 31.418715,
      longitude: 73.079109,
      latitudeDelta: 0.0022,
      longitudeDelta:
        (Dimensions.get("window").width / Dimensions.get("window").height) *
        0.0022
    },
    locationChosen: false,
    markers: [],
    logoutButton:false
  };
  componentWillMount = () => {
    // navigator.geolocation.getCurrentPosition(
    //     position => {
    //       const location = JSON.stringify(position);
    //       this.setState({ location });
    //       Alert.alert(location.coords.latitude.toString())
    //     },
    //     error => Alert.alert(error.message),
    //     { enableHighAccuracy: true, timeout: 20000, maximumAge: 1000 }
    //   );
    // Geolocation.getCurrentPosition(pos => {
    //     this.setState({
    //         focusedLocation: {
    //             latitude: pos.coords.latitude,
    //             longitude: pos.coords.longitude,
    //             latitudeDelta: 0.1022,
    //             longitudeDelta: Dimensions.get("window").width / Dimensions.get("window").height * 0.1022
    //         }
    //     });
    // },
    //     err => {
    //         // alert(err,'error');
    //         console.log('err', err)
    //     })
  };
  componentDidMount = evt => {
    if (this.props.navigation && this.props.navigation.getParam("readOnly")) {
      navigator.geolocation.getCurrentPosition(
        position => {
          this.map.animateToRegion({
            ...this.state.focusedLocation,
            latitude: position.coords.latitude,
            longitude: position.coords.longitude,
            latitudeDelta: 0.0022,
            longitudeDelta:
              (Dimensions.get("window").width /
                Dimensions.get("window").height) *
              0.0022
          });

          Alert.alert(position.toString());
          Alert.alert("add");
          fetch(
            ip+"getnearestlocations?latitude=" +
              position.coords.latitude +
              "&longitude=" +
              position.coords.longitude
          )
            .then(resp => resp.json())
            .then(businesses => {
              Alert.alert(
                "found nearest Car Rental Offices " + businesses.length
              );

              this.setState(prevState => {
                let previousState = prevState;
                var markers = [];

                businesses.forEach(business => {
                  // Alert.alert(business.location.coordinates[1].toString());
                  markers.push({
                    // icon: {
                    image: require("../../images/location.png"),
                    // image: { locationLogo },
                    // icon: {locationLogo},
                    title:
                      business.username +
                      "\n" +
                      business.distance.toPrecision(2) +
                      "km" +
                      "\n" +
                      business.distance.toPrecision(1) * 50 +
                      "RS",
                    // title: business.username,
                    number: business.number,
                    business: business.business,
                    address: business.address,
                    email: business.email,
                    carmodel: business.carModel,

                    coordinate: {
                      latitude: business.location.coordinates[0],
                      longitude: business.location.coordinates[1],
                      latitudeDelta: 0.0022,
                      longitudeDelta:
                        (Dimensions.get("window").width /
                          Dimensions.get("window").height) *
                        0.0022
                    }
                  });
                });

                markers.push({
                  coordinate: {
                    latitude: position.coords.latitude,
                    longitude: position.coords.longitude,
                    latitudeDelta: 0.0022,
                    // title: business.username,
                    longitudeDelta:
                      (Dimensions.get("window").width /
                        Dimensions.get("window").height) *
                      0.0022
                  }
                });
                return {
                  focusedLocation: {
                    // title: business.username,
                    latitude: position.coords.latitude,
                    longitude: position.coords.longitude,
                    latitudeDelta: 0.0022,
                    longitudeDelta:
                      (Dimensions.get("window").width /
                        Dimensions.get("window").height) *
                      0.0022
                  },
                  locationChosen: true,
                  markers: markers
                };
              });
            });
        },
        error => Alert.alert(error.message),
        { enableHighAccuracy: true, timeout: 20000, maximumAge: 1000 }
      );

      return;
    }
  };
  pickLocationHandler = event => {
    if (this.props.navigation && this.props.navigation.getParam("readOnly")) {
      return;
    }

    const coords = event.nativeEvent.coordinate;
    this.map.animateToRegion({
      ...this.state.focusedLocation,
      latitude: coords.latitude,
      longitude: coords.longitude,
      latitudeDelta: 0.0022,
      longitudeDelta:
        (Dimensions.get("window").width / Dimensions.get("window").height) *
        0.0022
    });

    if (!this.state.markers.length) {
      let coordsEvent = {
        nativeEvent: {
          coordinate: {
            latitude: coords.latitude,
            longitude: coords.longitude
          }
        }
      };
      this.props.onLocationHandled({
        latitude: coords.latitude,
        longitude: coords.longitude
      });

      this.setState(prevState => {
        let previousState = prevState;
        prevState.markers.push({
          coordinate: {
            latitude: coords.latitude,
            longitude: coords.longitude,
            latitudeDelta: 0.0022,
            longitudeDelta:
              (Dimensions.get("window").width /
                Dimensions.get("window").height) *
              0.0022
          }
        });
        return {
          focusedLocation: {
            latitude: coords.latitude,
            longitude: coords.longitude,
            latitudeDelta: 0.0022,
            longitudeDelta:
              (Dimensions.get("window").width /
                Dimensions.get("window").height) *
              0.0022
          },
          locationChosen: true,
          markers: previousState.markers
        };
      });
    } else {
      Alert.alert("Location already added");
    }
  };
  locateMeHandler = event => {
    navigator.geolocation.getCurrentPosition(
      pos => {
        let coordsEvent = {
          nativeEvent: {
            coordinate: {
              latitude: pos.coords.latitude,
              longitude: pos.coords.longitude
            }
          }
        };
        this.pickLocationHandler(coordsEvent);
        // Alert.alert((20).toString());
        this.props.onLocationHandled({
          latitude: pos.coords.latitude,
          longitude: pos.coords.longitude
        });
      },
      err => {
        alert("Getting Location failed. Please select manually.");
      }
    );
  };
  // export const logoutUser = () => dispatch => {
  //   try {
  //     AsyncStorage.removeItem("jwtToken");
  //   } catch (err) {
  //     alert("error in reomiving token");
  //   }
  //   setAuthToken(false);
  //   dispatch(RegisterAction.loginUser({}));
  // };
  logoutTokeStorage = () => {
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
    this.props.navigation.navigate("LogInScreen");
  };
  render() {
    // const uri = 'https://businessdial.pk/wp-content/uploads/2019/03/Add-Business-Get-Business-2.jpg'
    return (
      <View>
        {/* <View style={{ alignItems: 'center', marginTop: 0 }}>
										<Text style={{ fontSize: 30, fontWeight: 'bold', color: '#694fad' }}>
												Location
										</Text>
								</View> */}
        {/* <View style={style.imgContainer}>
          <TouchableOpacity onPress={this.logoutTokeStorage}>
            <Image source={Logout} style={style.logoutImg} />
          </TouchableOpacity>
        </View> */}
        <MapView
          initialRegion={this.state.focusedLocation}
          style={{ height: 500 }}
          onPress={this.pickLocationHandler}
          ref={ref => (this.map = ref)}
        >
          {this.state.locationChosen
            ? this.state.markers.map((item, index) => {
                // onPress={this.props.onLocationMarked}
                return (markerData => {
                  return (
                    <Marker
                      title={item.title}
                      key={index}
                      image={locationLogo}
                      style={{ width: 50, height: 50 }}
                      onPress={cords => {
                        this.props.navigation.navigate("CarRentalOffices", {
                          number: markerData.number,
                          business: markerData.business,
                          email: markerData.email,
                          address: markerData.address,
                          carmodel: markerData.carmodel
                        });
                      }}
                      coordinate={item.coordinate}
                    >
                      <Text style={style.textView}>{item.title}</Text>
                    </Marker>
                  );
                })(item);
              })
            : null}
        </MapView>
        {/* <View style={{ marginTop: 10 }}>
										<Button
												title="Locate me"
												onPress={this.locateMeHandler}
										/>
								</View> */}
        {/* <View style={{ marginTop: 10 }}>
										<Button
												title="Update Location"
												onPress={() => { this.setState({ markers: [] }) }}
										/>
								</View> */}
      </View>
    );
  }
}

const style = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F5FCFF"
  },
  textView: {
    fontSize: 14,
    color: "black"
  },
  // imgContainer: {
  //   position: "relative",
  //   flexDirection: "row",
  //   justifyContent: "flex-end",
  //   marginRight: 15
  // },

  // logoutImg: {
  //   width: 50,
  //   height: 50,
  //   position: "relative",
  //   right: 0
  // }
});
