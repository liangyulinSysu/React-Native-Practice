import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  ListView,
  Image,
} from 'react-native';

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
      <View style={styles.cell}>
        <Image
          source={require("../Images/page1.png")}
          style={{width: 50, height: 50, margin: 25}}
        />
        <View style={{marginRight: 25, flex: 1}}>
          <Text style={{fontSize: 16}}>{rowData + " --> " + rowId}</Text>
        </View>
      </View>
    )
  }

  constructor(props) {
    super(props);

    var rawData = [
      "iOS会为同一张图片在相册中保存多个不同尺寸的副本。为了性能考虑，从这些副本中挑出最合适的尺寸显得尤为重要。",
      "对于一处200x200大小的缩略图，显然不应该选择最高质量的3264x2448大小的图片。如果恰好有匹配的尺寸，那么React Native会自动为你选好",
      "如果没有，则会选择最接近的尺寸进行缩放，但也至少缩放到比所需尺寸大出50%，以使图片看起来仍然足够清晰",
      "这一切过程都是自动完成的，所以你不用操心自己去完成这些繁琐且易错的代码。",
      "根据默认提取规则，本数据将会生成5个section。a、b、c、d、e分别为其对应的sectionId,我们并没有指定rowId，那么每一个section里将有两个row，rowId分别为默认的0和1,现在我们来运行程序，看看结果如何。",
      "然后我们在List组件中使用cloneWithRowsAndSections",
      "我们调用了dataSource对象提供的cloneWithRows方法给ListView的dataSource赋值"
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
    )
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
