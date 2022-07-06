import React from 'react';
import { TouchableOpacity, View, Text, StyleSheet, useWindowDimensions} from 'react-native';




//

export default function UpperContainer ({navigation}) {
  return (
    <TouchableOpacity style={styles.uppercontainer} onPress={() => navigation.navigate('DetailScreen')}>
    
       <Text style={styles.textuc}>CULTO DE QUARTA</Text>
       
        
       </TouchableOpacity>
      
       
  )
}

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
  