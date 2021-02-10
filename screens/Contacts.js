import React,{useState, useEffect} from 'react'
// building component from react
import {
    View,
    Text,
    FlatList,
    TouchableOpacity,
    StyleSheet
} from 'react-native'
import { Feather } from '@expo/vector-icons';
import * as SQLite from "expo-sqlite";

import colors from '../utils/colors'
import ContactListItem from '../components/contactListItem'

const db= SQLite.openDatabase('contacts.db');


// function base component
export default function Contacts({navigation}){
  const [contacts, setContacts] = useState([]); // => means contacts that show in flatList didn't show any thing at the first time

  // when contacts screen renderd select all data from contacts table and show that ==> for that use from useEffect hook 
  useEffect(()=>{
    db.transaction((tx)=>{
      tx.executeSql('SELECT * FROM contact',[],(tx,{rows})=>{
        //all data that we select com in rows and we need to array from object
        var data=[];
        for(var i = 0; i<rows.length; i++) {
          data.push(rows[i]); 
        }
        //now we should change our state, at the first state is null contact
        // after that render data in (1 sec)
        setContacts(data);
      })
    })
  })

  return(
    <View>
      { contacts.length > 0 ? <FlatList
      data={contacts}
      renderItem={({item}) => { 
        return <ContactListItem name={item.name} phone={item.phone} onPress={()=> navigation.navigate('Profile',{item:item})}/>
      }}
      />: <View>
            <Text>There is no contact</Text>
        </View>}
      <TouchableOpacity style={styles.floatButton} onPress={()=> navigation.navigate('CreateContact')}>
        <Text>
          <Feather name="plus" size={28} color="white"/>
        </Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  floatButton: {
    backgroundColor:'orange',
    padding: 20,
    borderRadius: '50%',
  // postion = absolute => نظر به کامپوننت کلی در نظر گرفته میشود
    position: 'absolute',
    bottom: 40,
    right: 40
  }
})