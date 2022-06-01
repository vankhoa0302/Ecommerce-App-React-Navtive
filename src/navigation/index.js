import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Router } from './router';
import TabBarBottom from './screens/tab-bar-bottom';


const Stack = createNativeStackNavigator();
const AppNavigation = () => {
  return (
    <Stack.Navigator
        screenOptions={{
            headerShown:false,
    }}>
        <Stack.Screen name={Router.BottomTabBar} component={TabBarBottom} />
    </Stack.Navigator>
  )
}

export default AppNavigation

const styles = StyleSheet.create({})