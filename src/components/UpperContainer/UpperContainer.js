import React from 'react';
import { View, Text, StyleSheet, useWindowDimensions} from 'react-native';


const UpperContainer = () => {
  return (
    <View style={styles.uppercontainer}>
       <Text style={styles.textuc}>
        CULTO DE DOMINGO       </Text>
       </View>
  )
}

export default UpperContainer;

const styles = StyleSheet.create({
    
    uppercontainer: {
        backgroundColor: 'green',
        width: 350,
        height: 200,
        borderRadius: 30,
        color: 'white',
        margin: 8,
       

    },
    textuc:{
        color: 'white',
        paddingLeft: 20,
        paddingTop: 20,
        fontSize: 25,
    },
  });
  