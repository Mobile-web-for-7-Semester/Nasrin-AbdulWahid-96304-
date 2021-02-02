import React from 'react'
// building component from react
import {
    View,
    Text,
    StyleSheet
} from 'react-native'

import { MaterialIcons } from '@expo/vector-icons'
import colors from '../utils/colors'
// function base component
export default function DetailsListItem({icon, title, subTitle}){
   return(
       <View>
           <View style={styles.borderContainer}>
               <View style={styles.container}>
                    <MaterialIcons name={icon} size={24} color="block"/>
                    <View style={styles.contentContainer}>
                        <Text style={styles.title}>{ title }</Text>
                    </View>
                    <View>
                        <Text style={styles.subTitle}>{ subTitle }</Text>
                    </View>
               </View>
           </View>
       </View>
   )
}

const styles = StyleSheet.create({
    borderContainer: {
        paddingLeft: 24
    },
    contentContainer: {
        paddingLeft: 20
    },
    container: {
        flexDirection: 'row',
        paddingVertical: 16,
        borderBottomWidth: 0.5,
        borderBottomColor: colors.secondary
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold'
    },
    subTitle: {
        fontSize: 16,
        color: colors.primary
    }
})