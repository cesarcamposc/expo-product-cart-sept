import { Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import ProductScreen from '../screens/ProductScreen';
import ProductDetailsScreen from '../screens/ProductDetailsScreen';
import ShoppingCartScreen from '../screens/ShoppingCartScreen';
import { Ionicons } from '@expo/vector-icons';
import { useSelector } from 'react-redux';
import { selectedNumberItems } from '../store/cartSlice';

const Stack = createNativeStackNavigator();

const navigation = () => {

  const numberItems = useSelector(selectedNumberItems);

  return (
    <Stack.Navigator screenOptions={{contentStyle: {backgroundColor: 'white'}}}>
      <Stack.Screen
        name="Products"
        component={ProductScreen}
        options={({navigation})=>({
          headerRight: () => (
            <Pressable onPress={()=>navigation.navigate('Cart')} style={{ flexDirection: "row" }}>
              <Ionicons name="cart-outline" size={25} color="purple" />
              <Text style={{ marginLeft: 5, fontWeight: "bold", fontSize: 16 }}>
                {numberItems}
              </Text>
            </Pressable>
          ),
        })}
      />
      <Stack.Screen
        name="Product Details"
        component={ProductDetailsScreen}
        options={{ presentation: "modal" }}
      />
      <Stack.Screen name="Cart" component={ShoppingCartScreen} />
    </Stack.Navigator>
  );
}

export default navigation

const styles = StyleSheet.create({})