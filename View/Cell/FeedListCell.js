import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  ListView,
  Image,
} from 'react-native';

class FeedListCell extends Component<{}> {
  render(){
    return(
      <View style={styles.container}>
        <Image source={{uri: this.props.link1}} style={styles.pic}/>
        <Image source={{uri: this.props.link2}} style={styles.pic}/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: 185,
    borderWidth: 1,
    borderColor: "white",
    flexDirection: "row",
  },
  pic: {
    margin: 10,
    height: 165,
    width: 165
  }
})

module.exports = FeedListCell;
