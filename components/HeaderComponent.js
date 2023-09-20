import { View, TouchableOpacity, StyleSheet, Dimensions } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import Colors from '../assets/constants/Colors';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const HeaderComponent = ({ iconName, iconSize, iconColor, onPress }) => {
    return (
        <View style={styles.wrapper}>
            <TouchableOpacity
                onPress={onPress}
                style={styles.btnWrapper}
            >
                <FontAwesome name={iconName} size={iconSize} color={iconColor} />
            </TouchableOpacity>
        </View>
    );
};

export default HeaderComponent;

const styles = StyleSheet.create({
    wrapper: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
        height: windowHeight * 0.2,
        paddingHorizontal: windowWidth * 0.05,
        backgroundColor: Colors.bg,
    },
    btnWrapper: {
        backgroundColor: 'yellow',
        width: windowHeight * 0.06, 
        height: windowHeight * 0.06, 
        borderRadius: windowHeight * 0.02, 
        borderTopRightRadius: windowHeight * 0.001,
        borderBottomLeftRadius: windowHeight * 0.001,
        alignItems: 'center',
        justifyContent: 'center',
    },
});
