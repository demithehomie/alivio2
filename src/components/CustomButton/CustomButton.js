import React from 'react';
import { View, Text, StyleSheet, Pressable } from 'react-native';



const CustomButton = ({ onPress, text, type = "PRIMARY", bgColor, fgColor }) => {
  return (
    <Pressable onPress={onPress} style={[
      styles.container, 
      styles[`container_${type}`],
      bgColor ? {backgroundColor: bgColor} : {}  
    ]}>
        <Text style={[
            styles.text, 
            styles [`text_${type}`],
            fgColor ? {color: fgColor} : {}
        ]}>
          {text} 
      </Text>
    </Pressable>
  );
};


const styles = StyleSheet.create({
    container: {
        backgroundColor: '#18991C',
        width: '100%',
        padding: 15,
        borderRadius: 5,
        marginVertical: 8,
        alignItems: 'center',
      },    
    
    container_PRIMARY:{
      backgroundColor: '#3B71F3'

    },

    container_TERTIARY: {
      backgroundColor: '#E8FBE8',
    },

    text: {
        color: 'white',
        fontSize: 15,
        fontWeight: 'bold',
    },

    text_TERTIARY: {
      color: 'gray',
      
    }
})
export default CustomButton;