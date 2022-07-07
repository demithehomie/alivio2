import React from 'react';
import { TouchableOpacity, View, Text, StyleSheet, useWindowDimensions } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function UpperContainer() {

const navigation = useNavigation(); 



  return (
    <TouchableOpacity style={{
        backgroundColor: 'green',
        width: 325,
        height: 200,
        borderRadius: 30,
        color: 'white',
        margin: 8,
       
    }} onPress={() => navigation.navigate('DetailScreen')}>
    
       <Text style={styles.textuc}>CULTO DE QUARTA</Text>
       
        
  </TouchableOpacity>
      
       
  )
}

const styles = StyleSheet.create({
    
        

    textuc:{
        color: 'white',
        paddingLeft: 25,
        paddingTop: 20,
        fontSize: 25,
    },
  });
  