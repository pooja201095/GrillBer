import {
    LOGIN_FAILED,
    LOGIN_SUCCESS,
    SIGNOUT_SUCCESS,
    SIGNUP_SUCCESS,
    SIGNUP_FAILED
  } from "../../Constants/constants";

export const signIn = (credentials) => {
    return (dispatch, getState,  getFirebase ) => {
        const firebase = getFirebase();

        firebase.auth().signInWithEmailAndPassword(
            credentials.email,
            credentials.password
        ).then(()=>{
            dispatch({type:LOGIN_SUCCESS});
        }).catch((err)=>{
            dispatch({type: LOGIN_FAILED ,err});
        });
    }
}

export const signOut = () =>{
    localStorage.removeItem('itemsInCart');
    return (dispatch, getState, getFirebase) =>{
        const firebase = getFirebase();
        firebase.auth().signOut().then(()=>{
            dispatch({type:  SIGNOUT_SUCCESS});
        })
    }
}

export const signUp = (newUser) => {
    return (dispatch, getState,  getFirebase ) => {
        const firebase = getFirebase();

        firebase.auth().createUserWithEmailAndPassword(
            newUser.email,
            newUser.password
        ).then(()=>{
            dispatch({type:SIGNUP_SUCCESS});
        }).catch((err)=>{
            dispatch({type:SIGNUP_FAILED,err});
        });
    }
}