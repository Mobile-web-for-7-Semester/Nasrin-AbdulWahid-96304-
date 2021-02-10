import React,{useState} from 'react'
// building component from react
import {
    View,
    Text,
    TextInput,
    TouchableOpacity,
    StyleSheet
} from 'react-native'
import * as SQLite from "expo-sqlite";

import colors from '../utils/colors'
const db= SQLite.openDatabase('contacts.db');

// function base component
export default function CreateContact({navigation}){
    // when the input name change --> the state input name shoule be change also
    const [name, setName]= useState(null);
    const [phone, setPhone]= useState(null);
    const [email, setEmail]= useState(null);

    const addContact=(name, phone, email) => {
        db.transaction(tx => {
            tx.executeSql('INSERT INTO contact(name, phone, email) VALUES(?, ?, ?);',[name, phone, email],() =>navigation.navigate('Contacts'));
        })
    }

    return(
       <View style={styles.formContainer}>
           {/* onChangeText==> when text change, the state also change */}
           <TextInput placeholder="Name" style={styles.input} value={name} onChangeText={()=> setName(name)} />
           <TextInput placeholder="Email" keyboardType="email-address" style={styles.input} value={email} onChangeText={()=> setEmail(email)} />
           <TextInput placeholder="Phone" keyboardType="numeric" style={styles.input} value={phone} onChangeText={()=> setPhone(phone)}/>
           
           <TouchableOpacity style={[styles.botton, {backgroundColor: colors.primary}]}>
               <Text style={styles.bottonTxt} onPress={()=>addContact(name, phone, email)}>Save</Text>
           </TouchableOpacity>
           <TouchableOpacity style={[styles.botton, {backgroundColor: 'red'}]}>
               <Text style={styles.bottonTxt}>Cancel</Text>
           </TouchableOpacity>
       </View> 
    )
}

const styles = StyleSheet.create({
   formContainer:{
       borderRadius:30,
       marginTop:60,
       paddingVertical: 20,
       paddingHorizontal: 40,
       backgroundColor: colors.white
   },
   input: {
       paddingBottom: 10,
       marginBottom: 10,
       borderBottomColor: colors.secondary,
       borderBottomWidth: 1
   },
   botton: {
       padding: 20,
       marginTop: 20,
       borderRadius: 5,
       justifyContent: 'center',
       alignItems: 'center'
   },
   bottonTxt: {
       color: colors.white
   }
})