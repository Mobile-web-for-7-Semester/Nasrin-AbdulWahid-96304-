import React from 'react'
// building component from react
import {
    View,
    Text,
    StyleSheet
} from 'react-native'

import colors from '../utils/colors'
// function base component
export default function Avatar({name, size}){
    // name is the beging of each contact in Avatar
    // const initial = name[0].toUpperCase();
    return (
// if you want to apply many style in one component, you shoule add component in one array
        <View style={[styles.avatarContainer, {height:size, width:size}]}>
            <Text style={styles.avatarTxt}>{ name }</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    avatarContainer:{
        borderRadius: '50%',
        borderWidth: 1,
        borderColor: colors.white,
        backgroundColor: colors.primary,
        justifyContent: 'center',
        alignItems: 'center'
    },
    avatarTxt: {
        color: colors.white
    }
})