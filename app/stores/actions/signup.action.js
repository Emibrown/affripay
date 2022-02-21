import axios from 'axios'
import { instance, getHeaders } from './index.action'
import URL from '../../constants/url'

export const StartSignup = (data)=> async (dispatch)=>{
    dispatch({type:"SIGNUP_STARTED"})
    const headers = await getHeaders()
    instance.post(URL.signUp, data, {headers})
    .then(response=>{
        if(response.data.successResponse){
            dispatch({type:"SIGNUP_SUCCESS"})
        }else{
            dispatch({type:"SIGNUP_ERROR", payload:"Something went wrong"})
        }
    })
    .catch(err=>{
        dispatch({type:"SIGNUP_ERROR", payload:err.message})
    })
}