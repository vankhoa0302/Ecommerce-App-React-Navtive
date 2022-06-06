import {Theme} from '@src/common/theme/theme';
import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import {Router} from '../router';

const TabBarIcon = ({name, focused, ...props}) => {
  return (
    <View style={styles.root}>
      {name === Router.Home && (
        <Image
          source={
            focused
              ? require('../../assets/images/icons/home-active.png')
              : require('../../assets/images/icons/home.png')
          }
          style={{width: 30, height: 25, resizeMode: 'contain'}}
        />
      )}
      {name === Router.Shop && (
        <Image
          source={
            focused
              ? require('../../assets/images/icons/search-active.png')
              : require('../../assets/images/icons/search.png')
          }
          style={{width: 30, height: 25, resizeMode: 'contain'}}
        />
      )}
      {name === Router.Heart && (
        <Image
          source={
            focused
              ? require('../../assets/images/icons/heart-active.png')
              : require('../../assets/images/icons/heart.png')
          }
          style={{width: 30, height: 25, resizeMode: 'contain'}}
        />
      )}
      {name === Router.Cart && (
        <Image
          source={
            focused
              ? require('../../assets/images/icons/cart-active.png')
              : require('../../assets/images/icons/cart.png')
          }
          style={{width: 30, height: 25, resizeMode: 'contain'}}
        />
      )}
      {name === Router.Profile && (
        <Image
          source={
            focused
              ? require('../../assets/images/icons/user-active.png')
              : require('../../assets/images/icons/user.png')
          }
          style={{width: 30, height: 25, resizeMode: 'contain'}}
        />
      )}

      {focused && <Text style={styles.text}>{name}</Text>}
    </View>
  );
};

export default TabBarIcon;

const styles = StyleSheet.create({
  root: {
    alignItems: 'center',
    borderRadius: 25,
    paddingVertical: 4,
  },
  text: {
    // fontFamily: Theme.fontFamily.RobotoBold,
    fontSize: Theme.size.small,
    color: Theme.colors.secondary,
  },
  linearGradient: {
    flex: 1,
    paddingLeft: 15,
    paddingRight: 15,
    borderRadius: 5,
  },
});
