import {createStore} from 'redux';
import CakeReducer from './Shop/Cake/CakeReducer';

const store = createStore(CakeReducer);

export default store;