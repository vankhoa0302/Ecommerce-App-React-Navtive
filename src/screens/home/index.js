import { FlatList, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Background from '../../components/Background'
import ProductCard from '../../components/product/product-card';
import ProductTitle from '../../components/product/title-list-product';
import CategoryCard from './components/category-card';
import Devider from '../../components/Devider';
import { arrCategory } from '../../datas/category';



const Data =[
  {
    id:0,
    imageUrl:'https://admin.vuahanghieu.com/upload/product/2022/01/ao-thun-nike-sportswear-swoosh-dc5095-010-mau-den-size-l-61dd2afbf3d98-11012022140011.png',
    name:'Áo Nike',
    price:15,
    brand:'abc',
    isSale:true,
    discount: 0.2,
    isNew:false
  },
  {
    id:1,
    imageUrl:'https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/7d670a2a329b49e39e36ad6b00f01ad4_9366/Ao_Thun_3_Soc_Future_Icons_trang_H26629_01_laydown.jpg',
    name:'ao 2',
    price:10,
    brand:'abcde',
    isSale:false,
    discount: 0.15,
    isNew:true,
  },
  {
    id:2,
    imageUrl:'https://admin.vuahanghieu.com/upload/product/2022/01/ao-thun-nike-sportswear-swoosh-dc5095-010-mau-den-size-l-61dd2afbf3d98-11012022140011.png',
    name:'Áo Nike',
    price:15,
    brand:'abc',
    isSale:true,
    discount: 0.2,
    isNew:false
  },
]
const arrTitle =[
  {
    id:0,
    title:'Sale',
    subTitle:'Super summer sale'
  },
  {
    id:1,
    title:'New',
    subTitle:'You have never seen before!'
  }
]
const renderCategory = () =>{
    return(
      <View style={{marginVertical:20}}>
          <ProductTitle title= 'Categories'/>
          <FlatList 
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            data={arrCategory}
            renderItem ={({item}) => (
              <CategoryCard item={item}/>
            )}
            keyExtractor={(item) => item.id}
          />
      </View>
    )
}
const renderProductBox = () =>{
  return arrTitle.map((item) =>{
    return(
      <View style={{marginVertical:20}} key={item.id}>
          <ProductTitle title={item.title} subTitle={item.subTitle}/>
          <FlatList 
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            data={Data}
            renderItem ={({item}) => (
              <ProductCard item={item} key={item.id} />
            )}
            keyExtractor={(item) => item.id}
          />
      </View>
    )
  }
  )
}
const HomeScreen = () => {
    return (
      <Background 
        isButtonRight={true}
        midHeader={<Text>Home</Text>}
        >
          {renderCategory()}
          <Devider />
          {renderProductBox()}

      </Background>

    );
  }
export default HomeScreen

const styles = StyleSheet.create({})