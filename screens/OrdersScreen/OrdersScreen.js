import React from 'react';
import { Platform, Text, FlatList } from 'react-native';
import { useSelector } from 'react-redux';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import HeaderButton from '../../components/HeaderButton/HeaderButton';

import styles from './OrdersScreen.styles';
import OrderItem from '../../components/OrderItem/OrderItem';

let ordersProps;

const OrdersScreen = props => {
    ordersProps = props;
    const orders = useSelector(state => state.orders.orders);
    return (
        <FlatList
          data={orders}
          keyExtractor={item => item.id}
          renderItem={itemData => (
              <OrderItem
                amount={itemData.item.totalAmount}
                date={itemData.item.readableDate}
                items={itemData.item.items}
              />
          )}
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
