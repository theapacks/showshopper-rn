import { StyleSheet } from 'react-native';
import Colors from '../../constants/Colors';

export default styles = StyleSheet.create({
    screen: {
        margin: 20
    },
    summary: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      marginBottom: 20,
      padding: 10,
      shadowColor: 'black',
      shadowOpacity: 0.26,
      shadowOffset: { width: 0, height: 2 },
      shadowRadius: 8,
      elevation: 5,
      borderRadius: 10,
      backgroundColor: 'white'
    },
    summaryText: {
      fontFamily: 'open-sans-bold',
      fontSize: 18
    },
    amount: {
      color: Colors.primary
    }
});