import { Image, StyleSheet, Text, View,TouchableOpacity } from 'react-native'
import React from 'react'
import { Theme } from '../../common/theme/theme'
import Label from './label'
import Love from './love-btn'

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
            <Label discount={item.discount} isNew={item.isNew} isSale={item.isSale}/>
            <Love />
        </View>
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
        marginRight:20,
    },
    cardImage:{
        height: 280,
        width: 230,
        borderRadius:12,
        marginBottom:10,
    },
    image:{
        height:'100%',
        width:'100%',
        resizeMode:'stretch',
        borderRadius:10,
    },
    productName:{
        fontSize: Theme.size.small,
        color: Theme.colors.gray,
    },
    price:{
        fontSize: Theme.size.normal,
        color: Theme.colors.black,
        lineHeight:20,
    }
})