const initialState = {
    isRequesting:false,
}

export const LOGIN_STARTED = 'LOGIN_STARTED'
export const LOGIN_ENDS = 'LOGIN_ENDS'


export default function(state = initialState, action){

    switch (action.type) {
        case "LOGIN_STARTED":
            return {...state, isRequesting:true}
        case "LOGIN_ENDS":
            return {...state, isRequesting:false}
        default:
            return state;
    }
}