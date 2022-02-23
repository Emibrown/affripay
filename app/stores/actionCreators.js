import {
  RESTORE_APP,
  APP_STATE,
  LOGOUT,
  SET_AUTH_SCREEN,
  SET_USER
} from "./action";
import { getAppState,clearData, getUserData } from "../utils/db";

export const restoreApp = () => {
  return async (dispatch,getState) => {
    let appState = await getAppState()
    if(appState == 2){
      appState = 1
    }
    const user = await getUserData()
    console.log("restoreApp",user);
    dispatch({
        type: SET_USER,
        payload:{
            user
        }
    });
    const action = {
      type: RESTORE_APP ,
      payload:{
        appState:appState?appState:0
      }
    }
    dispatch(action);
  };
}

export const changeState = () => {
  return async (dispatch,getState) => {
    const action = {
      type: APP_STATE ,
      payload:{
        appState:2
      }
    }
    dispatch(action);
  };
}


export const switchToDashboard = ()=> (dispatch)=>{
  dispatch({
    type: RESTORE_APP,
    payload:2
  })
}

export const logoutUser = (screen=null) => {
  return async (dispatch) => {
    clearData()
    .then((resp)=>{
      const action = {
        type: LOGOUT,
        payload:{
          authInitialScreen:screen
        }
      }
      dispatch(action);
    })
    .catch((err)=>{
      console.log("Application error")
    })
  };
}




 