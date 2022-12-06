import React from 'react';
import { useFonts } from "expo-font";
import BottomTabNavigator from "./src/navigation/BottomTabNavigator";
import { Provider } from "react-redux";
import store from "./src/store";  /// import index.js desde store

export default function App() {
  const [fontsLoaded] = useFonts({
    Tillana: require("./src/assets/fonts/Tillana-SemiBold.ttf"),
    MontSerrat: require('./src/assets/fonts/Montserrat-Regular.ttf'),
    IndieFlower: require('./src/assets/fonts/IndieFlower-Regular.ttf'),
    SmoochSans: require('./src/assets/fonts/SmoochSans-Regular.ttf'),
  });

  if (!fontsLoaded) {
    return null;
  }

  return (
    <Provider store={store}>
      <BottomTabNavigator />
    </Provider>
  );
}
