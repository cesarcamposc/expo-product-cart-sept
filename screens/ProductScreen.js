import { StyleSheet, Text, View, Image, FlatList, Pressable } from 'react-native'
import React from 'react'
import  products from '../data/products'

const ProductScreen = ({navigation}) => {
  return (
    <View style={styles.container}>
      <FlatList
        data={products}
        renderItem={({ item }) => (
          <Pressable onPress={()=>navigation.navigate('Product Details')} style = {styles.itemContainer}>
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