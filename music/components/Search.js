import { StyleSheet, TextInput, View } from 'react-native'
import React from 'react'
import { Feather } from '@expo/vector-icons';

const Search = () => {
  return (
    <View style={styles.searhc}>
        <Feather style={styles.icon} name="search" size={17} color="black" />
      <TextInput style={styles.searchText} placeholder='Хайх' autoCapitalize='none'/>
    </View>
  )
}

export default Search

const styles = StyleSheet.create({
    searhc: {
        top: 15,
         backgroundColor: 'white',
         marginHorizontal: 15,
         borderWidth: 1,
         borderRadius: 10,
         height: 40,
         flexDirection: 'row',
    },
    searchText: {
        color: 'black',
        fontSize: 18,
        flex: 1,
    },
    icon: {
        alignSelf: 'center',
        marginHorizontal: 7,
    }
})