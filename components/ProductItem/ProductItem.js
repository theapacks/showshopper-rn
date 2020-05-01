import React from 'react';
import {
    View,
    Text,
    Image,
    Button,
    TouchableOpacity,
    TouchableNativeFeedback,
    Platform
} from 'react-native';

import Colors from '../../constants/Colors';
import styles from './ProductItem.styles';

const ProductItem = props => {
    let TouchableCmp = TouchableOpacity;

    if (Platform.OS === 'android' && Platform.Version >= 21) {
      TouchableCmp = TouchableNativeFeedback;
    }    
    return (
        <View style={styles.product}>
            <View style={styles.touchable}>
                <TouchableCmp onPress={props.onViewDetail} useForeground>
                    <View>
                    <View style={styles.imageContainer}>
                        <Image style={styles.image} source={{ uri: props.image }} />
                    </View>
                    <View style={styles.details}>
                        <Text style={styles.title}>{props.title}</Text>
                        <Text style={styles.price}>${props.price.toFixed(2)}</Text>
                    </View>
                    <View style={styles.actions}>
                        <Button
                        color={Colors.primary}
                        title="View Details"
                        onPress={props.onViewDetail}
                        />
                        <Button
                        color={Colors.primary}
                        title="To Cart"
                        onPress={props.onAddToCart}
                        />
                    </View>
                    </View>
            </TouchableCmp>
        </View>
      </View>
    );
};

export default ProductItem;
