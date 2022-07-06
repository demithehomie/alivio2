import React from 'react';
import { View, Text, StyleSheet, Image,  useWindowDimensions, ScrollView,  TouchableOpacity   } from 'react-native';
import Logo from '../../../assets/images/logo.png';
import MinimumDetails from '../../../src/screens/DetailScreen/MinimumDetails.js';

const DetailScreen = () => {
    
const {height} = useWindowDimensions();


    
  return (
    <View>
    <ScrollView vertical={true}>
        <Image 
            source={Logo}  
            style={[styles.logo, {height: height * 0.1}]} 
            resizeMode="contain"
        />
            <Text style={styles.textheadlinechurch}>Comunidade Evangelística Vinho Novo</Text>
            <Text style={styles.textheadline}>Culto de Celebração</Text>
        <View>
            <MinimumDetails />
        </View>
            <Text style={styles.txtdesc}>
        Culto de Celebração! Nós estamos prontos para te receber de braços abertos. Venha adorar a Deus com a gente! Louvor, Palavra e um ambiente familiar agradável. Todos os domingos às 7 horas.
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

export default DetailScreen;

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#E8FBE8',
      
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
    logo: {
        
        justifyContent: 'center',
        alignItems: 'center',
        padding: 2,
        marginTop: 20,
        maxWidth: 100,
       
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
        color: '#fff',
        borderRadius: 30,
        margin: 30,
        
    },
    buttoncolor: {
        color: 'white',
        fontSize: 15,
    }
  });
  