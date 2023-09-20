import { Text, TouchableOpacity, StyleSheet, Dimensions } from "react-native";

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const ButtonComponent = ({ children, onPress, style }) => {
    return (
        <TouchableOpacity style={styles.btnWrapper} onPress={onPress}>
            <Text style={[styles.text, style]}>{children}</Text>
        </TouchableOpacity>
    );
};

export default ButtonComponent;

const styles = StyleSheet.create({
    btnWrapper: {
        width: windowWidth * 0.8, 
        height: windowHeight * 0.06, 
        backgroundColor: 'yellow',
        borderWidth: 1,
        borderColor: '#cc9',
        borderRadius: windowWidth * 0.04, 
        marginHorizontal: windowHeight * 0.06, 
        alignItems: 'center',
        justifyContent: 'center',
        elevation: 2,
    },
    text: {
        textAlign: 'center',
        fontSize: windowHeight * 0.022,
        fontWeight: 'bold',
    }
});
