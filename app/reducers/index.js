import {combineReducers} from 'redux';

import tables from '../reducers/tables'

const allReducers = combineReducers({
    tables
});


export default allReducers;