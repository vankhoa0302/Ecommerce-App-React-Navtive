import { FlatList, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Background from '../../components/Background'
import ProductCard from '../../components/ProductCard';



const Data =[
  {
    id:0,
    imageUrl:'https://admin.vuahanghieu.com/upload/product/2022/01/ao-thun-nike-sportswear-swoosh-dc5095-010-mau-den-size-l-61dd2afbf3d98-11012022140011.png',
    name:'ao 1',
    price:'222',
    brand:'abc',
  },
  {
    id:1,
    imageUrl:'http://aothunvnxk.vn/wp-content/uploads/2015/09/ao-thun-co-tron-hieu-nike-71.png',
    name:'ao 2',
    price:'333',
    brand:'abcde',
  }
]
const HomeScreen = () => {
    return (
      <Background 
        isButtonRight={true}
        pageName="Home"
        >
        <FlatList 
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          data={Data}
          renderItem ={({item}) => (
            <ProductCard item={item} key={item.id} />
            // console.log(item)
          )}
          keyExtractor={(item) => item.id}
        />
      </Background>

    );
  }
export default HomeScreen

const styles = StyleSheet.create({})