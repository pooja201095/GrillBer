import {
    LOGIN_FAILED,
    LOGIN_SUCCESS,
    SIGNOUT_SUCCESS,
    SIGNUP_SUCCESS,
    SIGNUP_FAILED
  } from "../../Constants/constants";

const initState = {
    authError: null
};

const authReducer = (state = initState, action) => {
    switch (action.type) {
        case LOGIN_FAILED:
            console.log("Login error");
            return {
                ...state,
                authError: 'Login failed'
            }
        
        case LOGIN_SUCCESS:
            console.log('Login success');
            return {
                ...state,
                authError: null
            }

        case SIGNOUT_SUCCESS:
                console.log('logout success');
            return state;

        case SIGNUP_SUCCESS:
            console.log('Sign up success');
            return {
                ...state,
                authError: null
            }

            case SIGNUP_FAILED:
            console.log('Sign up failed');
            return {
                ...state,
                authError: action.err.message
            }

        default:
            return state;
    }
}

export default authReducer;