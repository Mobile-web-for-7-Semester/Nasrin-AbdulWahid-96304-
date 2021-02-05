import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import CreateContact from './screens/CreateContacts'
export default function App() {
  return (
    <View style={styles.container}>
      <CreateContact/>
    </View>
  );
} 

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8f4f4'
  }
});
