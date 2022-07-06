import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import HomeScreen from './src/screens/HomeScreen';
import SignInScreen from './src/screens/SignInScreen/SignInScreen';
import SignUpScreen from './src/screens/SignUpScreen/SignUpScreen';
import DetailScreen from './src/screens/DetailScreen/DetailScreen';
import BottomTabs from './src/components/BottomTabs/BottomTabs';
import { NavigationContainer,  } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

export default function App() {
  return (


<NavigationContainer>
<Stack.Navigator  initialRouteName='Home' screenOptions={{headerShown: false}} >
    
    <Stack.Screen name="DetailScreen" component={DetailScreen}/>
    <Stack.Screen name="Home" component={HomeScreen} />
    
</Stack.Navigator>
</NavigationContainer>
    //<View style={styles.container}>
      //<HomeScreen/>
   // </View>
  );
}
const Stack = createNativeStackNavigator();
    
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E8FBE8',
    
  },
});
