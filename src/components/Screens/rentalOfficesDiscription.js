import React, { Component } from 'react';
import SendSMS from 'react-native-sms';
import call from 'react-native-phone-call';
import { View, Text, StyleSheet, Image, Dimensions, ScrollView, Button, TouchableOpacity, Alert } from 'react-native';
import officeImage from '../../images/office.jpg';
import Icon from 'react-native-vector-icons/Ionicons';
import user from '../../images/capton.jpg';
import rating from '../../images/rating.png';


const { width: WIDTH } = Dimensions.get('window');
export default class CarRentalOffices extends Component {
    state = {
        users: []
    }
    constructor(props) {
        super(props);

        this.number = this.props.navigation.getParam('number');
        this.business = this.props.navigation.getParam('business');
        // Alert.alert(this.business);


        fetch('http://192.168.100.66:7080/alluser', {
            method: 'GET',
            headers: {
                'Content-Type': 'applocation/json'
            }
        }).then((resp) => resp.json()).then((resp) => {
            this.setState({ users: resp })
        })
    }

    call = () => {
        const args = {
            number: this.number, // String value with the number to call
            prompt: false // Optional boolean property. Determines if the user should be prompt prior to the call 
        }


        call(args).catch(console.error)
    }
    someFunction=()=> {

        SendSMS.send({
            body: 'hy...? hlw Captain!',
            recipients: [this.number],
            successTypes: ['sent', 'queued'],
            allowAndroidSendWithoutReadPermission: true
        }, (completed, cancelled, error) => {

            console.log('SMS Callback: completed: ' + completed + ' cancelled: ' + cancelled + 'error: ' + error);

        });
    }
    render() {
        return (
            <ScrollView>
                <View style={style.container}>
                    <View>
                        <Image source={officeImage} style={style.officeImage} />
                    </View>
                    <View style={style.body}>
                        <Image source={user} style={style.pic} />
                        <View>
                            <Text style={style.titleText}>{this.business}</Text>
                        </View>
                        <View style={{ width: 200, flexDirection: 'row', marginTop: 20, marginLeft: 20 }}>
                            <Image source={rating} style={{ marginTop: 0, marginRight: 10 }} />
                            <Text>47 (3541,000 Reviews)</Text>
                        </View>
                        <View style={{ alignItems: 'center', marginLeft: 20, marginTop: 20 }}>
                            <Text style={{ fontSize: 12, fontWeight: 'normal', textAlign: 'justify' }}>
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                                when an unknown printer took a galley of type and
                                scrambled it to make a type specimen book.
                        It has survived not only five centuries, </Text>
                        </View>
                        <TouchableOpacity onPress={() => this.props.navigation.navigate('CarsList')} style={[style.buttonStyle, { marginTop: 40, marginLeft: 20 }, shadow]}>
                            <Text style={{ color: 'white' }}>Available Cars</Text>
                        </TouchableOpacity>

                        <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
                            <TouchableOpacity onPress={this.call} style={[style.contactBtn, { marginTop: 50, marginRight: 20 }, shadow]}>
                                <Icon name='ios-call' size={25} color='white' />
                                <Text style={{ color: 'white', marginLeft: 5 }}>Call</Text>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={this.someFunction} style={[style.contactBtn, { marginTop: 50 }, shadow]}>
                                <Icon name='ios-chatboxes' size={25} color='white' />
                                <Text style={{ color: 'white', marginLeft: 5 }}>Sms</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </ScrollView>
        );
    }
}
const style = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        alignItems: 'center',
    },
    contactBtn: {
        backgroundColor: '#de2d3d',
        width: 140,
        height: 30,
        borderRadius: 25,
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
        marginBottom: 30
    },
    officeImage: {
        width: WIDTH,
        height: 250,
        marginTop: 20,
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
    },
    pic: {
        width: 80,
        height: 80,
        borderRadius: 75,
        left: 250,
        top: -45,
        position: 'absolute'
    },
    titleText: {
        fontSize: 30,
        fontWeight: 'bold',
        color: 'black',
        marginTop: 50,
        marginLeft: 20

    },
    body: {
        width: WIDTH,
        marginTop: -40,
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        backgroundColor: 'white'
    },
    buttonStyle: {
        backgroundColor: '#de2d3d',
        width: 300,
        height: 30,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 10,
        borderRadius: 25
    }
});
const shadow = {
    shadowColor: '#30C1DD',
    shadowRadius: 10,
    shadowOpacity: 0.6,
    elevation: 8,
    shadowOffset: {
        width: 0,
        height: 4
    }
}