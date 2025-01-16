import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Feather } from '@expo/vector-icons'
import { useDispatch } from 'react-redux'
import { cartSlice } from '../store/cartSlice'

const CartListItem = ({cartItem}) => {

  const dispatch = useDispatch();

  const increaseQuantity = () => {
    dispatch(cartSlice.actions.changeQuantity({
      productId: cartItem.product.id,
      amount: 1
    }));
  };

  const decreaseQuantity = () => {
    dispatch(cartSlice.actions.changeQuantity({
      productId: cartItem.product.id,
      amount: -1
    }));
  };

  return (
    <View style={styles.container}>

      <Image source={{ uri: cartItem.product.image }} style={styles.image} />

      <View style={styles.contentContainer}>

        <Text style={styles.name}>{cartItem.product.name}</Text>
        <Text style={styles.size}>{cartItem.size}</Text>

        <View style={styles.footer}>
          <Feather
            onPress={decreaseQuantity}
            name="minus-circle"
            size={25}
            color="purple"
          />

          <Text style={styles.quantity}>{cartItem.quantity}</Text>

          <Feather
            onPress={increaseQuantity}
            name="plus-circle"
            size={25}
            color="purple"
          />

          <Text style={styles.itemTotal}>
            $ {cartItem.product.price * cartItem.quantity}
          </Text>
        </View>
      </View>
    </View>
  );
}

export default CartListItem

const styles = StyleSheet.create({
  container: {
    padding: 10,
    paddingHorizontal: 20,
    flexDirection: 'row',
  },

  contentContainer: {
    flex: 1,
    marginLeft: 10,
  },

  image: {
    width: '40%',
    aspectRatio: 1,
    borderRadius: 10,
  },

  name: {
    fontWeight: '700',
    fontSize: 20,
  },

  size: {
    fontSize: 18,
    color: 'purple',
  },

  quantity: {
    marginHorizontal: 10,
    fontWeight: '700',
    fontSize: 18,
  },

  footer: {
    marginTop: 'auto',
    flexDirection: 'row',
    alignItems: 'center',
  },

  itemTotal: {
    fontSize: 20,
    marginLeft: 'auto',
    fontWeight: '600'
  }
})