import React from 'react';
import { View, Text, Button, Image, ScrollView } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';

import * as cartActions from '../../store/actions/cart';
import Colors from '../../constants/Colors';
import styles from './ProductDetailsScreen.styles';

let selectedProduct = null;

const ProductDetailsScreen = ({ route, navigation }) => {
    const dispatch = useDispatch();
    const { productId } = route.params;
    selectedProduct = useSelector(state =>
      state.products.availableProducts.find(prod => prod.id === productId)
    );    
    return (
        <ScrollView>
            <Image style={styles.image} source={{ uri: selectedProduct.imageUrl }} />
            <View style={styles.actions}>
                <Button 
                    color={Colors.primary} 
                    title="Add to Cart" 
                    onPress={
                        () => {dispatch(cartActions.addToCart(selectedProduct))}
                    } 
                />
            </View>
            <Text style={styles.price}>${selectedProduct.price.toFixed(2)}</Text>
            <Text style={styles.description}>{selectedProduct.description}</Text>
        </ScrollView>
    );
};
// <Text>{productDetailsProps.route.params.productTitle}</Text>,
export const productDetailsScreenOptions = () => {
    return {
        headerTitle: () => <Text>{selectedProduct.title}</Text>,
    };
};

export default ProductDetailsScreen;
