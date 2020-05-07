import authReducer from "./authReducer";
import grillReducer from './grillReducer';

import { combineReducers } from "redux";

import { firebaseReducer } from "react-redux-firebase";

const rootReducer = combineReducers({
    auth: authReducer,
    grill:grillReducer,
    firebase: firebaseReducer
});

export default rootReducer;