import React, { Component } from 'react';
import {TabNavigator} from 'react-navigation';
import {
  Platform,
  StyleSheet,
  Text,
  View,
} from 'react-native';

import Page1 from "./Page1";
import Page2 from "./Page2";
import Page3 from "./Page3";
import Page4 from "./Page4";

const TabBarView = TabNavigator(
  {
    Page1: {screen : Page1},
    Page2: {screen : Page2},
    Page3: {screen : Page3},
    Page4: {screen : Page4}
  },
  {
    tabBarPosition: 'bottom',
    animationEnabled: false,
    tabBarOptions: {
      activeTintColor: '#e91e63',
    },
  }
);

module.exports = TabBarView;
