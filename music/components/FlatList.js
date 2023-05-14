import { StyleSheet, Text, View, FlatList, SafeAreaView, TouchableOpacity, Alert } from 'react-native'
import React from 'react'

import Search from '../components/Search'
import { ScrollView } from 'react-native'

const MusicScreen = () => {
  const songs = [
    {id:'1', name:'Be my summer'},
    {id:'2', name:'bi'},
    {id:'3', name:'Chi'},
    {id:'4', name:'Good'},
    {id:'5', name:'Dell'},
    {id:'6', name:'Iphone'},
    {id:'7', name:'Sumsung'},
    {id:'1', name:'Be my summer'},
    {id:'2', name:'bi'},
    {id:'3', name:'Chi'},
    {id:'4', name:'Good'},
    {id:'5', name:'Dell'},
    {id:'6', name:'Iphone'},
    {id:'7', name:'Sumsung'},
    {id:'1', name:'Be my summer'},
    {id:'2', name:'bi'},
    {id:'3', name:'Chi'},
    {id:'4', name:'Good'},
    {id:'5', name:'Dell'},
    {id:'6', name:'Iphone'},
    {id:'7', name:'Sumsung'},
    {id:'1', name:'Be my summer'},
    {id:'2', name:'bi'},
    {id:'3', name:'Chi'},
    {id:'4', name:'Good'},
    {id:'5', name:'Dell'},
    {id:'6', name:'Iphone'},
    {id:'7', name:'Sumsung'},
    {id:'1', name:'Be my summer'},
    {id:'2', name:'bi'},
    {id:'3', name:'Chi'},
    {id:'4', name:'Good'},
    {id:'5', name:'Dell'},
    {id:'6', name:'Iphone'},
    {id:'7', name:'Sumsung'},
  ]
      return (
        <SafeAreaView>
        <View>
          <Search/>
          </View>
          <ScrollView>
            <View>


          <FlatList data={songs} renderItem={element => (
          <TouchableOpacity onPress={() => Alert.alert('Ok')}>
          <View style={styles.flatBorder}>
            <Text>{element.item.name}</Text></View>
            
            </TouchableOpacity>)}/>


          </View>
          </ScrollView>
          </SafeAreaView>
        
    
      )
    }
    
export default MusicScreen
    
const styles = StyleSheet.create({
      flatBorder: {
        flex: 1,
        backgroundColor: 'gray',
        padding: 15,
        margin: 5,
        top: 20,
        marginHorizontal: 17,
      }
    })