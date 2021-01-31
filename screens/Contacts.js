import React from 'react'
// building component from react
import {
    View,
    Text,
    FlatList,
    StyleSheet
} from 'react-native'

import colors from '../utils/colors'
import ContactListItem from '../components/contactListItem'

const contacts = [
    { id:'1', name:'Nasrin', phone:'8489458', email:'nasrin@gmail.com' },
    { id:'2', name:'Nargis', phone:'8466758', email:'nargis@gmail.com' },
    { id:'3', name:'Ryhana', phone:'8494458', email:'ryhana@gmail.com' },
    { id:'4', name:'fatemeh', phone:'8489458', email:'fatemeh@gmail.com' },
    { id:'5', name:'zahra', phone:'8489458', email:'zahra@gmail.com' },
    { id:'6', name:'Marzia', phone:'8489458', email:'marzia@gmail.com' },
    { id:'1', name:'Nasrin', phone:'8489458', email:'nasrin@gmail.com' },
    { id:'2', name:'Nargis', phone:'8466758', email:'nargis@gmail.com' },
    { id:'3', name:'Ryhana', phone:'8494458', email:'ryhana@gmail.com' }
]


// function base component
export default function Contacts(){
  return(
    <FlatList
    data={contacts}
    renderItem={({item}) => { 
      return <ContactListItem name={item.name} phone={item.phone} />
    }}
    />
  )
}

const styles = StyleSheet.create({

})