import { FlatList, StyleSheet, Text, View, Pressable } from 'react-native'
import React from 'react'
import CartListItem from '../components/CartListItem'
import cart from '../data/cart'


const shoppingCarTotals = () => (
  <View style={styles.totalsContainer}>
        <View style={styles.row}>
          <Text style={styles.text}>SubTotal</Text>
          <Text style={styles.text}>$ 850.00</Text>
        </View>

        <View style={styles.row}>
          <Text style={styles.text}>Delivery</Text>
          <Text style={styles.text}>$ 100.00</Text>
        </View>

        <View style={styles.row}>
          <Text style={styles.textBold}>Total</Text>
          <Text style={styles.textBold}>$ 950.00</Text>
        </View>
      </View>
);

const ShoppingCartScreen = () => {
  return (
    <>
    <FlatList
    data={cart}
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