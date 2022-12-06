import { FlatList, View, StyleSheet } from "react-native";
import React, { useEffect, useState } from "react";
import ProductItem from "../components/ProductItem";
import { PRODUCTS } from "../data/products";
import { useSelector, useDispatch, connect } from "react-redux";
import { filteredProduct, selectedProduct } from "../store/actions/product.action";
import LoaderSpinner from '../components/Loader'


const CategoryProductScreen = ({ navigation, route }) => {

  const dispatch = useDispatch()
  const category = useSelector((state) => state.categories.selected)
  const categoryProducts = useSelector((state) => state.categories.filteredProduct)

  const [Loader, setLoader] = useState(false)
  let content = <LoaderSpinner visible={!Loader} />
  useEffect(() => {
    setTimeout(() => {
      content = setLoader(true)
    }, 2000);
  }, []);


  useEffect(() => {
    dispatch(filteredProduct(category.id))
  }, [])

  const handleSelectedCategory = (item) => {
    dispatch(selectedProduct(item.id))
    navigation.navigate("Details", {
      name: item.name,
    });
  };

  const renderProductItem = ({ item }) => (
    <ProductItem item={item} onSelected={handleSelectedCategory} />
  );

  return (
    <View style={styles.container}>
      {content}
      <FlatList
        data={categoryProducts}
        keyExtractor={(item) => item.id}
        renderItem={renderProductItem}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: "50%"

  }
})

export default connect()(CategoryProductScreen);
