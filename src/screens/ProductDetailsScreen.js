import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

import { useSelector } from 'react-redux'

const ProductDetailsScreen = () => {

const product = useSelector((state)=> state.product.selected)


  return (
    <View style={styles.container}>
      <Text style={styles.title}>Y aca que ponemos ???</Text>
    </View>
  )
}

export default ProductDetailsScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FDBF50",
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontFamily: "IndieFlower",
  },
})