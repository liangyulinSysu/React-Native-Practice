import React from 'react';
import { View } from 'react-native';

const Card = ( props ) => {
  return(
    <View style={styles.containerStyle}>
      {props.children}
    </View>
  );
}

const styles = {
  containerStyle: {
    marginTop: 74,
    marginLeft: 10,
    marginRight: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2},
    shadowRadius: 2,
    shadowOpacity: 0.5
  }
}

export {Card};
