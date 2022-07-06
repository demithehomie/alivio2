import React, { useState } from 'react';
import { View, Text, Image, StyleSheet, useWindowDimensions, ScrollView,  } from 'react-native';
import Logo from '../../../assets/images/logo.png'
import CustomInput from '../../components/CustomInput';
import CustomButton from '../../components/CustomButton';
//import RadioButton from '../../components/RadioButton';

const SignUpScreen = () => {
    const [fullname, setFullname] = useState('');
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

/* const data = [
    { value: 'Masculino' },
    { value: 'Feminiino' },
    { value: 'Outros' },
];
*/

const {height} = useWindowDimensions();

const onSignUpPressed = () => {
    console.warn('Cadastrar'); 
}

return (
    <ScrollView>
        <View style={styles.root}>
             <Image 
                source={Logo} 
                style={[styles.logo, {height: height * 0.3}]} 
                resizeMode="contain"/>
        
        <Text style={styles.textcadastro}>CADASTRO DE USUÁRIOS</Text>

        <CustomInput 
            placeholder="Insira seu nome completo . . . ." 
            value={fullname} 
            setValue={setFullname}
        /> 

        <CustomInput 
            placeholder="Escolha seu nome de usuário . . . ." 
            value={username} 
            setValue={setUsername}
        />    
        
        <CustomInput 
            placeholder="Escolha uma senha . . . ." 
            value={password} 
            setValue={setPassword}
            secureTextEntry={true}
        />  

      

    
        <CustomButton 
            text="Cadastrar" 
            onPress={onSignUpPressed}
                
        />
    
        </View>
    </ScrollView>
)   



}

export default SignUpScreen;

const styles = StyleSheet.create({
    logo: {
        alignItems: 'center',
        padding: 40,
        marginLeft: 10,
        marginBottom: 10,
        maxWidth: 50,
        maxHeight: 50,
    },
    root: {
        padding: 20,
        alignItems: 'center',
        marginLeft: 10,
        marginBottom: 10,
    },
    textcadastro: {
        alignItems: "flex-start",
        fontSize: 20,
        paddingBottom: 10,
    }
});