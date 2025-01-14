import { FlatList, Image, Pressable, ScrollView, StyleSheet, Text, View, useWindowDimensions } from 'react-native'
import React from 'react'
import products from '../data/products'
import { use } from 'react';

const ProductDetailsScreen = () => {
    const product = products[0];

    const {width} = useWindowDimensions();

    const addToCart = ()=>{
        console.warn('Add to Cart');
    };
  return (
    <View>
      <ScrollView>
        {/* Image Carousel */}
        <FlatList
          data={product.images}
          renderItem={({ item }) => (
            <Image
              source={{ uri: item }}
              style={{ width: width, aspectRatio: 1 }}
            />
          )}
          horizontal
          showsHorizontalScrollIndicator={false}
          pagingEnabled
        />

        <View style={{ padding: 20 }}>
          {/* Title */}
          <Text style={styles.name}> {product.name}</Text>

          {/* Price */}
          <Text style={styles.price}>$ {product.price}</Text>

          {/* Description */}
          <Text style={styles.description}> {product.description} </Text>
        </View>
      </ScrollView>

      {/* Add to Cart Button */}
      <Pressable style={styles.button} onPress={addToCart}>
        <Text style={styles.buttonText}>ADD TO CART</Text>
      </Pressable>
    </View>
  );
}

export default ProductDetailsScreen

const styles = StyleSheet.create({
    name: {
        fontSize: 30,
        fontWeight: '600',
        marginVertical: 10,
    },

    price: {
        fontWeight: '600',
        fontSize: 20,
        letterSpacing: 3,
    },

    description: {
        marginVertical: 10,
        fontSize: 15,
        fontWeight: '400',
        lineHeight: 30,
    },

    button: {
        position: 'absolute',
        backgroundColor: 'green',
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