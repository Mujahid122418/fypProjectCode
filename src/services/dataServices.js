import {Alert} from 'react-native';

let dataService = {

    signup(data) {

        return new Promise((s, e) => {

            fetch('http://192.168.100.10:7080/signup', {
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
            fetch('http://192.168.100.10:7080/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(data)

            }).then(resp => resp.json()).then((resp) => {                
                s(resp);
            })
        })
    }

};


export default dataService;