import { SafeAreaView, ScrollView, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import Search from '../components/Search';

export default function LikeScreen() {
  return (
   <SafeAreaView style={styles.containe}>
    <ScrollView>
      <View>
        <Search/>
      </View>
    </ScrollView>
   </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  containe:{
    flex: 1,
    
  }
})