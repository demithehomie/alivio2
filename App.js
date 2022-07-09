import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import HomeScreen from './src/screens/HomeScreen';
import SignInScreen from './src/screens/SignInScreen/SignInScreen';
import SignUpScreen from './src/screens/SignUpScreen/SignUpScreen';

import BottomTabs from './src/components/BottomTabs/BottomTabs';
import { NavigationContainer,  } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Domingo from './src/screens/DetailScreens/Domingo';
import Quarta from './src/screens/DetailScreens/Quarta';
import Celulass from './src/screens/DetailScreens/Celulass';
import Jumpcevin from './src/screens/DetailScreens/Rede JUMP';
import Caldo from './src/screens/DetailScreens/Noite do Caldo';


export default function App() {
  return (

<NavigationContainer>
<Stack.Navigator  initialRouteName='Home' screenOptions={{headerShown: false}} >
    <Stack.Screen name="Home" component={HomeScreen} />
    <Stack.Screen name="Domingo" component={Domingo}/>
    <Stack.Screen name="Quarta" component={Quarta}/>
    <Stack.Screen name="Celulass" component={Celulass}/>
    <Stack.Screen name="Caldo" component={Caldo}/>
    <Stack.Screen name="Jumpcevin" component={Jumpcevin}/>
</Stack.Navigator>
</NavigationContainer>
    
  );
}
const Stack = createNativeStackNavigator();
    
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E8FBE8',
    
  },
});
