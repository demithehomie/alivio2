import React from 'react';
import { TouchableOpacity, View, Text, StyleSheet, useWindowDimensions, ImageBackground, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Pressable from 'react-native/Libraries/Components/Pressable/Pressable';

export default function CultoDomingo() {

const navigation = useNavigation(); 

const image = { uri: "https://2.bp.blogspot.com/-g1wTsp7w4AY/WlxVYY7l0MI/AAAAAAAAAd8/-xIbIea_mxYtwKkd0gQI_SRwhTyAIx22gCLcBGAs/s1600/Ibmu%2Bs%25C3%25A3o%2Brafael%2B%252C%2Bigreja%2Bpreta%2B%252C%2Bilumina%25C3%25A7%25C3%25A3o%2B%252C%2Bjovem%2B%25281%2529.jpg" };

  return (
  <Pressable onPress={() => navigation.navigate('Domingo')}>
    <View >     
      
       <Image 
          source={image} 
          resizeMode="cover" 
          style={styles.image} 
          ></Image>
        <Text style={styles.textuc}>Culto de Domingo - 19hs</Text>
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
  