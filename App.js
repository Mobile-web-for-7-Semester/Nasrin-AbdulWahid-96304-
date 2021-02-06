import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native'; // for navigate between screen
import { createStackNavigator } from "@react-navigation/stack";
// becuase we use createStackNavigator in many time, for that we make a const
const Stack= createStackNavigator();

import Contact from "./screens/Contacts";
import CreateContact from "./screens/CreateContacts";
import Profile from "./screens/Profile";
import SearchScreen from './screens/SearchScreen'
export default function App() {
  // for moving one screen to another screen, we use navigation with navigate method
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Contact" component={Contact} />
        <Stack.Screen name="CreateContact" component={CreateContact} />
        <Stack.Screen name="Profile" component={Profile} />
        <Stack.Screen name="SearchScreen" component={SearchScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  )
} 

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8f4f4'
  }
});
