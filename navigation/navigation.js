import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import ProductScreen from '../screens/ProductScreen';
import ProductDetailsScreen from '../screens/ProductDetailsScreen';
import ShoppingCartScreen from '../screens/ShoppingCartScreen';

const Stack = createNativeStackNavigator();

const navigation = () => {
  return (
   <Stack.Navigator>
    <Stack.Screen name='Products' component={ProductScreen} />
    <Stack.Screen 
    name='Product Details' 
    component={ProductDetailsScreen}
    options={{presentation: 'modal'}}
    />
    <Stack.Screen name='Cart' component={ShoppingCartScreen}/>
   </Stack.Navigator>
  )
}

export default navigation

const styles = StyleSheet.create({})