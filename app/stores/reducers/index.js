import { combineReducers } from 'redux'
import Reducer from './reducer';
import Signup from './signup.reducer'

export default combineReducers({
    AppState:Reducer,
    Signup
})