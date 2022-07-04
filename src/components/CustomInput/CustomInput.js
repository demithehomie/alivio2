import React from 'react';
import { View , Text, TextInput, StyleSheet } from 'react-native';

const CustomInput = ({value, setValue, placeholder, secureTextEntry}) => {
  return (
    <View style={styles.container}>
        <TextInput 
            value={value}
            onChangeText={setValue}
            placeholder={placeholder} 
            style={styles.input}
            secureTextEntry={secureTextEntry}
            />
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#F7FAE6",
        width: '100%',
        padding: 10,
        borderColor: "#159401",
        borderWidth: 1,
        borderRadius: 6,

        marginVertical: 8,
      
    },
    input: {

    }
})

export default CustomInput;