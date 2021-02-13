import React,{useState, useEffect} from 'react';
// building component from react
import {
    View,
    Text,
    TextInput,
    TouchableOpacity,
    FlatList,
    StyleSheet
} from 'react-native'
import * as SQLite from 'expo-sqlite'; 

import colors from '../utils/colors'
import ContactListItem from '../components/contactListItem';

const db= SQLite.openDatabase('contacts.db');

// function base component
export default function SearchScreen(){
    const [allContacts, setAllContacts] = useState([]); // all contacts from database store in that
    const [filteredContacts, setFilteredContacts] = useState([]); // contacts that we search that

    // when our screen render
    useEffect(()=>{
        db.transaction(tx => {
            //  all of our data set in that
            tx.executeSql('select * from contact', [], (tx, {rows})=>{
                var data = [];
                for(var i=0; i<rows.length; i++){
                    data.push(rows[i]);
                }
                // all of our data set in allContacts, when our component render in DOM
                setAllContacts(data);
            })
        })
    })

    const searchContacts=(text)=>{
        // when user enter lower of uppercase word ==> filter that
        const filterText= text.toLowerCase();
        const newContacts = allContacts.filter((contact)=>{
            const item= contact.name.toLowerCase();
            // همانی که اندکس آن پیدا نمیشه بغییر همان همه را برای ما نمایش میدهد
            return item.indexOf(filterText) > -1;
        })

        setFilteredContacts(newContacts);
        if(text.length < 1) {
            setFilteredContacts([])
        }
    }

    return(
        <View>
            <View style={styles.searchContainer}>
                {/* we want to enter a text in search box, set in allContacts and put in filteredContacts */}
                <TextInput placeholder="Search..." style={styles.searchInput} onChangeText={(text)=> searchContacts(text)}/>
            </View>
            {/* کانتک های ما که پیدا شدند را نمایش میدهند */}
            {filteredContacts.length > 0 ? <FlatList
            data={filteredContacts}
            keyExtractor={(item)=>item.id}
            renderItem={({item}) => { 
                return <ContactListItem name={item.name} phone={item.phone} onPress={()=> navigation.navigate('Profile',{item:item})} onDeleteContact={()=> deleteContact(item.id)}/>
            }}
            />: <View>
                    <Text>Nothing to display</Text>
                </View>
          }
        </View>
    )
}

const styles = StyleSheet.create({
  searchContainer: {
      backgroundColor: colors.secondary
  },
  searchInput: {
      borderRadius: 10,
      paddingHorizontal: 20,
      paddingVertical: 10,
      margin: 20,
      backgroundColor: colors.white
  }
})