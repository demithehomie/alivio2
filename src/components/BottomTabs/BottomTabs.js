import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../../../src/screens/HomeScreen';
//import ProfileScreen from '../../../src/screens/ProfileScreen';

const Tab = createBottomTabNavigator();

export default function BottomTabs() {
  return (
    <Tab.Navigator>
      <Tab.Screen style={styles.container} name="Home" component={HomeScreen} />
      
    </Tab.Navigator>
  )

}



const styles = StyleSheet.create({
    container: {
     
      backgroundColor: '#E8FBE8',
      paddingTop: 20,
      marginTop: 20,
      
    },
    textmenu: {
        fontSize: 10,
        justifyContent: "center",
        alignItems: "flex-start",
        paddingBottom: 10,
        color: "black",
    },
  });
  