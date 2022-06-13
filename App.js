import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import AppNavigation from './src/navigation';
import { useFonts } from 'expo-font';
import ProductDetail from './src/screens/ProductDetail';

const App = () => {
  const [loaded, error] = useFonts({'RobotoBold': require('./src/assets/fonts/Cabin-Bold.ttf')});
  if (!loaded) {
    return null;
  }
  return (
    <NavigationContainer>
      <StatusBar style="auto" />
      {/* <AppNavigation /> */}
      <ProductDetail />

    </NavigationContainer>
  );
}

export default App;
const styles = StyleSheet.create({
});
