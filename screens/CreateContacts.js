import React from 'react'
// building component from react
import {
    View,
    Text,
    TextInput,
    TouchableOpacity,
    StyleSheet
} from 'react-native'

import colors from '../utils/colors'

// function base component
export default function CreateContact(){
    return(
       <View style={styles.formContainer}>
           <TextInput placeholder="Name" style={styles.input} />
           <TextInput placeholder="Email" keyboardType="email-address" style={styles.input} />
           <TextInput placeholder="Phone" keyboardType="numeric" style={styles.input}/>
           <TouchableOpacity style={styles.botton}>
               <Text style={styles.bottonTxt}>Save</Text>
           </TouchableOpacity>
           <TouchableOpacity style={styles.botton}>
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
       paddingHorizontal: 40
   },
   input: {
       paddingBottom: 10,
       marginBottom: 10,
       borderBottomColor: colors.secondary,
       borderBottomWidth: 1
   },
   botton: {
       padding: 20,
       marginBottom: 10,
       borderRadius: 5
   },
   bottonTxt: {
       color: colors.white
   }
})

// create a contact form to add new contact in createContact.js