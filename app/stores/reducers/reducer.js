import {
    RESTORE_APP,
    APP_STATE,
    SWITCH_TO_DASHBOARD,
    LOGOUT,
    SET_USER
} from "../action";
const initialState = {
    user: null,
    appLoading: true,
    appState:0,
    authInitialScreen:"Onboarding"
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
    case SET_USER:
        return {
            ...state,
            user: action.payload.user,
        };
    case SWITCH_TO_DASHBOARD:
        return{
            ...state,
            appState:2
        };
    case LOGOUT:
        const authInitialScreen = action?.payload?.authInitialScreen
        return {
            user: null,
            appState:0,
            authInitialScreen:authInitialScreen || "Onboarding"
        };
  }
  return state
}

export default Reducer