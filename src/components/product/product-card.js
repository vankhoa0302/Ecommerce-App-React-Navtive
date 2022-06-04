import { Image, StyleSheet, Text, View,TouchableOpacity } from 'react-native'
import React from 'react'
import { Theme } from '../../common/theme/theme'
import Label from './label'

const ProductCard = ({item}) => {
  return (
    <TouchableOpacity style={styles.root}>
        <View style={styles.cardImage}>
            <Image 
                style={styles.image}
                source ={{
                    uri: item.imageUrl,
                }} 
            />
            <Label discount='20%' isSale={item.isSale}/>
        </View>
        <Text style={styles.brandName}>{item.brand}</Text>
        <Text style={styles.productName}>{item.name}</Text>
        {item.isSale ?
                <View style={{
                    flexDirection:'row'
                }}>
                <Text 
                    style={{
                        textDecorationLine:'line-through',
                    }}>{'$' + item.price} </Text>
                <Text 
                    style={{
                        color:Theme.colors.sale
                    }}>{'$' + (item.price - (item.price*item.discount))}</Text>

                </View>
                :
                <Text style={styles.price}>{'$' + item.price  }</Text>}
        
    </TouchableOpacity>
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
    },
    brandName:{
        fontSize: Theme.size.small,
        color: Theme.colors.gray,
    },
    productName:{
        fontSize: Theme.size.h5,
        color: Theme.colors.black,

    },
    price:{
        fontSize: Theme.size.normal,
        color: Theme.colors.black,
        lineHeight:20,
    }
})