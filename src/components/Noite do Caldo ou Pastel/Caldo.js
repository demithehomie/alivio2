import React from 'react';
import { TouchableOpacity, View, Text, StyleSheet, useWindowDimensions, ImageBackground, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Pressable from 'react-native/Libraries/Components/Pressable/Pressable';

export default function Caldos() {

const navigation = useNavigation(); 

const image = { uri: "https://conteudo.imguol.com.br/c/entretenimento/82/2020/08/07/caldo-de-pinto-1596822198141_v2_4x3.jpg" };

  return (
  <Pressable onPress={() => navigation.navigate('Caldo')}>
    <View >     
      
       <Image 
          source={image} 
          resizeMode="cover" 
          style={styles.image} 
          ></Image>
        <Text style={styles.textuc}>Noite do Caldo</Text>
  </View>     
  </Pressable>
      
       
  )
}

const styles = StyleSheet.create({
    image: {
      flex: 1,
      width: 320,
      height: 200,
      borderRadius: 30,
      
      margin: 8,
    },
  
    textuc:{
        color: 'black',
        paddingLeft: 20,
        paddingTop: 5,
        fontSize: 17,
    },
  });
  