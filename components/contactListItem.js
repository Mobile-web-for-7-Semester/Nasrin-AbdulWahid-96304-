import React from 'react'
// building component from react
import {
    View,
    Text,
    TouchableOpacity,
    StyleSheet
} from 'react-native'

import colors from '../utils/colors'
import Avatar from './Avatar';
// function base component
export default function ContactListItem({name, phone, onPress}){
    return(
        <TouchableOpacity onPress={onPress} style={styles.container}>
            <View style={styles.contactInfo}>
                <Avatar name={name} size={40}/>
                <Text style={styles.details}>
                    <Text style={styles.title}>{name}</Text><br/>
                    <Text style={styles.subTitle}>{phone}</Text>
                </Text>
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1
    },
    contactInfo: {
    // want to the first names word and phone come in one line use flexDirection
        flexDirection: 'row',
        paddingVertical: 16,
        paddingHorizontal: 24,
        backgroundColor: colors.secondary,
        borderBottomWidth: 0.5,
        borderBottomColor: colors.white
    },
    details: {
        marginLeft:20
    },
    title: {
        color: colors.black,
        fontSize:16,
        fontWeight: 'bold'
    },
    subTitle: {
        color: colors.primary
    }
})