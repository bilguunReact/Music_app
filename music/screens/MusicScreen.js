import { StyleSheet, Text, View, SafeAreaView, ScrollView } from 'react-native'
import React from 'react'

import Search from '../components/Search'
import FlatList from '../components/FlatList'

const MusicScreen = () => {
  return (
    <SafeAreaView style={styles.con}>
      <ScrollView>
    <View>
      </View>
      <View>
      <FlatList/>
      </View>
      </ScrollView>
      </SafeAreaView>
    

  )
}

export default MusicScreen

const styles = StyleSheet.create({
  con: {
    flex: 1,
  }
})