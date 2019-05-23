

import {createStore, combineReducers} from 'redux';

import dataReducer from './data';

let reducers = combineReducers({dataReducer});
let store = createStore(reducers);

export default store;
