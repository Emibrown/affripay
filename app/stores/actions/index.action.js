import axios from 'axios'
import { getAppToken } from "../../utils/db"

export const getHeaders = async ()=>{
    let headers = {
        "Content-Type":"application/json",
        Accept:"application/json",
    }
    const token = await getAppToken()
    if(token){
        headers["x-access-token"] = token
    }
    return headers
}

export const instance = axios.create({
    baseURL:"https://test-afrirpay.herokuapp.com"
})