import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from "redux-thunk";
import rootReducer from './store/reducers/rootReducer';
import { getFirebase, ReactReduxFirebaseProvider,isLoaded } from "react-redux-firebase";
import firebase from './Config/firebaseConfig';
import { Provider,useSelector } from 'react-redux';
import ApolloClient from 'apollo-boost';
import {ApolloProvider} from '@apollo/react-hooks';


const client = new ApolloClient({
  uri:'http://localhost:4000/graphql'
})

const store = createStore(rootReducer,
    compose(
        applyMiddleware(thunk.withExtraArgument(getFirebase)),
        // reactReduxFirebase(firebase,{attachAuthIsReady:true}) 
      )
      );

      const reduxFirebase = {
        // userProfile: "users",
        // useFirestoreForProfile: true,
        enableLogging: true,
      };

      function AuthIsLoaded({ children }) {
        const auth = useSelector(state => state.firebase.auth)
        if (!isLoaded(auth)) return <div></div>;
            return children
    }
      
        ReactDOM.render(
          <ApolloProvider client={client}>
          <Provider store={store}>
          <ReactReduxFirebaseProvider
                firebase={firebase}
                config={reduxFirebase}
                dispatch={store.dispatch}
                attachAuthIsReady={true}
              >
                <AuthIsLoaded>
                <React.StrictMode>
                  <App />
                </React.StrictMode>
                </AuthIsLoaded>
              </ReactReduxFirebaseProvider>
            </Provider>
            </ApolloProvider>, 
            document.getElementById('root'));
