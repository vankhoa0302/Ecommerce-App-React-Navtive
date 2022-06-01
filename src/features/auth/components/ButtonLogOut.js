import React from 'react';
import {memo} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';



import { Theme } from '../../../common/theme/theme';
import Button from '../../../components/Button';

const ButtonLogOut = ({onPress}) => {
  return (
    <View style={styles.buttonLogOutContainer}>
      <Button
        style={{backgroundColor: Theme.backgrounds.paper}}
        onPress={onPress}>
        <View style={styles.buttonLogOut}>
          <Icon
            name="md-log-out-outline"
            size={25}
            color={Theme.colors.primary}
          />
          <Text style={styles.text}>Log Out</Text>
          <Icon
            name="md-log-out-outline"
            size={25}
            color={Theme.backgrounds.paper}
          />
        </View>
      </Button>
    </View>
  );
};

const styles = StyleSheet.create({
  buttonLogOutContainer: {
    paddingHorizontal: 20,
    paddingVertical: 30,
  },
  buttonLogOut: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  text: {
    // fontFamily: Theme.fontFamily.GilroyExtraBold,
    fontSize: 15,
    color: Theme.colors.primary,
  },
});

export default memo(ButtonLogOut);
