import React, {Component} from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  TouchableOpacity
} from 'react-native';

class Page2 extends Component<{}> {
  static navigationOptions = {
    tabBarLabel: 'Profile'
  };

  onPress = (text) => {
    alert(text);
  }

  render() {
    return(
      <View style={styles.container}>
        <TouchableOpacity style={styles.btn} onPress={this.onPress.bind(this, "click 2")}>
          <Text style={styles.fontStyle}>返回上一页</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

var styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#E0EEE0"
  },
  fontStyle: {
    fontSize: 20,
  },
  btn: {
    backgroundColor: "#E5E5E5",
    width: 150,
    height: 50,
    borderWidth: 1,
    borderColor: "white",
    borderRadius: 4
  }
});

module.exports = Page2;
