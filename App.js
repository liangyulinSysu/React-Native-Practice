/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';
import {StackNavigator, TabNavigator} from 'react-navigation';

var Page1 = require("./View/Page1");
var Page2 = require("./View/Page2");
var Page3 = require("./View/Page3");
var Page4 = require("./View/Page4");
var Detail = require("./View/Detail");

const MainView = TabNavigator(
  {
    Page1: {screen : Page1},
    Page2: {screen : Page2},
    Page3: {screen : Page3},
    Page4: {screen : Page4}
  },
  {
    tabBarPosition: 'bottom',
    animationEnabled: true,
    tabBarOptions: {
      activeTintColor: '#e91e63',
    },
  }
);

export default App = StackNavigator(
  {
    Home: {screen : MainView},
    Detail: {screen : Detail}
  }
)

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
