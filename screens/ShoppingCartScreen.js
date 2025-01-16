import { FlatList, StyleSheet, Text, View, Pressable } from 'react-native'
import React from 'react'
import CartListItem from '../components/CartListItem'
import cart from '../data/cart'
import { useSelector } from 'react-redux'
import { selectedDeliveryPrice, selectedSubTotal, selectedTotal } from '../store/cartSlice'


const shoppingCarTotals = () => {

  const subTotal = useSelector(selectedSubTotal);

  const delivery = useSelector(selectedDeliveryPrice);

  const total = useSelector(selectedTotal);
  return(
  <View style={styles.totalsContainer}>
        <View style={styles.row}>
          <Text style={styles.text}>SubTotal</Text>
          <Text style={styles.text}>$ {subTotal}</Text>
        </View>

        <View style={styles.row}>
          <Text style={styles.text}>Delivery</Text>
          <Text style={styles.text}>$ {delivery}</Text>
        </View>

        <View style={styles.row}>
          <Text style={styles.textBold}>Total</Text>
          <Text style={styles.textBold}>$ {total}</Text>
        </View>
      </View>
)};

const ShoppingCartScreen = () => {

  const cartItems = useSelector(state => state.cart.items);
  return (
    <>
    <FlatList
    data={cartItems}
    renderItem={({item})=>(
        <CartListItem cartItem = {item}/>
    )}
    ListFooterComponent={shoppingCarTotals} 
    />

    {/* Add to Cart Button */}
          <Pressable style={styles.button} onPress={{}}>
            <Text style={styles.buttonText}>CHEKOUT</Text>
          </Pressable>
    </>
  )
}

export default ShoppingCartScreen

const styles = StyleSheet.create({
  totalsContainer: {
    margin: 20,
    paddingTop: 10,
    borderColor: 'purple',
    borderTopWidth: 1,
  },

  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 2,
  },

  text: {
    fontSize: 18,
  },

  textBold: {
    fontSize: 18,
    fontWeight: 'bold'
  },

  button: {
    position: 'absolute',
    backgroundColor: 'purple',
    bottom: 30,
    width: '80%',
    alignSelf: 'center',
    padding: 20,
    borderRadius: 100,
    alignItems: 'center',
},

buttonText: {
    color: 'white',
    fontWeight: '600',
    fontSize: 25,
}

})