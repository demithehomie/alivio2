import React from 'react';
import { TouchableOpacity, View, Text, StyleSheet, useWindowDimensions, ImageBackground, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Pressable from 'react-native/Libraries/Components/Pressable/Pressable';

export default function Celulas() {

const navigation = useNavigation(); 

const image = { uri: "https://blog.sistemajustus.com.br/wp-content/uploads/2016/06/conhec3a7a_os_desafios_de_gerenciar_uma_igreja_em_cc3a9lulas-jpg.jpeg" };

  return (
  <Pressable onPress={() => navigation.navigate('CelulasScreen')}>
    <View >     
      
       <Image 
          source={image} 
          resizeMode="cover" 
          style={styles.image} 
          ></Image>
        <Text style={styles.textuc}>Todas as Células</Text>
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
  