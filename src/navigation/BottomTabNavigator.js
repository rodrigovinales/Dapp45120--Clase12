import React, { useState, useEffect } from 'react';
import ModalAll from '../components/Modal'
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import ShopNavigator from './ShopNavigator'
import CartNavigator from './CartNavigator';
import ContactNavigator from "./ContactNavigator";
import { StyleSheet, View, Text, Alert } from "react-native";
import Ionicons from '@expo/vector-icons/Ionicons'

const BottomTabs = createBottomTabNavigator();

export default BottomTabNavigator = () => {

    let content;
    const [modalVisible, setModalVisible] = useState(false)

    content = <ModalAll
        visible={!modalVisible}
        text="BIENVENIDOS a 3 EMPANADAS!!!"
        imagen={require('../assets/images/3empas.jpg')}
    />

    useEffect(() => {
        setTimeout(() => {
            content = setModalVisible(true)
        }, 3000);
    }, []);

    useEffect(() => {
        setInterval(() => {
            Alert.alert("SOY UN MOLESTO")
        }, 15000);
    }, []);

    return (
        <NavigationContainer>
            {content}
            <BottomTabs.Navigator
                initialRouteName="ShopTab"
                screenOptions={{
                    headerShown: false,
                    tabBarShowLabel: false,
                    tabBarStyle: StyleSheet.tabBar
                }} >
                <BottomTabs.Screen name="ShopTab"
                    component={ShopNavigator}
                    options={{
                        tabBarIcon: ({ focus }) => (
                            <View
                                style={styles.item}>
                                <Ionicons
                                    name="home"
                                    size={25}
                                    color="red" />
                                <Text>PRODUCTOS</Text>
                            </View>)
                    }} />
                <BottomTabs.Screen name="CartTab"
                    component={CartNavigator}
                    options={{
                        tabBarIcon: ({ focus }) => (
                            <View
                                style={styles.item}>
                                <Ionicons
                                    name="cart"
                                    size={25}
                                    color="green" />
                                <Text>MI PEDIDO</Text>
                            </View>)
                    }} />
                <BottomTabs.Screen name="Contact"
                    component={ContactNavigator}
                    options={{
                        tabBarIcon: ({ focus }) => (
                            <View
                                style={styles.item}>
                                <Ionicons
                                    name="mail-open-sharp"
                                    size={25}
                                    color="black" />
                                <Text>CONTACTO</Text>
                            </View>)
                    }} />
            </BottomTabs.Navigator>
        </NavigationContainer>
    );
}

const styles = StyleSheet.create({
    tabBar: {
        shadowColor: "#7f5df0",
        shadowOffset: { width: 0, height: 0 },
        shadowOpacity: 0.5,
        shadowRadius: 0.5,
        elevation: 5,
        position: "absolute",
        bottom: 25,
        left: 20,
        right: 20,
        borderRadius: 15,
        height: 90
    },
    item: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: "#E8C4C4",
        borderRadius: 40,
        width: 200,
        fontFamily: "MontSerrat"
    }
})