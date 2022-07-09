import React from 'react';
import { View, Text, StyleSheet, Image,  useWindowDimensions, ScrollView,  TouchableOpacity, Pressable   } from 'react-native';
import LeftArrow from '../../../assets/images/arrow.png';
import MinimumDetailsCelulaJ  from './MinimumDetails.js';
import { useNavigation } from '@react-navigation/native';

const Jumpcevin = () => {
    
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
            <Text style={styles.textheadline}>JUMP CEVIN</Text>
        <View>
            <MinimumDetailsCelulaJ />
        </View>
            <Text style={styles.txtdesc}>
        "Jovens, eu escrevi a vocês, porque são fortes, e em vocês a Palavra de Deus permanece, e vocês venceram o Maligno. 1 João 2:14". Venha adorar a Deus com a gente! Louvor, Palavra e um ambiente familiar agradável. Todas ás quartas às 20:00.
            </Text>

            <TouchableOpacity style={styles.button1} onPress={() => navigation.navigate('Home')}>
            <Text style={styles.buttoncolor}>
                Início
            </Text>    
        </TouchableOpacity>

    </ScrollView>

    </View>
  );
}

export default Jumpcevin;

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
  