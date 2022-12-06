import React from 'react'
import { ActivityIndicator, StyleSheet, Text, View } from 'react-native'

const LoaderSpinner = (props) => {
    const { visible } = props;

    if (!visible) return null;

    return (
        <View style={styles.container}> 
            <Text style={styles.textLoading}>CARGANDO...</Text>
        <ActivityIndicator size='large' />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex:1
    },
    textLoading: {
        fontSize: 50,
        justifyContent: "center",
        textAlign:"center",
        fontFamily: "MontSerrat"
    }
})

export default LoaderSpinner;