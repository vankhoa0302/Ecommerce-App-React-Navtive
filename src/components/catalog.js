import { SafeAreaView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import ListProduct from './product/list-product'
import { arrProduct } from '../datas/product'
import { useRoute,useNavigation } from '@react-navigation/native' 
import { Theme } from '../common/theme'
import Header from './header'
import { Router } from '../navigation/router'
import StyledText from './StyledText'
import { useFonts } from 'expo-font';



const Catalog = () => {
    const route = useRoute();
    const navigation = useNavigation();
  return (
      <SafeAreaView style={styles.background}>
          <View style={styles.container}>
            <Header 
                isBack={true}
                isRight={true}
                midHeader={<StyledText isTitle={true} content={route.params} style={{fontStyle:'italic'}} />}
                >
            </Header>
            <ListProduct arrProduct={arrProduct} isHome ={false} />
          </View>
      </SafeAreaView>


  )
}

export default Catalog

const styles = StyleSheet.create({
    background: {
        flex: 1,
        backgroundColor: Theme.colors.background,
      },
      container: {
        flex: 1,
        width: '90%',
        alignSelf: 'center',
        justifyContent: 'center',
      },
})