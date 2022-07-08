import React from 'react';
import { View, Text, StyleSheet, Image,  useWindowDimensions, ScrollView,  TouchableOpacity, Pressable   } from 'react-native';
import LeftArrow from '../../../assets/images/arrow.png';
import MinimumDetails from './MinimumDetails.js';
import { useNavigation } from '@react-navigation/native';

const Domingo = () => {
    
const {height} = useWindowDimensions();

const navigation = useNavigation(); 
    
  return (
    <View>
    <ScrollView vertical={true}>
    <Pressable onPress={() => navigation.navigate('Home')}>
    <Image 
            source={LeftArrow}  
            style={[styles.leftarrow, {height: height * 0.1}]} 
            resizeMode="contain"
            
        />
    </Pressable>
            <Text style={styles.textheadlinechurch}>Comunidade Evangelística Vinho Novo</Text>
            <Text style={styles.textheadline}>Culto de Domingo</Text>
        <View>
            <MinimumDetails />
        </View>
            <Text style={styles.txtdesc}>
        Culto de Celebração! Nós estamos prontos para te receber de braços abertos. Venha adorar a Deus com a gente! Louvor, Palavra e um ambiente familiar agradável. Todos os Domingos às 19hs.
            </Text>

        <TouchableOpacity style={styles.button1}>
            <Text style={styles.buttoncolor}>
                Comparecer ao próximo culto
            </Text>    
        </TouchableOpacity>

    </ScrollView>

    </View>
  );
}

export default Domingo;

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: 'white',
      
    },
    textheadlinechurch: {
        fontSize: 15,
        paddingLeft: 120,
    },
    textheadline: {
        paddingTop: 5,
        paddingLeft: 30,
        alignItems: "center",
        justifyContent: "center",
        fontSize: 30,
    },
    leftarrow: {
        
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: 20,
        marginTop: 40,
        maxWidth: 50,
       
    },
  
    txtdesc: {
        padding: 15,
        marginLeft: 8,
        marginRight: 8,
        fontSize: 15,


    },
    button1: {
        alignItems: "center",
        padding: 15,
        backgroundColor: "green",
        color: 'white',
        borderRadius: 30,
        margin: 30,
        
    },
    buttoncolor: {
        color: 'white',
        fontSize: 15,
    }
  });
  