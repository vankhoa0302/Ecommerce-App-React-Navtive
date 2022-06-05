import { FlatList, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Background from '../../components/Background'
import ProductCard from '../../components/product/product-card';
import ProductTitle from '../../components/product/title-list-product';
import CategoryCard from '../../components/category/home-card';
import Devider from '../../components/Devider';

const arrCategory =[
  {
    id:0,
    categoryName:'Women',
    categoryImg: 'https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/be52452b-a8a8-4d73-8933-e20476095c4c/jordan-essentials-boxy-t-shirt-sqZZ19.png'
  },
  {
    id:1,
    categoryName:'Man',
    categoryImg: 'https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/c78c3d53-d78c-4221-9acf-b8697199b8bf/sportswear-essentials-t-shirt-K9vnhV.png'

  },
  {
    id:2,
    categoryName:'Kid',
    categoryImg: 'https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/fddb16ac-d372-480f-95e7-f4bb1f517ee9/sportswear-older-t-shirt-DTl9PF.png'

  },
  {
    id:3,
    categoryName:'Sneaker',
    categoryImg: 'https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/bf85158d-b59e-42ec-bec5-39555d23fc33/air-max-90-g-golf-shoes-LMWm0d.png'

  }
]

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
        pageName="Home"
        >
          {renderCategory()}
          <Devider />
          {renderProductBox()}

      </Background>

    );
  }
export default HomeScreen

const styles = StyleSheet.create({})