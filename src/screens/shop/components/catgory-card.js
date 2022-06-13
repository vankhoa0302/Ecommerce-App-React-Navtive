import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { Theme } from '../../../common/theme'
import Ionicons from 'react-native-vector-icons/Ionicons'
import { useNavigation } from '@react-navigation/native'
import { Router } from '../../../navigation/router'
const CategoryCard= ({item}) => {
  const navigation = useNavigation();
  return (
    <TouchableOpacity style={styles.container} activeOpacity={0.5} onPress={()=>{navigation.navigate(Router.Catalog,item.categoryName)}}>
      <View style={styles.root} >
          <Image style={{
                height:60,
                width:60, 
                borderRadius:40, 
                resizeMode:'stretch'}} 
                source={{
                    uri: item.categoryImg}
                    }/>
          <Text style={{marginLeft:10}}>{item.categoryName}</Text>
      </View>
      <View style={styles.root}>
          <View>
            <Text>12</Text>
          </View>
          <Ionicons name='chevron-forward-outline' size={20} style={{marginLeft:10}}/>
      </View>
    </TouchableOpacity>
  )
}

export default CategoryCard

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:Theme.colors.grey,
        borderRadius:8,
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
        marginVertical:5,
        paddingHorizontal:10,
        paddingVertical:12,
    },
    root:{
        flexDirection:'row',
        alignItems:'center'
    }
})