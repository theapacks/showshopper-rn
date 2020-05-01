import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Platform } from 'react-native';

import ProductsOverviewScreen from '../screens/ProductsOverviewScreen/ProductsOverviewScreen';
import ProductDetailScreen, {productDetailsScreenOptions} from '../screens/ProductDetailsScreen/ProductDetailsScreen';
import Colors from '../constants/Colors';

const ProductsStack = createStackNavigator();

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

const ShopNavigator = () => {
    return (
        <NavigationContainer>
            <ProductsStack.Navigator screenOptions={screenOpts}>
                <ProductsStack.Screen 
                    options={{title: 'All Products'}} 
                    name="ProductsOverview" 
                    component={ProductsOverviewScreen} 
                />
                <ProductsStack.Screen 
                    options={productDetailsScreenOptions}
                    name="ProductDetail"
                    component={ProductDetailScreen}
                />
            </ProductsStack.Navigator>
        </NavigationContainer>
    );
};

export default ShopNavigator;

