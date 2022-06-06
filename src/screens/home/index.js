import { FlatList, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Background from '../../components/Background'
import ProductCard from '../../components/product/product-card';
import ProductTitle from '../../components/product/title-list-product';
import CategoryCard from './components/category-card';
import Devider from '../../components/Devider';
import { arrCategory } from '../../datas/category';
import ListProduct from '../../components/product/list-product';
import { arrProduct } from '../../datas/product';




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
          <ListProduct arrProduct={arrProduct} isHome={true}/>
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