import {
    RESTORE_APP,
    APP_STATE,
    SWITCH_TO_DASHBOARD,
    LOGOUT
} from "./action";
const initialState = {
    user: null,
    appLoading: true,
    appState:0,
}

const Reducer = (state = initialState, action) => {
  switch (action.type) {
    case RESTORE_APP:
        return {
            ...state,
            appLoading: false,
            appState: action.payload.appState,
        };
    case APP_STATE:
        return {
            ...state,
            appState: action.payload.appState,
        };
    case SWITCH_TO_DASHBOARD:
        return{
            ...state,
            appState:2
        };
    case LOGOUT:
        return {
            user: null,
            appState:0,
        };
  }
  return state
}

export default Reducer