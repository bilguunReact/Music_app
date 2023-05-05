import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Ionic from 'react-native-vector-icons/Ionicons';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreens from './screens/HomeScreens';
import MusicScreen from './screens/MusicScreen';
import LikeScreen from './screens/LikeScreen';

export default function App() {
  const Tab = createBottomTabNavigator();
  return (
    <NavigationContainer>
      <Tab.Navigator screenOptions={({route}) => ({
        tabBarIcon: ({focused, size, colour}) =>{
          let iconName;
          if (route.name === 'Нүүр'){
            iconName = focused ? 'ios-home':'ios-home-outline';
          } 
          else if (route.name === 'Дуу'){
            iconName = focused ? 'musical-notes':'musical-notes-outline';
          }
          else if (route.name === 'Таалагдсан'){
            iconName = focused ? 'heart':'heart-outline';
          }
          return <Ionic name={iconName} size={size} colour={colour} />;
        },
        
      }
      )}>
        <Tab.Screen name='Нүүр' component={HomeScreens}/>
        <Tab.Screen name='Дуу' component={MusicScreen}/>
        <Tab.Screen name='Таалагдсан' component={LikeScreen}/>
      </Tab.Navigator>
    </NavigationContainer>
  )
}

const styles = StyleSheet.create({})