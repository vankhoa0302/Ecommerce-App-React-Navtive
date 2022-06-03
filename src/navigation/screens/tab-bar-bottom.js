import { StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Router } from '../router';
import { HeightScreen, Theme } from '../../common/theme/theme';
import TabBarIcon from '../components/tab-bar-icon';
import DetailsScreen from '../../screens/cart';
import FavoritesScreen from '../../screens/favorites';
import Profile from '../../screens/profile';
import HomeAuth from '../../features/auth/screens/home-auth';
import HomeScreen from '../../screens/home';
const Tab = createBottomTabNavigator();
const TabBarBottom = () => {
  // const {isLogin} = useSelector(state => state.auth);
  const [isLogin, setIsLogin] = useState(false)
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
            name={Router.Home}
            component={HomeScreen} 
            options={{
                
                tabBarIcon: ({color,focused}) => (
                  <TabBarIcon name={Router.Home} focused={focused} />
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
            component={isLogin ? Profile : HomeAuth} 
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