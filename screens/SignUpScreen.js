import { useState } from 'react';
import { View, Text, Image, StyleSheet, Dimensions, TextInput, KeyboardAvoidingView, TouchableOpacity, Button } from 'react-native';

import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../config/firebaseAuth';

import TextComponent from '../components/TextComponent';
import ButtonComponent from '../components/ButtonComponent';

const LoginScreen = ({ navigation }) => {
    const [name, onChangeName] = useState('');
    const [email, onChangeEmail] = useState('');
    const [password, onChangePassword] = useState('');

    const handleSignUpBtn = async () => {
        if (email && password){
            try{
                await createUserWithEmailAndPassword(auth, email, password);
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
                    source={require('../assets/images/signup.png')}
                    style={styles.imgStyles}
                />
            </View>

            <View style={styles.inputContainer}>
                <View style={styles.inputWrapper}>
                    <TextComponent>Full Name</TextComponent>
                        <TextInput
                            placeholder='Enter Full Name'
                            placeholderTextColor='grey'
                            value={name}
                            onChangeText={onChangeName}
                            keyboardType='default'
                            style={styles.textInput}
                    />
                    <TextComponent>Email Address</TextComponent>
                    <TextInput
                        placeholder='Enter Email Address'
                        placeholderTextColor='grey'
                        value={email}
                        onChangeText={(value) =>  onChangeEmail(value)}
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

                <View style={styles.btnWrapper}>
                    <ButtonComponent onPress={handleSignUpBtn}>Sign Up</ButtonComponent>
                </View>

                <View style={styles.bottomWrapper}>
                    <Text style={styles.bottomText}>Already have an account ?</Text>
                    <TouchableOpacity onPress={() => navigation.navigate('Login')}>
                    <Text style={styles.btnText}> Login</Text>
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
        paddingTop: windowHeight * 0.02,
        backgroundColor: Colors.bg,
    },
    imgWrapper: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    imgStyles: {
        width: windowWidth * 0.6,
        height: windowWidth * 0.5,
        marginBottom: windowHeight * 0.02,
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
