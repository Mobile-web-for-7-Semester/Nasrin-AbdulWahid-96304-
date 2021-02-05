import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import SearchScreen from './screens/SearchScreen'
export default function App() {
  return (
    <View style={styles.container}>
      <SearchScreen />
    </View>
  );
} 

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8f4f4'
  }
});
