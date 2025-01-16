import { StyleSheet, Text, View, Image, FlatList, Pressable } from 'react-native'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { productsSlice } from '../store/productsSlice';

const ProductScreen = ({navigation}) => {

  const dispatch = useDispatch();

  const products = useSelector(state => state.products.products)
  return (
    <View style={styles.container}>
      <FlatList
        data={products}
        renderItem={({ item }) => (
          <Pressable onPress={()=>{
            dispatch(productsSlice.actions.setSelectedProduct(item.id));
          navigation.navigate('Product Details')}} style = {styles.itemContainer}>
            <Image source={{ uri: item.image }} style={styles.image} />
          </Pressable>
        )}
        numColumns={2}
      />
    </View>
  );
}

export default ProductScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'azure',
        alignItems: 'center',
        justifyContent: 'center',
    },

    itemContainer: {
        width: '50%',
        padding: 1,
    },
    
    image: {
        width: '100%', 
        aspectRatio:1
    }
})