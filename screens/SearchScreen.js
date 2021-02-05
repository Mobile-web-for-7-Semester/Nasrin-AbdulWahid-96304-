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
export default function SearchScreen(){
    return(
        <View style={styles.searchContainer}>
            <TextInput placeholder="Search..." style={styles.searchInput} />
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