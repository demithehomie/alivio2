import React from 'react';
import { TouchableOpacity, View, Text, StyleSheet, useWindowDimensions, ImageBackground, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Pressable from 'react-native/Libraries/Components/Pressable/Pressable';

export default function CultoQuarta() {

const navigation = useNavigation(); 

const image = { uri: "https://www.fuxicogospel.com.br/wp-content/uploads/2019/04/Culto-na-Cabana-Church-1.jpg" };

  return (
  <Pressable onPress={() => navigation.navigate('Quarta')}>
    <View >     
      
       <Image 
          source={image} 
          resizeMode="cover" 
          style={styles.image} 
          ></Image>
        <Text style={styles.textuc}>Culto de Quarta - 20hs</Text>
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
  