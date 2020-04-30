import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Platform } from 'react-native';
import ProductsOverviewScreen from '../screens/ProductsOverviewScreen/ProductsOverviewScreen';
import Colors from '../constants/Colors';

const ProductsStack = createStackNavigator();

const screenOpts = {
    headerTitleAlign: 'center',
    headerStyle: {
      backgroundColor: Platform.OS === 'android' ? Colors.primaryColor : '',
    },
    headerTintColor: Platform.OS === 'android' ? 'white' : Colors.primaryColor,
    headerTitleStyle :{
      fontWeight: 'bold',
    },
  }

const ShopNavigator = () => {
    return (
        <NavigationContainer>
            <ProductsStack.Navigator screenOptions={screenOpts}>
                <ProductsStack.Screen 
                    options={{title: 'All Products'}} 
                    name="ProductsOverview" 
                    component={ProductsOverviewScreen} />
            </ProductsStack.Navigator>
        </NavigationContainer>
    );
};

export default ShopNavigator;

