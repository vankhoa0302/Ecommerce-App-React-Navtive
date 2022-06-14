import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useFonts } from 'expo-font';

const StyledText = ({isTitle,style,content}) => {
    const [fontLoaded] = useFonts({
        regular: require('../assets/fonts/Quicksand.ttf'),
        bold: require('../assets/fonts/Quicksand-Bold.ttf'),
        medium: require('../assets/fonts/Quicksand-Medium.ttf'),
        semibold: require('../assets/fonts/Quicksand-SemiBold.ttf')
    });
    if(!fontLoaded) return null;
  return <Text style={[{fontFamily: isTitle ? "bold":"medium"}, style]}>{content}</Text>
}

export default StyledText

const styles = StyleSheet.create({
    // text:{
    //     fontFamily: regular
    // }
})