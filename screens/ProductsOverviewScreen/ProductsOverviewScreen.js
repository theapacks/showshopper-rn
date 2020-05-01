import React from 'react';
import { FlatList, Text } from 'react-native';
import { useSelector } from 'react-redux';

import ProductItem from '../../components/ProductItem/ProductItem';
import styles from './ProductsOverviewScreen.styles';

const ProductsOverviewScreen = props => {
    const products = useSelector(state => state.products.availableProducts);
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
                />
            } 
        />
    );
};
// onSelect={() => {props.navigation.navigate('ProductDetail', { productId: itemData.item.id })}} 
export default ProductsOverviewScreen;
