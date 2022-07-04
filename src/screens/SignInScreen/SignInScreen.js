import React, { useState } from 'react';
import { View, Text, Image, StyleSheet, useWindowDimensions, ScrollView } from 'react-native';
import Logo from '../../../assets/images/logo.png'
import CustomInput from '../../components/CustomInput';
import CustomButton from '../../components/CustomButton';

const SignInScreen = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

const {height} = useWindowDimensions();

const onSignInPressed = () => {
    console.warn('Sign In'); 
}

const onForgotPasswordPressed = () => {
    console.warn('Password Pressed');
}

const onSignInFacebookPressed = () => {
    console.warn('Facebook Pressed');
}

const onSignInGooglePressed = () => {
    console.warn('Google Pressed');
}

const onSignInApplePressed = () => {
    console.warn('Apple Pressed');
}

const onSignUpPressed = () => {
    console.warn('Sign Up Pressed')
}

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
    <View style={styles.root}>
        <Image 
            source={Logo} 
            style={[styles.logo, {height: height * 0.3}]} 
            resizeMode="contain"/>

        <CustomInput 
            placeholder="Username" 
            value={username} 
            setValue={setUsername}
        />    
        
        <CustomInput 
            placeholder="Password" 
            value={password} 
            setValue={setPassword}
            secureTextEntry={true}
        />  
        <CustomButton 
            text="Sign In" 
            onPress={onSignInPressed}
                
        />
        <CustomButton 
            text="Forgot My Password" 
            onPress={onForgotPasswordPressed} 
            type="TERTIARY" 
        />
        
        <CustomButton 
            text="Sign In With Facebook" 
            onPress={onSignInFacebookPressed} 
            bgColor="#E7EAF4" 
            fgColor="#4765A9"
        />
        <CustomButton   
            text="Sign In With Google"         
            onPress={onSignInGooglePressed}
            bgColor="#FAE9EA" 
            fgColor="#DD4D44"
            
        />
        <CustomButton 
            text="Sign In With Apple" 
            onPress={onSignInApplePressed} 
            bgColor="#e3e3e3" 
            fgColor="#363636"
        />
        <CustomButton 
            text="Don't Have an Account? Create One" 
            onPress={onSignUpPressed} 
            type="TERTIARY" 
        />

    </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
    root: {
        alignItems: 'center',
        padding: 20,
        marginTop: 100,
        marginBottom: 370,
    },
    logo: {
        maxWidth: 150,
        maxHeight: 150,
        alignItems: 'center',
        
    },
});

export default SignInScreen;