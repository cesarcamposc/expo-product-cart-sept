import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Navigation from '../navigation/navigation'

export default function index() {
  return (
    <View style= {styles.container}>
      <Navigation />
    </View>
    
  )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
    }
})