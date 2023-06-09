import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import Ionic from 'react-native-vector-icons/Ionicons/';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { NavigationContainer} from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import MusicScreen from './screens/MusicScreen';
import LikeScreen from './screens/LikeScreen';
import HomeScreen from './screens/HomeScreen';
import DuuScreen from './screens/DuuScreen';

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

export default function App() {
 
  return (
    <NavigationContainer>
      
      <Tab.Navigator  screenOptions={({route}) => ({
        tabBarIcon: ({focused, size, colour}) =>{
          let iconName;
          if (route.name === 'DaavkaTunes'){
            iconName = focused ? 'home-outline':'home-outline';
          } 
          else if (route.name === 'Дуу'){
            iconName = focused ? 'musical-notes':'musical-notes-outline';
          }
          else if (route.name === 'Таалагдсан'){
            iconName = focused ? 'heart':'heart-outline';
          }
          return <Ionic name={iconName} size={size} colour={colour}/>;
        },
        
      }
      )}>
        <Tab.Screen name='DaavkaTunes' component={HomeScreen}/>
        <Tab.Screen name='Дуу' component={MusicScreen} options={{title: 'Бүх дуу'}}/>
        <Tab.Screen name='Таалагдсан' component={LikeScreen}/>
      </Tab.Navigator>
    </NavigationContainer>
    
  )
}

const styles = StyleSheet.create({})