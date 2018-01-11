import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity
} from 'react-native';

class Page3 extends Component<{}> {
  static navigationOptions = {
    tabBarLabel: 'Page3',
    tabBarIcon: ({tintColor}) => (
      <Image
        source={require("../Images/page3.png")}
        style={{width:25, height:25, tintColor: tintColor}}
      />
    )
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
    backgroundColor: "#AEEEEE"
  }
});


module.exports = Page3;
