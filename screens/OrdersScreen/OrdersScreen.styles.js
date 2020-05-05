import { StyleSheet } from 'react-native';
import Colors from '../../constants/Colors';

export default styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    headerTitle: {
        fontFamily: 'open-sans-bold',
        color: Platform.OS === 'android' ? 'white' : Colors.primaryColor,
        fontSize: 18,
    },    
});