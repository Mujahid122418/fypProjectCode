import {Alert} from 'react-native';

let dataService = {

    signup(data) {

        return new Promise((s, e) => {

            fetch('http://192.168.100.26:7080/signup', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(data)
            });

        });

    },
    login(data) {
        Alert.alert("adss");
        return new Promise((s, e) => {
            fetch('http://192.168.100.26:7080/login', {
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