
import React from 'react';
import {
  Platform,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import {useNavigation} from '@react-navigation/native';
import {Router} from '@src/navigation/router';
import { Theme } from '../common/theme/theme';

const Header = ({
  title,
  pageName,
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
        <Text
          style={styles.center}>
          {title}
        </Text>
          {isRight && (
          <TouchableOpacity onPress={() => navigation.navigate(Router.Message)}>
              <Icon
                name="search-outline"
                size={25}
                color={
                  Theme.colors.black
                }
              />
          </TouchableOpacity>
          )}
      </View>
      <Text style={styles.pageName}>{pageName}</Text>
    </View>

  );
};

export default Header;

const styles = StyleSheet.create({
  container:{
    marginHorizontal:10,
    backgroundColor: Theme.backgrounds.white,
  },  
  root: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    justifyContent:'space-between'
  },
  center:{
    fontStyle:'italic',
  },
  pageName:{
    fontSize: Theme.size.h2,
    color:Theme.colors.black,
    fontWeight:'bold'
  }
});
