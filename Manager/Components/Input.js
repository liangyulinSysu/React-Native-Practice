import React from 'react';
import { TextInput, Text, View } from 'react-native';

const Input = ({ label, defaultText, contentText, onChangeText, isSecure = false}) => {
  return(
    <View style={styles.viewStyle}>
      <Text style={styles.textStyle}>{label}</Text>
      <TextInput
        style={styles.inputStyle}
        placeholder={defaultText}
        onChangeText={onChangeText}
        value={contentText}
        secureTextEntry={isSecure}
      />
    </View>
  );
}

const styles = {
  textStyle: {
    color:'#9c9c9c',
    fontSize: 18,
    flex: 1,
    marginLeft: 20,
    alignItems: 'center',
    justifyContent: 'center'
  },
  inputStyle: {
    fontSize: 18,
    flex: 2,
    marginLeft: 5,
    marginRight: 5
  },
  viewStyle: {
    marginTop: 10,
    marginBottom: 10,
    flexDirection: 'row',
    alignItems: 'center'
  }
}

export {Input};
