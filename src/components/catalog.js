import { SafeAreaView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import ListProduct from './product/list-product'
import { arrProduct } from '../datas/product'
import { useRoute,useNavigation } from '@react-navigation/native' 
import { Theme } from '../common/theme'
import Header from './header'
import { Router } from '../navigation/router'
import { useFonts } from 'expo-font';

const Catalog = () => {
    const route = useRoute();
    const navigation = useNavigation();
    const [loaded, error] = useFonts({RobotoBold: require('../assets/fonts/Cabin-Bold.ttf')});
    if (!loaded) {
      return null;
    }
  return (
      <SafeAreaView style={styles.background}>
          <View style={styles.container}>
            <Header 
                isBack={true}
                isRight={true}
                midHeader={<Text style={{fontFamily:'RobotoBold'}}>{route.params}</Text>}
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