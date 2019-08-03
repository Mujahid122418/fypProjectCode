import {Alert} from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import jwtDecode from 'jwt-decode'
import {ip} from "../components/Screens/shareAPI"
// var decoded = jwt_decode(token);
let dataService = {

    signup(data) {

        return new Promise((s, e) => {

            fetch(ip+"signup", {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(data)
            }).catch((e)=>{
                Alert.alert(e.message)
            });

        });

    },
    login(data) {
        Alert.alert("login");
        return new Promise((s, e) => {
            fetch(ip+'login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(data)

            }).then(resp => resp.json()).then(async (resp) => { 
                try{
                   await AsyncStorage.setItem('jwttoken', resp.token)
                //    alert(resp.token)
                   s(resp.user);
                }catch(err) {
                    alert('err ading token', err)
                }
                      
                

            })
        })
    }

};


export default dataService;