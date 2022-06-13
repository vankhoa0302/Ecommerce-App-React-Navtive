import { Image, SafeAreaView, StyleSheet, Text, View,ScrollView } from 'react-native'
import React from 'react'
import Header from '../components/header'
import { HeightScreen, Theme } from '../common/theme'
import Button from '../components/Button'

const ProductDetail = () => {
  return (
    <SafeAreaView style={styles.background}>
        <Header 
            isBack={true}
            isRight
            styleRoot={{
                position:'absolute',
                top:20,
                right:0,
                left:0,
            }}
            >
        </Header>

        <View style={styles.container}>
          <ScrollView showsVerticalScrollIndicator={false}>
            <View
              style={{ flex: 1}}>
                <ScrollView >
                    <Image 
                        style={{width:'100%', height:HeightScreen/2, resizeMode:'stretch'}}
                        source ={{
                            uri: 'https://admin.vuahanghieu.com/upload/product/2022/01/ao-thun-nike-sportswear-swoosh-dc5095-010-mau-den-size-l-61dd2afbf3d98-11012022140011.png',
                        }} 
                    />
                </ScrollView>
                <ScrollView>
                    <Text>haha</Text>
                </ScrollView>
            </View>
          </ScrollView>
        </View>
        
        <View style={styles.footer}>
          <Button style={{
            backgroundColor:'black',
          }}>
            <Text style={styles.text}>Add to cart</Text>
          </Button>
      </View>
    </SafeAreaView>

  )
}

export default ProductDetail

const styles = StyleSheet.create({
    background: {
        flex: 1,
        backgroundColor: Theme.colors.background,
      },
      container: {
        flex: 1,
        width:'100%',
        alignSelf: 'center',
        justifyContent: 'center',
      },
      footer:{
        width: '90%',
        alignSelf: 'center',
        justifyContent: 'center',
        marginBottom:18,
        marginTop:10,
      },
      text:{
        color:Theme.colors.white,
      }
})