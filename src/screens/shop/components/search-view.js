import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import Ionicons from 'react-native-vector-icons/Ionicons'
import { Theme } from '../../../common/theme'
const SearchView = () => {
  return (
    <TouchableOpacity style={styles.container}>
      <Ionicons name='search-outline' size={25} />
      <Text style={{color:Theme.colors.gray}}>Search Product</Text>
    </TouchableOpacity>
  )
}

export default SearchView

const styles = StyleSheet.create({
    container:{
        backgroundColor:Theme.colors.grey,
        borderRadius:8,
        flexDirection:'row',
        alignItems:'center',
        marginVertical:15,
        paddingHorizontal:10,
        paddingVertical:8,
    },
})