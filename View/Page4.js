import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  TouchableOpacity
} from 'react-native';

class Page4 extends Component<{}> {
  static navigationOptions = {
    tabBarLabel: 'Page4'
  };

  onPress = () => {
    var { navigate } = this.props.navigation;
    navigate('Second', {user : "haha"});
  }

  render(){
    return(
      <View style={styles.container}>
      </View>
    );
  }
}

var styles = StyleSheet.create({
  container : {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#B0E0E6"
  }
});


module.exports = Page4;
