import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Router } from './router';
import TabBarBottom from './screens/tab-bar-bottom';
import Login from '../features/auth/screens/home-auth/login';
import Register from '../features/auth/screens/home-auth/register';
import ForgotPassword from '../features/auth/screens/home-auth/forgot-password';
import Catalog from '../components/catalog';
import ProductCard from '../components/product/product-card';
import ProductDetail from '../screens/ProductDetail';



const Stack = createNativeStackNavigator();

const configTabOther = {
  animation: 'timing',
  config: {
    duration: 300,
  },
};
const AppNavigation = () => {
  return (
    <Stack.Navigator
        screenOptions={{
            headerShown:false,
    }}>
        <Stack.Screen name={Router.BottomTabBar} component={TabBarBottom} />
        {[
        {name: Router.Login, component: Login},
        {name: Router.Register, component: Register},
        {name: Router.ForgotPassword, component: ForgotPassword},
        {name: Router.Catalog, component: Catalog},
        {name: Router.ProductDetail, component: ProductDetail},
      ].map(stack => {
        return (
          <Stack.Screen
            key={stack.name}
            name={stack.name}
            component={stack.component}
            options={{
              transitionSpec: {
                open: configTabOther,
                close: configTabOther,
              },
            }}
          />
        );
      })}
    </Stack.Navigator>
  )
}

export default AppNavigation

const styles = StyleSheet.create({})