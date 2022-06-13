import { StyleSheet, Text, TouchableOpacity, View,Image } from 'react-native'
import React from 'react'
import { Theme } from '../../../common/theme'
import { useNavigation } from '@react-navigation/native'
import { Router } from '../../../navigation/router'

const CategoryCard = ({item}) => {
  const navigation = useNavigation();

  return (
    <TouchableOpacity style={styles.root} activeOpacity={0.5} onPress={()=>{navigation.navigate(Router.ProductScreen,item.categoryName)}}>
        <View style={styles.cardImage}>
            <Image 
                style={styles.image}
                source ={{
                    uri: item.categoryImg,
                }} 
            />
        </View>
        <Text style={styles.categoryName}>{item.categoryName}</Text>
    </TouchableOpacity>
  )
}

export default CategoryCard

const styles = StyleSheet.create({
    root:{
        
        flex:1,
        marginRight:20,
    },
    cardImage:{
        height: 110,
        width: 110,
        borderRadius:6,
        marginBottom:5
    },
    image:{
        height:'100%',
        width:'100%',
        resizeMode:'stretch',
        borderRadius:5,
    },
    categoryName:{
        fontSize:Theme.size.normal,
        textAlign:'center'
    }
})