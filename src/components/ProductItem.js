import React from "react";
import { StyleSheet, Text, View, TouchableOpacity, Image } from "react-native";

const ProductItem = ({ item, onSelected }) => {

  return (
    <TouchableOpacity onPress={() => onSelected(item)}>
      <View style={styles.ProductItem}>
        <View>
          <Text style={styles.title}>{item.name}</Text>
        </View>
        <View>
          <Text style={styles.details}>$ {item.price}</Text>
          <Text style={styles.details}>{item.weight}</Text>
          <Text style={styles.details}>{item.description}</Text>
        </View>
        <View>
          <Image
            style={styles.image}
            source={{ uri: item.image }}>
          </Image>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default ProductItem;

const styles = StyleSheet.create({
  ProductItem: {
    padding: 20,
    margin: 10,
    borderRadius: 3,
    backgroundColor: "#ccc",
    shadowOpacity: 1
  },
  title: {
    fontSize: 40,
    fontFamily: "MontSerrat",
  },
  details: {
    fontSize: 22,
    fontFamily: 'IndieFlower'
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 6,
    margin: 10
  }
});
