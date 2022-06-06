import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { WidthScreen } from '../../../common/theme'

const SaleBanner = () => {
  return (
    <TouchableOpacity style={styles.root}>
      <Image source={require('../../../assets/images/icons/banner.png')} style ={{height:80,width:'100%',borderRadius:6,resizeMode:'stretch'}} />
      <Text style={styles.text}>SUMMER SUPER SALE!</Text>
    </TouchableOpacity>
  )
}

export default SaleBanner 

const styles = StyleSheet.create({
  root:{
    marginVertical:10,
  },
  text:{
    fontWeight:'500',
    position:'absolute',
    top:30,
    right:100,
  }
})