import React from 'react';
import { FlatList, Text } from 'react-native';
import { useSelector } from 'react-redux';

import styles from './ProductsOverviewScreen.styles';

const ProductsOverviewScreen = props => {
    const products = useSelector(state => state.products.availableProducts);
    return (
        <FlatList data={products} renderItem={itemData => <Text>{itemData.item.title}</Text>} />
    );
};

export default ProductsOverviewScreen;
