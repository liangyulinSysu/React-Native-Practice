import React from 'react';
import { View, ActivityIndicator } from 'react-native';

const LoadingComponent = () => {
  return(
    <View>
      <ActivityIndicator style={styles.componentStyle} size="small"/>
    </View>
  );
}

const styles = {
  componentStyle: {
    alignSelf: 'center',
    margin: 10
  }
}

export {LoadingComponent};
