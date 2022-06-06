import { StyleSheet, Text, FlatList } from 'react-native'
import React from 'react'
import CategoryCard from '../../screens/home/components/category-card'
import ProductCard from './product-card'

const ListProduct = ({arrProduct,isHome}) => {
  return (
    <FlatList 
    horizontal={isHome}
    numColumns={isHome ? null :2}
    showsHorizontalScrollIndicator={false}
    data={arrProduct}
    renderItem ={({item}) => (
      <ProductCard item={item}/>
    )}
    keyExtractor={(item) => item.id}
  />
  )
}

export default ListProduct

const styles = StyleSheet.create({})