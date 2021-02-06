import React from 'react';
import { StyleSheet, Text, Touchable, TouchableOpacity, View } from 'react-native';
import { MaterialIcons } from "@expo/vector-icons";
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
        <Stack.Screen name="Contact" component={Contact}
        options={({navigation}) => ({
          headerRight:()=>(
            <TouchableOpacity style={{paddingRight:20}} onPress={()=> navigation.navigate('Search')} style={{paddingRight:20}}>
              <Text>
                <MaterialIcons name="search" size={24} color="black"/>
              </Text>
            </TouchableOpacity>
          )
        })}
        />
        <Stack.Screen name="CreateContact" component={CreateContact} />
        <Stack.Screen name="Profile" component={Profile} />
        <Stack.Screen name="Search" component={SearchScreen} />
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
