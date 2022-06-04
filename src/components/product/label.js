import { StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { Theme } from '../../common/theme/theme'





const Label = ({isNew = false, isSale = false,discount}) => {
    const labels = {
        new : {bg:Theme.colors.black,text:'new'},
        sale : {bg:Theme.colors.sale,text:discount}
    }
    const [label,setLabel] = useState(labels)
    // const [label,setLabel] = useState(labels)
    useEffect(() =>{
        if(isNew){
            setLabel(labels.new)
  
        }else if(isSale){
            setLabel(labels.sale)
        }
    }
    )
  return (
    <View 
        style={[
            styles.root,
            {
                backgroundColor : label.bg
            }

            ]}>
      <Text style={styles.label}>{label.text}</Text>
    </View>
  )
}

export default Label

const styles = StyleSheet.create({
    root:{
        height:24,
        width:40,
        borderRadius:20,
        padding:5,
        position:'absolute',
        top:8,
        left:10,
        alignItems:'center',
        justifyContent:'center'
    },
    label:{
        fontSize:Theme.size.small,
        textTransform:'uppercase',
        textAlign:'center',
        color: Theme.backgrounds.white,
    }
})