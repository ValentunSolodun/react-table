import {combineReducers} from 'redux';

import tables from '../reducers/tables'
import user from '../reducers/user'

const allReducers = combineReducers({
    tables,
    user
});


export default allReducers;