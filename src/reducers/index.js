import getUser from './getUser';
import {combineReducers} from 'redux';

const allReducers=combineReducers({
    users:getUser
})

export default allReducers;