import React from 'react';
import { TouchableOpacity, Text } from 'react-native';

const Button = ({title, onPress}) => {
  return(
    <TouchableOpacity
      onPress={onPress}
      style={styles.btnStyle}
    >
      <Text style={styles.titleStyle}>{title}</Text>
    </TouchableOpacity>
  );
}

const styles = {
  titleStyle: {
    fontSize: 18
  },
  btnStyle: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
    backgroundColor: 'cyan',
    padding: 10
  }
}

export {Button};
