import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import Profile from './screens/Profile'
export default function App() {
  return (
    <View style={styles.container}>
      <Profile name="Nasrin" phone="0594820" email="nasrin@gmail.com"/>
    </View>
  );
} 

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});
