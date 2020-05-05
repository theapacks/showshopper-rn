import React, { useState } from 'react';
import { View, Text, Button } from 'react-native';

import styles from './OrderItem.styles';

import Card from '../Card/Card';
import CartItem from '../CartItem/CartItem';
import Colors from '../../constants/Colors';

const OrderItem = props => {
    const [showDetails, setShowDetails] = useState(false);
    return (
        <Card style={styles.orderItem}>
            <View style={styles.summary}>
                <Text style={styles.totalAmount}>${props.amount.toFixed(2)}</Text>
                <Text style={styles.date}>{props.date}</Text>
            </View>
            <Button
                color={Colors.primary}
                title={showDetails ? 'Hide Details' : 'Show Details'}
                onPress={() => {
                  setShowDetails(prevState => !prevState);
                }}
            />
            {showDetails && (
                <View style={styles.detailItems}>
                    {props.items.map(cartItem => (
                    <CartItem
                        key={cartItem.productId}
                        quantity={cartItem.quantity}
                        amount={cartItem.sum}
                        title={cartItem.productTitle}
                    />
                  ))}
                </View>
        )}
        </Card>
    );
};

export default OrderItem;
