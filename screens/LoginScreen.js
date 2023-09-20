import { useState } from 'react';
import { View, Text, Image, StyleSheet, Dimensions, TextInput, KeyboardAvoidingView, TouchableOpacity, Button } from 'react-native';

import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../config/firebaseAuth';

import TextComponent from '../components/TextComponent';
import ButtonComponent from '../components/ButtonComponent';

const LoginScreen = ({ navigation }) => {
    const [email, onChangeEmail] = useState('');
    const [password, onChangePassword] = useState('');

    const handleSignInBtn = async () => {
        if (email && password){
            try{
                await signInWithEmailAndPassword(auth, email, password);
            }
            catch(err){
                console.log("Errors: ", err.message)
            }        
        }
    }

    return (
        <KeyboardAvoidingView
            behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
            style={styles.container}
        >
            <View style={styles.imgWrapper}>
                <Image
                    source={require('../assets/images/login.png')}
                    style={styles.imgStyles}
                />
            </View>

            <View style={styles.inputContainer}>
                <View style={styles.inputWrapper}>
                    <TextComponent>Email Address</TextComponent>
                    <TextInput
                        placeholder='Enter Email Address'
                        placeholderTextColor='grey'
                        value={email}
                        onChangeText={(value) => onChangeEmail(value)}
                        keyboardType='email-address'
                        autoCapitalize='none'
                        style={styles.textInput}
                    />
                    <TextComponent>Password</TextComponent>
                    <TextInput
                        placeholder='Enter Password'
                        placeholderTextColor='grey'
                        value={password}
                        onChangeText={(value) => onChangePassword(value)}
                        keyboardType='default'
                        secureTextEntry={true}
                        style={styles.textInput}
                    />
                </View>
                <View style={styles.forgetWrapper}>
                    <TouchableOpacity onPress={() => navigation.navigate('ResetPassword')}>
                        <TextComponent style={{ fontSize: 14}}>Forgot your password ?</TextComponent>
                    </TouchableOpacity>
                </View>
                <View style={styles.btnWrapper}>
                    <ButtonComponent onPress={handleSignInBtn}>Login</ButtonComponent>
                </View>

                <View style={styles.bottomWrapper}>
                    <Text style={styles.bottomText}>Don't have an account ?</Text>
                    <TouchableOpacity onPress={() => navigation.navigate('SignUp')}>
                    <Text style={styles.btnText}> Sign Up</Text>
                </TouchableOpacity>
            </View>
            </View>
        </KeyboardAvoidingView>
    );
};

export default LoginScreen;

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        paddingTop: windowHeight * 0.01,
        backgroundColor: Colors.bg,
    },
    imgWrapper: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    imgStyles: {
        width: windowWidth * 0.6,
        height: windowWidth * 0.6,
        marginBottom: windowHeight * 0.05,
    },
    inputContainer: {
        backgroundColor: '#FFFFFF',
        flex: 1,
        borderTopLeftRadius: 50,
        borderTopRightRadius: 50,
        width: '100%',
    },
    inputWrapper: {
        flexDirection: 'column',
        alignItems: 'center',
        marginVertical: windowHeight * 0.02,
    },
    textInput: {
        width: windowWidth * 0.8,
        height: windowHeight * 0.06,
        marginVertical: windowHeight * 0.01,
        backgroundColor: 'lightgrey',
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 20,
        textAlign: 'center',
        fontSize: 14,
    },
    forgetWrapper: {
        justifyContent: 'flex-end',
        alignItems: 'flex-end',
        paddingRight: windowWidth * 0.1,
    },
    btnWrapper: {
        marginVertical: windowHeight * 0.02,
    },
    bottomWrapper: {
        flexDirection: 'row',
        justifyContent: 'center',
        backgroundColor: '#FFF',
      },
      bottomText: {
        color: 'black',
      },
      btnText: {
        color: '#cc1',
        fontWeight: 'bold',
      },
});
