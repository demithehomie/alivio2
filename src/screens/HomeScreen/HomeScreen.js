import React from 'react';
import { View, Text, StyleSheet, ScrollView, Image, useWindowDimensions,} from 'react-native';
import UpperContainer from '../../components/CultoQuarta/CultoQuarta';
import Logo from '../../../assets/images/logo.png';
import BottomTabs from '../../components/BottomTabs/BottomTabs';
import CultoQuarta from '../../components/CultoQuarta/CultoQuarta';
import CultoDomingo from '../../components/CultoDomingo/CultoDomingo';
import Celulas from '../../components/Células/Células';

const HomeScreen = () => {

    const {height} = useWindowDimensions();
    
  return (
    <View style={styles.container}>

     <Image 
            source={Logo}  
            style={[styles.logo, {height: height * 0.1}]} 
            resizeMode="contain"
        />
       <ScrollView vertical={true} showsVerticalScrollIndicator={false}>
       <Text style={styles.textobemvindo}>Olá Thaíssa</Text>
       <Text style={styles.textodois}>Você está na</Text>
       <Text style={styles.nomedaigreja}>CEVIN</Text>
       <Text style={styles.tituloreunioes}>Reuniões</Text>


       <ScrollView style={styles.scrollv} horizontal={true} showsHorizontalScrollIndicator={false}>
        <CultoQuarta/>
        <CultoDomingo />
        <Celulas />
       </ScrollView>
       <Text style={styles.tituloreunioes}>Eventos</Text>
       <ScrollView style={styles.scrollv} horizontal={true} showsHorizontalScrollIndicator={false}>
        <UpperContainer />
        <UpperContainer />
        <UpperContainer />
        <UpperContainer />
        <UpperContainer />
       </ScrollView>
       <Text style={styles.tituloreunioes}>Especiais</Text>
       <ScrollView style={styles.scrollv} horizontal={true} showsHorizontalScrollIndicator={false}>
        <UpperContainer />
        <UpperContainer />
        <UpperContainer />
        <UpperContainer />
        <UpperContainer />
       </ScrollView>
    
    </ScrollView> 


    </View>
  );
}


export default HomeScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 12,
    },
    textobemvindo: {
        fontSize: 25,
        fontWeight: 'bold',
        
        paddingRight: 50,
    },
    textodois: {
        paddingTop: 5,
        fontSize: 20,
        paddingLeft: 275,
    },
    nomedaigreja: {
        fontSize: 40,
        paddingLeft: 275,
    },
    tituloreunioes: {
        paddingRight: 260,
        fontSize: 25,
        fontWeight: 'bold',
    },
    scrollv: {
        paddingTop: 15,
        paddingBottom: 15,
       
    },
    footercontainer: {

    },
    reunioes: {

    },
    eventos:{

    },
    logo: {
        
        justifyContent: 'center',
        alignItems: 'center',
        padding: 2,
        marginTop: 20,
        maxWidth: 100,
       
    },
})