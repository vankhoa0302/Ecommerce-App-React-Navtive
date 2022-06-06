import { SafeAreaView, StyleSheet, View,FlatList ,Text} from 'react-native'
import React from 'react'
import { Theme } from '../../common/theme'
import CategoryCard from './components/catgory-card'
import { arrCategory } from '../../datas/category'
import SearchView from './components/search-view'
import SaleBanner from './components/sale-banner'








const renderCategory = () =>{
  return(
    <View style={{flex:1}}>
        <FlatList 
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


const ShopScreen = () => {
  return (
    <SafeAreaView style={styles.background}>
      <View style={styles.container}>
        <SearchView />
        <SaleBanner />
        {renderCategory()}
      </View>
    </SafeAreaView>
  )
}

export default ShopScreen

const styles = StyleSheet.create({
  background: {
    flex: 1,
    backgroundColor: Theme.colors.background,
  },
  container:{
    flex: 1,
    width:'90%',
    alignSelf: 'center',
    justifyContent: 'center',
  }
})