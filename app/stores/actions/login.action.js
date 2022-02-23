import axios from 'axios'
import { APP_STATE, SET_USER } from '../action'
import { LOGIN_STARTED, LOGIN_ENDS} from '../reducers/login.reducer'
import { instance, getHeaders } from './index.action'
import URL from '../../constants/url'
import { failureMessage } from '../../helpers/helperFunctions'
import { setAppState, createUserData } from '../../utils/db'

export const StartLogin = (data)=> async (dispatch)=>{
    dispatch({type:LOGIN_STARTED})
    const headers = await getHeaders()
    return instance.post(URL.login, data, {headers})
    .then(async response =>{
        if(response.data.successResponse){
            const user = {
                ...response.data.successResponse.data.user,
                token:response.data.successResponse.data.token,
            }
            await createUserData(user)
            await setAppState(2)
            const action = {
                type: APP_STATE,
                payload:{
                    appState:2
                }
            }
            dispatch(action);
            dispatch({
                type: SET_USER,
                payload:{
                    user
                }
            });
            dispatch({type:LOGIN_ENDS})
        }else{            
            failureMessage(response.data.errorResponse.message)
            dispatch({type:LOGIN_ENDS})
        }
    })
    .catch(err=>{
        console.log(err.response.data);
        dispatch({type:LOGIN_ENDS})
    })
}