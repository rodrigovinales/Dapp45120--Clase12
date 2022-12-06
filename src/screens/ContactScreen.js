import React from 'react'
import { StyleSheet, Text, ImageBackground, View, TouchableOpacity, Image, Alert } from 'react-native'


const ContactScreen = () => {

  const image = require('../assets/images/3empas.jpg')
  const contacto = require('../assets/images/contacto.png')

  const somos = () => {
    Alert.alert("Tel: 0810-333-3.Empanadas")
  }

  return (
    <View style={styles.container}>
      <ImageBackground source={image} style={styles.imageBack} resizeMode='stretch'>
        <Text style={styles.texto}>COMUNICATE CON NOSOTROS</Text>
        <TouchableOpacity
          style={styles.btnContact}
          onPress={somos}>
          <Text
            style={styles.btnTxt}>
            CONTACTO
          </Text>
          <Image
            source={contacto}
            style={styles.imageProductoC}
          />
        </TouchableOpacity>
      </ImageBackground >
    </View>
  )
}

export default ContactScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 12,
    backgroundColor: '#fff',
    paddingBottom: 120
  },
  imageBack: {
    flex: 1,
    justifyContent: 'space-evenly',
    alignItems: 'flex-end',
    flexDirection: 'column',
  },
  texto: {
    fontSize: 26,
    color: '#fff',
    // paddingTop: 40,
  },
  imageProductoC: {
    width: 30,
    height: 30,
    borderRadius: 20
  },
  btnContact: {
    width: 180,
    height: 70,
    borderRadius: 5,
    justifyContent: "center",
    alignItems: 'center',
    backgroundColor: "#abb2b3",
    // opacity: 0.6
  },
  btnTxt: {
    fontSize: 35,
    color: "white",
    fontFamily: "SmoochSans",
    textAlign: 'center',
  },
})