import React, {useState} from 'react';
import { StyleSheet, View} from 'react-native';
import TextExample from './TextExample';

export default function App() {

  return (
    <View style={styles.container}>
      <TextExample />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },

});
