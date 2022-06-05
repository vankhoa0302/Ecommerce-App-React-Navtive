import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Theme, WidthScreen } from '../common/theme'

const Devider = () => {
  return (
    <View style={{
        height:0.5,
        width:WidthScreen,
        backgroundColor:Theme.colors.gray,
        }}>
    </View>
  )
}

export default Devider

const styles = StyleSheet.create({})