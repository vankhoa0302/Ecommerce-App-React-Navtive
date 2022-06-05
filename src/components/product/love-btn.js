import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
const Love = () => {
  return (
    <View style={styles.root}>
      <Image  />
    </View>
  )
}

export default Love

const styles = StyleSheet.create({
  root:{
    width:36,
    height:36,
    borderRadius:20,
    elevation: 1,
    position:'absolute',
    left: '75.33%',
    right: '0.67%',
    top: '63.08%',
    bottom: '23.08%',
    alignItems:'center',
    justifyContent:'center'
  }
})