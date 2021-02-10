import React from 'react'
// building component from react
import {
    View,
    Text,
    TouchableOpacity,
    StyleSheet
} from 'react-native';
import { MaterialCommunityIcons } from "@expo/vector-icons";

import colors from '../utils/colors'
import Avatar from './Avatar';
// function base component
export default function ContactListItem({name, phone, onPress, onDeleteContact}){
    return(
        <TouchableOpacity onPress={onPress} style={styles.container}>
            <View style={styles.contactInfo}>
                <Avatar name={name} size={50}/>
                <View style={styles.details}>
                    <Text style={styles.title}>{name}</Text><br/>
                    <Text style={styles.subTitle}>{phone}</Text>
                </View>
                <View style={styles.deleteIcon}>
                    <MaterialCommunityIcons name="trash-can" color="red" size={24} onPress={onDeleteContact}/>
                </View>
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container: {
      paddingLeft:24
    },
    contactInfo: {
        flex: 1,
    // want to the first names word and phone come in one line use flexDirection
        flexDirection: 'row',
        paddingVertical: 16,
        paddingHorizontal: 24,
        borderBottomWidth: 0.5,
        borderBottomColor: colors.secondary
    },
    details: {
        flex: 2,
        marginLeft:20
    },
    title: {
        color: colors.black,
        fontSize:16,
        fontWeight: 'bold'
    },
    subTitle: {
        color: colors.primary
    },
    deleteIcon: {
        flex: 1,
        marginLeft:100 
    }
})