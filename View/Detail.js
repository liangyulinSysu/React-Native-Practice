import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  TouchableOpacity
} from 'react-native';

class Detail extends Component<{}> {
  static navigationOptions = {
    title : "Home"
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
    backgroundColor: "#00F5FF"
  }
});


module.exports = Detail;
