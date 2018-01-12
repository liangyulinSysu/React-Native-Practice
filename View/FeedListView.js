import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  ListView,
  Image,
} from 'react-native';

import FeedListCell from "./Cell/FeedListCell";

class FeedListView extends Component<{}> {
  static navigationOptions = {
    tabBarLabel: 'Page1',
    tabBarIcon: ({tintColor}) => (
      <Image
        source={require('../Images/page1.png')}
        style={{tintColor: tintColor, width: 25, height:25}}
      ></Image>
    ),
  };

  _renderRow(rowData, rowId) {
    return (
      <FeedListCell style={styles.cell} link1={rowData.link1} link2={rowData.link2}/>
    )
  }

  constructor(props) {
    super(props);

    var rawData = [
      // {
      //   link1: "../Images/test1.jpg",
      //   link2: "../Images/test2.jpg",
      // },
      {
        link1: "https://static.zara.net/photos///2017/I/0/2/p/0706/266/802/2/w/1920/0706266802_1_1_1.jpg?ts=1503416432998",
        link2: "https://static.zara.net/photos///2017/I/0/2/p/0706/200/710/2/w/1920/0706200710_2_2_1.jpg?ts=1496916714000",
      },
      {
        link1: "https://static.zara.net/photos///2017/I/0/2/p/0706/300/800/2/w/1920/0706300800_1_1_1.jpg?ts=1496913599000",
        link2: "https://static.zara.net/photos///2017/I/0/2/p/6861/314/800/2/w/1920/6861314800_2_2_1.jpg?ts=1506533568185",
      },
      {
        link1: "https://static.zara.net/photos///2017/I/0/2/p/0706/300/505/2/w/1920/0706300505_2_1_1.jpg?ts=1496913599000",
        link2: "https://static.zara.net/photos///2017/I/0/2/p/0706/361/407/2/w/1920/0706361407_2_1_1.jpg?ts=1512476724346",
      },
      {
        link1: "https://static.zara.net/photos///2018/V/0/2/p/5320/330/800/3/w/1920/5320330800_2_3_1.jpg?ts=1513867315767",
        link2: "https://static.zara.net/photos///2018/V/0/2/p/0706/445/812/3/w/1920/0706445812_2_1_1.jpg?ts=1513946316495",
      },
      {
        link1: "https://static.zara.net/photos///2018/V/0/2/p/3918/401/401/2/w/1920/3918401401_2_1_1.jpg?ts=1512662249000",
        link2: "https://static.zara.net/photos///2018/V/0/2/p/5854/456/704/2/w/1920/5854456704_1_1_1.jpg?ts=1515579550064",
      },
      {
        link1: "https://static.zara.net/photos///2018/V/0/2/p/6571/707/606/2/w/1920/6571707606_2_1_1.jpg?ts=1513785837134",
        link2: "https://static.zara.net/photos///2018/V/0/2/p/6571/707/500/2/w/1920/6571707500_1_1_1.jpg?ts=1513878949761",
      },
      {
        link1: "https://static.zara.net/photos///2018/V/0/2/p/0495/405/401/2/w/1920/0495405401_6_1_1.jpg?ts=1513619856695",
        link2: "https://static.zara.net/photos///2018/V/0/2/p/1564/361/400/2/w/1920/1564361400_1_1_1.jpg?ts=1514993223792",
      }
    ];

    var ds = new ListView.DataSource({
      rowHasChanged:(r1, r2) => r1 != r2,
    })
    this.state = {
      dataSource: ds,
      data: rawData
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <ListView
          style={styles.listView}
          dataSource={this.state.dataSource.cloneWithRows(this.state.data)}
          renderRow={(rowData, sectionId, rowId) => this._renderRow(rowData, rowId)}
          showsVerticalScrollIndicator={false}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "center",
    backgroundColor: "#FFEFD5",
  },
  listView: {
    marginTop: 25,
  },
  cell: {
    flexDirection: "row",
    alignItems: "center",
    borderColor: "white",
    borderWidth: 1,
    height: 150
  }
});

module.exports = FeedListView;
