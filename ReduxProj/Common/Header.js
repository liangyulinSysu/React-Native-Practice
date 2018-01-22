import React from 'react';
import { View, Text } from 'react-native';

const Header = ({ headerText }) => {
  return(
    <View style={[styles.headerStyle, styles.containerStyle]}>
      <Text style={styles.textStyle}>{headerText}</Text>
    </View>
  );
}

const styles = {
  containerStyle: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  headerStyle: {
    height: 64,
    paddingTop: 18,
    shadowOffset: { width: 0, height: 2 },
    shadowColor: '#000',
    shadowOpacity: 0.5
  },
  textStyle: {
    fontSize: 20,
  }
}

export { Header };
