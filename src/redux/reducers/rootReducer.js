import { combineReducers } from 'redux';
import matchesReducer from './MatchReducer';
import loginReducer from './LoginReducer';
export default combineReducers({
    matchesReducer,
    loginReducer
});