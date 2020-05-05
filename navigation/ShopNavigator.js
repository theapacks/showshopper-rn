import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import {
    createDrawerNavigator,
    DrawerContentScrollView,
    DrawerItemList,
    DrawerItem,
  } from '@react-navigation/drawer';
import { Platform } from 'react-native';

import CartScreen from '../screens/CartScreen/CartScreen';
import ProductsOverviewScreen, {productOverviewScreenOptions} from '../screens/ProductsOverviewScreen/ProductsOverviewScreen';
import ProductDetailScreen, {productDetailsScreenOptions} from '../screens/ProductDetailsScreen/ProductDetailsScreen';
import OrdersScreen, { OrdersScreenOptions } from '../screens/OrdersScreen/OrdersScreen'
import Colors from '../constants/Colors';

const ProductsStack = createStackNavigator();
const OrdersStack = createStackNavigator();
const Drawer = createDrawerNavigator();

const screenOpts = {
    headerTitleAlign: 'center',
    headerStyle: {
      backgroundColor: Platform.OS === 'android' ? Colors.primaryColor : '',
    },
    headerTintColor: Platform.OS === 'android' ? 'white' : Colors.primaryColor,
    headerTitleStyle :{
      fontFamily: 'open-sans-bold',
    },
    headerBackTitleStyle: {
        fontFamily: 'open-sans',
    }
}

const drawerOptions = {
    activeTintColor: Colors.secondaryColor,
}

const ProductsNavigator = () => {
    return (
        <ProductsStack.Navigator screenOptions={screenOpts}>
            <ProductsStack.Screen 
                options={productOverviewScreenOptions} 
                name="ProductsOverview" 
                component={ProductsOverviewScreen} 
            />
            <ProductsStack.Screen 
                options={productDetailsScreenOptions}
                name="ProductDetail"
                component={ProductDetailScreen}
            />
            <ProductsStack.Screen 
                options={{ title: "My Cart" }}
                name="Cart"
                component={CartScreen}
            />                
        </ProductsStack.Navigator>
    );
};

const OrdersNavigator = () => {
    return (
        <OrdersStack.Navigator screenOptions={screenOpts}>
            <OrdersStack.Screen 
                name="Orders" 
                component={OrdersScreen} 
                options={OrdersScreenOptions}
            />
        </OrdersStack.Navigator>
    );
};

const ShopNavigator = () => {
    return (
        <NavigationContainer>
            <Drawer.Navigator drawerContentOptions={drawerOptions}>        
              <Drawer.Screen name="Products" component={ProductsNavigator} />
              <Drawer.Screen 
                name="Orders" 
                component={OrdersNavigator} 
              />
            </Drawer.Navigator>
        </NavigationContainer>
    );
};  

export default ShopNavigator;

