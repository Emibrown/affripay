import {
  RESTORE_APP,
  APP_STATE
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

export const changeState = () => {
  return async (dispatch,getState) => {
    const appState = await getAppState()

    const action = {
      type: APP_STATE ,
      payload:{
        appState:2
      }
    }

    dispatch(action);
  };
}







 