import React from 'react';
import { View, Text, StyleSheet, Image,  useWindowDimensions, ScrollView, Linking, TouchableOpacity, Pressable   } from 'react-native';
import LeftArrow from '../../../assets/images/arrow.png';
import MinimumDetailsCelulaJ from './MinimumDetails.js';
import { useNavigation } from '@react-navigation/native';

const Celulass = () => {
    
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
        <Text style={styles.textheadline}>Célulasss</Text>
        <View>
            <MinimumDetailsCelulaJ />
        </View>
            <Text style={styles.txtdesc}>
        "Oh! quão bom e quão suave é que os irmãos vivam em união. Salmos 133:1" Faça parte de uma célula mais próxima da sua casa!
            </Text>

        <Text style={styles.textheadline2}>
            Lista de Células
        </Text>    
        
           
        <TouchableOpacity style={styles.listadecelulas}>
            <Text 
                    style={styles.textolistacelulas}  
                    onPress={() => {Linking.openURL('https://api.whatsapp.com/send?phone=5521995287019&text=Ol%C3%A1!%20Quero%20saber%20sobre%20a%20C%C3%A9lula%20do%20Sonho%20de%20Vida%2C%20por%20favor!')}}>
                Célula Sonho de Vida
            </Text>
        </TouchableOpacity>
        <TouchableOpacity>
            <Text style={styles.textolistacelulas} onPress={() => {Linking.openURL('https://api.whatsapp.com/send?phone=5522997080275&text=Ol%C3%A1!%20Quero%20saber%20sobre%20a%20C%C3%A9lula%20do%20Canto%20do%20Rio%2C%20por%20favor!')}}>
                Célula Canto do Rio
            </Text>
        </TouchableOpacity>   
        <TouchableOpacity> 
            <Text style={styles.textolistacelulas} onPress={() => {Linking.openURL('https://api.whatsapp.com/send?phone=5522992088520&text=Ol%C3%A1!%20Quero%20saber%20sobre%20a%20C%C3%A9lula%20JUMP%2C%20por%20favor!')}}>
                Célula Jump
            </Text>
        </TouchableOpacity>
        <TouchableOpacity>    
            <Text style={styles.textolistacelulas} onPress={() => {Linking.openURL('https://api.whatsapp.com/send?phone=5521988491251&text=Ol%C3%A1!%20Quero%20saber%20sobre%20a%20C%C3%A9lula%20da%20CEVIN%20em%20B%C3%BAzios%2C%20por%20favor!')}}   >
                Célula Búzios
                
            </Text>
            
            
        </TouchableOpacity>    
    

        <TouchableOpacity style={styles.button1} onPress={() => navigation.navigate('Home')}>
            <Text style={styles.buttoncolor}>
                Voltar ao Início
            </Text>    
        </TouchableOpacity>

    </ScrollView>

    </View>
  );
}

export default Celulass;

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: 'white',
      
    },
    listadecelulas1: {
        fontSize: 20,
         
    },
    textolistacelulas: {
        fontSize: 20,
        fontWeight: 'bold',
        padding: 30,
        borderTopColor: 'grey',
        borderBottomColor: 'grey',
        borderBottomWidth: StyleSheet.hairlineWidth,
        borderTopWidth: StyleSheet.hairlineWidth,
    },
    textosaibamais: {
        fontSize: 15,
        paddingLeft: 100,
        fontWeight: 'bold',
    },
    textheadlinechurch: {
        fontSize: 15,
        paddingLeft: 95,
    },
    textheadline: {
        paddingTop: 5,
        paddingLeft: 30,
        alignItems: "center",
        justifyContent: "center",
        fontSize: 30,
    },
    textheadline2: { 
        paddingTop: 5,
        paddingLeft: 30,
        alignItems: "center",
        justifyContent: "center",
        fontSize: 30,
        paddingBottom: 15,
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
  