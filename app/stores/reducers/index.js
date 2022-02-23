import { combineReducers } from 'redux'
import Reducer from './reducer';
import Signup from './signup.reducer'
import Login from "./login.reducer"

export default combineReducers({
    AppState:Reducer,
    Signup,
    Login
})