import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Theme } from '../common/theme/theme'

const ProductCard = ({item}) => {
  return (
    <View style={styles.root}>
        <View style={styles.cardImage}>
            <Image 
                style={styles.image}
                source ={{
                    uri: item.imageUrl,
                }} 
            />
        </View>
        <Text>{item.brand}</Text>
        <Text>{item.name}</Text>
        <Text>{`${item.price}`}</Text>
    </View>
  )
}

export default ProductCard

const styles = StyleSheet.create({
    root:{
        flex:1,
        backgroundColor:Theme.backgrounds.white,
        marginRight:20,
    },
    cardImage:{
        height: 184,
        width: 152,
        borderRadius:20,
        backgroundColor:'red'
    },
    image:{
        height:'100%',
        width:'100%',
        resizeMode:'stretch',
        borderRadius:20,

    }
})