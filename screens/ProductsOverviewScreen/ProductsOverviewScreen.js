import React from 'react';
import { FlatList, Text, Platform } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';

import HeaderButton from '../../components/HeaderButton/HeaderButton';
import * as cartActions from '../../store/actions/cart';
import ProductItem from '../../components/ProductItem/ProductItem';
import styles from './ProductsOverviewScreen.styles';

let productOverviewProps;
const ProductsOverviewScreen = (props) => {
    productOverviewProps = props;
    const products = useSelector(state => state.products.availableProducts);
    const dispatch = useDispatch();
    return (
        <FlatList 
            data={products} 
            renderItem={itemData => 
                <ProductItem 
                    image={itemData.item.imageUrl}
                    title={itemData.item.title}
                    price={itemData.item.price}  
                    onViewDetail={
                        () => props.navigation.navigate('ProductDetail', { productId: itemData.item.id })
                    }   
                    onAddToCart={ 
                        () => dispatch(cartActions.addToCart(itemData.item))
                     }           
                />
            } 
        />
    );
};
// onSelect={() => {props.navigation.navigate('ProductDetail', { productId: itemData.item.id })}} 
export const productOverviewScreenOptions = () => {
    return {
        headerTitle: () => <Text style={styles.headerTitle}>All Products</Text>,
        headerLeft: () => (
            <HeaderButtons HeaderButtonComponent={HeaderButton}>
              <Item
                title="Menu"
                iconName={Platform.OS === 'android' ? 'md-menu' : 'ios-menu'}
                onPress={() => {
                    productOverviewProps.navigation.toggleDrawer();
                }}
              />
            </HeaderButtons>
        ),        
        headerRight: () => (
            <HeaderButtons HeaderButtonComponent={HeaderButton}>
              <Item
                title="Menu"
                iconName={Platform.OS === 'android' ? 'md-cart' : 'ios-cart'}
                onPress={() => {
                    productOverviewProps.navigation.navigate('Cart');
                }}
              />
            </HeaderButtons>
          )        
    };
};
export default ProductsOverviewScreen;
