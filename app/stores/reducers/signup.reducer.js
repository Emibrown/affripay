const initialState = {
    isRequesting:false,
    signupError:null
}

export default function(state = initialState, action){

    switch (action.type) {
        case "SIGNUP_STARTED":
            return {...state, isRequesting:true}

        case "SIGNUP_SUCCESS":
            return {...state, isRequesting:false}
        
        case "SIGNUP_ERROR":
            return {...state, isRequesting:false, signupError:action.payload}
        default:
            return state;
    }
}