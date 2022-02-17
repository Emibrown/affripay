import {
  RESTORE_APP,
  APP_STATE,
  LOGOUT
} from "./action";
import { getAppState,clearData } from "../utils/db";

export const restoreApp = () => {
  return async (dispatch,getState) => {
    const appState = await getAppState()

    const action = {
      type: RESTORE_APP ,
      payload:{
        appState:appState?appState:getState().appState,
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

export const logoutUser = () => {
  return async (dispatch) => {
    clearData()
    .then((resp)=>{
      const action = {
        type: LOGOUT,
      }
      dispatch(action);
    })
    .catch((err)=>{
      console.log("Application error")
    })
  };
}



 