import React from 'react';
import { TouchableOpacity, View, Text, StyleSheet, useWindowDimensions, ImageBackground, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Pressable from 'react-native/Libraries/Components/Pressable/Pressable';

export default function Jumpdacevin() {

const navigation = useNavigation(); 

const image = { uri: "https://live.staticflickr.com/3774/9587140198_b7734f5085_c.jpg" };

  return (
  <Pressable onPress={() => navigation.navigate('Jumpcevin')}>
    <View >     
      
       <Image 
          source={image} 
          resizeMode="cover" 
          style={styles.image} 
          ></Image>
        <Text style={styles.textuc}>Jump da Cevin</Text>
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
  