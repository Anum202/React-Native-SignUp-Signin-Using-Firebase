import { View, Text, Image, StyleSheet, TouchableOpacity, Dimensions } from 'react-native';

import Colors from '../assets/constants/Colors';
import ButtonComponent from '../components/ButtonComponent';

const WelcomeScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View style={styles.textWrapper}>
        <Text style={styles.text}>Let's Get Started!</Text>
      </View>

      <View style={styles.imgWrapper}>
        <Image
          source={require('../assets/images/welcome.png')}
          style={styles.imgStyles}
        />
      </View>

      <ButtonComponent onPress={() => navigation.navigate('SignUp')}>Sign Up</ButtonComponent>

      <View style={styles.bottomWrapper}>
        <Text style={styles.bottomText}>Already have an account ?</Text>
        <TouchableOpacity onPress={() => navigation.navigate('Login')}>
          <Text style={styles.btnText}> Login</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default WelcomeScreen;

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.bg,
  },
  textWrapper: {
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: windowHeight * 0.05,
  },
  text: {
    color: '#ffffff',
    fontSize: windowWidth * 0.08,
    fontWeight: 'bold',
    textAlign: 'center',
    marginVertical: windowHeight * 0.02,
  },
  imgWrapper: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  imgStyles: {
    width: windowWidth * 0.8,
    height: windowWidth * 0.8,
  },
  bottomWrapper: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  bottomText: {
    color: '#FFFFFF',
    marginVertical: windowHeight * 0.02,
  },
  btnText: {
    color: '#cc1',
    marginVertical: windowHeight * 0.02,
    fontWeight: 'bold',
  },
});
