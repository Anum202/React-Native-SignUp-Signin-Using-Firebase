import { useState } from 'react';
import { View, Text, Image, StyleSheet, Dimensions, TextInput, KeyboardAvoidingView, TouchableOpacity, Button } from 'react-native';

import TextComponent from '../components/TextComponent';
import ButtonComponent from '../components/ButtonComponent';

const LoginScreen = ({ navigation }) => {
    const [newPass, onChangeNewPass] = useState('');
    const [confirmNewPass, onChangeConfirmNewPass] = useState('');

    return (
        <KeyboardAvoidingView
            behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
            style={styles.container}
        >
            <View style={styles.imgWrapper}>
                <Image
                    source={require('../assets/images/forgetPass.png')}
                    style={styles.imgStyles}
                />
            </View>

            <View style={styles.inputContainer}>
                <View style={styles.inputWrapper}>
                    <TextComponent>New Password</TextComponent>
                    <TextInput
                        placeholder='Enter New Password'
                        placeholderTextColor='grey'
                        value={newPass}
                        onChangeText={onChangeNewPass}
                        eyboardType='default'
                        secureTextEntry={true}
                        style={styles.textInput}
                    />
                    <TextComponent>Confirm New Password</TextComponent>
                    <TextInput
                        placeholder='Enter Confirm Password'
                        placeholderTextColor='grey'
                        value={confirmNewPass}
                        onChangeText={onChangeConfirmNewPass}
                        keyboardType='default'
                        secureTextEntry={true}
                        style={styles.textInput}
                    />
                </View>

                <View style={styles.btnWrapper}>
                    <ButtonComponent onPress={() => navigation.navigate('Login')}>Reset Password</ButtonComponent>
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
        width: windowWidth * 0.7,
        height: windowWidth * 0.6,
        marginBottom: windowHeight * 0.07,
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
