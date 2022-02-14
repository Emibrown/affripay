import {
  RESTORE_APP,
  SWITCH_TO_DASHBOARD
} from "./action";
import { getAppState } from "../utils/db";

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


export const switchToDashboard = ()=> (dispatch)=>{
  dispatch({
    type: RESTORE_APP,
    payload:2
  })
}



 