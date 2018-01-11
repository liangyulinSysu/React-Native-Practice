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
import {StackNavigator} from 'react-navigation';

var Page1 = require("./View/Page1");
var Page2 = require("./View/Page2");

export default App = StackNavigator(
  {
    Home: {screen : Page1},
    Second: {screen : Page2}
  },
  {
      // 配置初始化路由名称
       initialRouteName: 'Second',
       // 配置初始化路由的参数
       initialRouteParams: {content: '初始化传入的参数'},
       // 配置默认的 navigationOptions
       navigationOptions: {headerRight: <Text>右边Header</Text>},
       // 转场动画开始的回到
       onTransitionStart: () => {
           console.log('start')
       },
  }
);

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
