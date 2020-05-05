import React from 'react';
import { Platform, Text, FlatList } from 'react-native';
import { useSelector } from 'react-redux';
import { Ionicons } from  '@expo/vector-icons';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import HeaderButton from '../../components/HeaderButton/HeaderButton';

import styles from './OrdersScreen.styles';
import Colors from '../../constants/Colors';

let ordersProps;

const OrdersScreen = props => {
    ordersProps = props;
    const orders = useSelector(state => state.orders.orders);
    return (
        <FlatList
            keyExtractor={item => item.id}
            data={orders}
            renderItem={itemData => <Text>{itemData.item.totalAmount}</Text>}
        />
    );
};

export const OrdersScreenOptions = () => {
    return {
        headerTitle: () => <Text style={styles.headerTitle}>My Orders</Text>,
        headerLeft: () => (
          <HeaderButtons HeaderButtonComponent={HeaderButton}>
            <Item
              title="Menu"
              iconName={Platform.OS === 'android' ? 'md-menu' : 'ios-menu'}
              onPress={() => {
                ordersProps.navigation.toggleDrawer();
              }}
            />
          </HeaderButtons>
        )     
    };
};

export default OrdersScreen;
