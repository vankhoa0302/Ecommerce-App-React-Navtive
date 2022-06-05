import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { Theme } from '../../common/theme'

const ProductTitle = ({title,subTitle,onPress, ...props}) => {
  return (
    <View style = {styles.root}>
        <View>
            <Text style={{
                fontSize:Theme.size.h4,
                fontWeight:'500'
                }}>{title}</Text>
            <Text style={[
                styles.text,
                {
                color:Theme.colors.gray,
                    
                }
            ]}
                >{subTitle}</Text>
        </View>
        <TouchableOpacity onPress={onPress}>
            <Text style={styles.text}>View all</Text>
        </TouchableOpacity>
    </View>
  )
}

export default ProductTitle

const styles = StyleSheet.create({
    root:{
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
        marginVertical:10,
    },
    text:{
        fontSize:Theme.size.small,
        fontStyle:'italic'
    }
})