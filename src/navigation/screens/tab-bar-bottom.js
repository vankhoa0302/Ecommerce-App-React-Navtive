import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Router } from '../router';
import Ionicons from 'react-native-vector-icons/Ionicons'
import { HeightScreen, Theme } from '../../common/theme/theme';
import TabBarIcon from '../components/tab-bar-icon';
import HomeScreen from '../../screens/main';
import DetailsScreen from '../../screens/cart';
import FavoritesScreen from '../../screens/favorites';
import ProfileScreen from '../../screens/profile';


const Tab = createBottomTabNavigator();
const TabBarBottom = () => {
  return (
    <Tab.Navigator
        screenOptions={{
            headerShown:false,
            tabBarShowLabel:false,
            tabBarStyle:{
                backgroundColor:Theme.backgrounds.white,
                paddingBottom:15,
                paddingVertical:10,
                height:HeightScreen *0.09,
                borderTopEndRadius: 25,
                borderTopStartRadius: 25,
                position: 'absolute',
                paddingHorizontal: 8,
                shadowOpacity: 0.15,
            }
      }}>
        <Tab.Screen
            name={Router.Shop}
            component={HomeScreen} 
            options={{
                
                tabBarIcon: ({color,focused}) => (
                  <TabBarIcon name={Router.Shop} focused={focused} />
                ),
              }}
        />
        <Tab.Screen
            name={Router.Cart}
            component={DetailsScreen} 
            options={{
                tabBarIcon: ({color,focused}) => (
                  <TabBarIcon name={Router.Cart} focused={focused} />
                ),
                }}
        />
        <Tab.Screen
          name={Router.Heart}
          component={FavoritesScreen} 
          options={{
              
              tabBarIcon: ({color,focused}) => (
                <TabBarIcon name={Router.Heart} focused={focused} />
              ),
            }}
        />
        <Tab.Screen
            name={Router.Profile}
            component={ProfileScreen} 
            options={{
                tabBarIcon: ({color,focused}) => (
                  <TabBarIcon name={Router.Profile} focused={focused} />
                ),
                }}
        />
    </Tab.Navigator>
  )
}

export default TabBarBottom

const styles = StyleSheet.create({})