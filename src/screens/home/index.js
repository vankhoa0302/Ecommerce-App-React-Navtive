import { FlatList, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Background from '../../components/Background'
import ProductCard from '../../components/product/product-card';



const Data =[
  {
    id:0,
    imageUrl:'https://admin.vuahanghieu.com/upload/product/2022/01/ao-thun-nike-sportswear-swoosh-dc5095-010-mau-den-size-l-61dd2afbf3d98-11012022140011.png',
    name:'Áo Nike',
    price:15,
    brand:'abc',
    isSale:true,
    discount: 0.2,
  },
  {
    id:1,
    imageUrl:'http://aothunvnxk.vn/wp-content/uploads/2015/09/ao-thun-co-tron-hieu-nike-71.png',
    name:'ao 2',
    price:10,
    brand:'abcde',
    isSale:false,
    discount: 0.15,
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