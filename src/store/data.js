import data from '.././services/dataServices';
import { Alert } from 'react-native';
import store from './store';

let initialData = {
   items: [],
   loggedInUser: {},
   in_process: false
};

const dataReducer = (state = initialData, action) => {

   let newState = JSON.parse(JSON.stringify(state));

   switch (action.type) {

      case 'USER_SIGNED_UP':
         newState.in_process = false;
         action.navigate('Login');
         break;

      case 'USER_SIGNING_UP':
         newState.in_process = true;
         // Alert.alert(action.data.number);
         data.signup(action.data).then(() => {

            store.dispatch({
               type: 'USER_SIGNED_UP',

            })

         });


      case 'USER_LOGGED_IN':         
         newState.loggedInUser = action.payload;
         action.ctx && action.ctx.navigate('App', {
            readOnly:true
         });
         return newState;      

      case 'USER_LOGIN':
         newState.in_process = true;
         let ctx = action.ctx;
         // Alert.alert("10");
         data.login(action.data).then((resp) => {        

            if(!resp){
               Alert.alert("Invalid credentials");
               return;
            }
            
            store.dispatch({
               type: 'USER_LOGGED_IN',
               ctx: ctx,
               payload:resp || resp
            })
         });

      // return newState;


   }

   return state;

}


export default dataReducer;