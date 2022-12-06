import React from "react";
import { StyleSheet, Text, View, TouchableOpacity, Image } from "react-native";

const GridItem = ({ item, onSelected }) => {
  return (
    <View style={styles.gridITem}>
      <TouchableOpacity
        style={{ ...styles.container, backgroundColor: item.color }}
        onPress={() => onSelected(item)}
      >
        <View>
          <Text
            style={styles.title}>{item.title}
          </Text>
        </View>
        <View>
          <Image
            style={styles.image}
            source={{ uri: item.image }}>
          </Image>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default GridItem;

const styles = StyleSheet.create({
  gridITem: {
    flex: 1,
    borderRadius: 6,
    margin: 15,
    height: 150,
  },
  container: {
    flex: 1,
    borderRadius: 6,
    shadowColor: "black",
    shadowOpacity: 0.5,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 6,
    elevation: 3,
    // justifyContent: "flex-end",
    justifyContent: "center",

    alignItems: "center",
    padding: 8,
  },
  title: {
    fontFamily: "Tillana",
  },
  image: {
    width: 350,
    height: 100,
    borderRadius: 20,
    margin: 10


  }
});
