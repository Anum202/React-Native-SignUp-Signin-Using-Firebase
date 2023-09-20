import { signOut } from 'firebase/auth';
import { View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';

import { auth } from '../config/firebaseAuth';

const HomeScreen = ({navigation}) => {

    const handleLogoutBtn = async () => {
        await signOut(auth);
    }

    return (
        <View style={styles.container}>
            <Text>Home</Text>
            <TouchableOpacity style={styles.btn} onPress={handleLogoutBtn}>
                <Text>Log Out</Text>
            </TouchableOpacity>
        </View>
    )
}
export default HomeScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    btn: {
        width: 90,
        height: 30,
        backgroundColor: 'red',
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center',
    },
    text: {
        textAlign: 'center',
    }
});