import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import AppNavigation from './src/navigation';

// import AppLoading from 'expo-app-loading';
const App = () => {
//   let [fontsLoaded] = useFonts({
//     customFonts
//   });
//   const customFonts = {
//     RobotoBold: require("./src/assets/fonts/Roboto-Bold.ttf"),
//   };
//   if (!fontsLoaded) {
//     return <AppLoading />;
// }

  return (
    <NavigationContainer>
      <StatusBar style="auto" />
      <AppNavigation />
    </NavigationContainer>
    // <ProductCard />
  );
}

export default App;
const styles = StyleSheet.create({
});
