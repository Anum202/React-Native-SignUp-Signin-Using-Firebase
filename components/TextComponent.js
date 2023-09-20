import {Text, StyleSheet} from 'react-native';

const TextComponent = ({children, style}) => {
    return (
        <Text style={[styles.textStyles, style]}>{children}</Text>
    )
}
export default TextComponent;

const styles = StyleSheet.create({
    textStyles: {
        fontSize: 15,
    },
});