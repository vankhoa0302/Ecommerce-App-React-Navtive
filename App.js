import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import AppNavigation from './src/navigation';
import ProductDetail from './src/screens/ProductDetail';
import Auth from './src/screens/Auth';

const App = () => {
  return (
    <NavigationContainer>
      <StatusBar style="auto" />
      {/* <AppNavigation /> */}
      {/* <ProductDetail /> */}
      <Auth />
    </NavigationContainer>
  );
}

export default App;
const styles = StyleSheet.create({
});
