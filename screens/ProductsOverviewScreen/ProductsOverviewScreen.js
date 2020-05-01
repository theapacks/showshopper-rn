import React from 'react';
import { FlatList, Text } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';

import * as cartActions from '../../store/actions/cart';
import ProductItem from '../../components/ProductItem/ProductItem';
import styles from './ProductsOverviewScreen.styles';

const ProductsOverviewScreen = props => {
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
export default ProductsOverviewScreen;
