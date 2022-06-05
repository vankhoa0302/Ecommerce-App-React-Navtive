import { Image, StyleSheet, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { Theme } from '../../common/theme/theme'
const Love = ({wishPress}) => {
  const [active, setActive] = useState(false)
  return (
    <TouchableOpacity 
      style={[
        styles.root,
        {
          backgroundColor: (active ? Theme.colors.primary : Theme.colors.white)
        }
      ]}
      onPress={() => {[setActive(true),wishPress]}}>
      <Image 
        source={
          active 
            ? require('../../assets/images/icons/heart-white.png')
            : require('../../assets/images/icons/heart.png')}
        style={
          styles.image
        }  />
    </TouchableOpacity>
  )
}

export default Love

const styles = StyleSheet.create({
  root:{
    width:36,
    height:36,
    borderRadius:20,
    position:'absolute',
    bottom:-18,
    right:0,
    alignItems:'center',
    justifyContent:'center',
    zIndex:1,
    //shadow for android and ios
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  image:{
    width: 18, height: 16, resizeMode: 'contain'
  }
  
})
