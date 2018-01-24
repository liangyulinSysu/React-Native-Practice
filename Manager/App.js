import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Provider } from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import reducers from './Reducer';
import firebase from 'firebase';
import LoginForm from './LoginForm';
import ReduxThunk from 'redux-thunk';
import RouterComponent from './Router';

class App extends Component {
  componentWillMount() {
    const config = {
      apiKey: 'AIzaSyBTBHCPBLMtfVkxAOEeUeGXFjQaGiK1ooU',
      authDomain: 'projecty-61e62.firebaseapp.com',
      databaseURL: 'https://projecty-61e62.firebaseio.com',
      projectId: 'projecty-61e62',
      storageBucket: '',
      messagingSenderId: '904428058400'
    };
    firebase.initializeApp(config);
  }

  render(){
    const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));
    return(
      <Provider store={store}>
        <RouterComponent />
        {/* <LoginForm /> */}
      </Provider>
    );
  }
}

export default App;
