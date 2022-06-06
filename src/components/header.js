
import React from 'react';
import {
  Image,
  Platform,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import {useNavigation} from '@react-navigation/native';
import { Theme } from '../common/theme/theme';
import { Router } from '../navigation/router';
const Header = ({
  midHeader,
  isBack,
  styleRoot,
  isRight,
  ...props
}) => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
        <View style={[styles.root, styleRoot]}>
          {isBack && (
          <TouchableOpacity
            onPress={() => {
              navigation.goBack();
            }}>

                <Icon
                  name="chevron-back-outline"
                  size={25}
                  color={Theme.colors.black}
                />

          </TouchableOpacity>
          )}
        <View style={{alignSelf:'flex-end'}}>
          {midHeader}
        </View>
          {isRight && (
          <TouchableOpacity onPress={() => navigation.navigate(Router.Cart)} style={{alignItems:'flex-end'}}>
            <Image source={require('../assets/images/icons/cart-active.png')} style ={{height:25, width:30, resizeMode:'contain'}} />
          </TouchableOpacity>
          )}
      </View>
    </View>

  );
};

export default Header;

const styles = StyleSheet.create({
  container:{
    
    marginHorizontal:10,
    marginVertical:20,
    backgroundColor: Theme.backgrounds.white,
  },  
  root: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
  },
  pageName:{
    fontSize: Theme.size.h2,
    color:Theme.colors.black,
    fontWeight:'bold'
  }
});
