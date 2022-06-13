
import React, {memo} from 'react';
import {
  StyleSheet,
  KeyboardAvoidingView,
  View,
  ScrollView,
  Platform,
  SafeAreaView,
  Text
} from 'react-native';
import { Theme } from '../common/theme/theme';
import Button from './Button';
import Header from './header';

const Background = ({
    children, 
    isButtonBack,
    isButtonRight,
    style,
    midHeader,
  }) => (
    <SafeAreaView style={styles.background}>
      <Header
        isBack={isButtonBack}
        isRight={isButtonRight}
        styleRoot={style}
        midHeader={midHeader}
      />
      <View style={styles.container}>
        {/* <KeyboardAvoidingView
          behavior="position"
          keyboardVerticalOffset={Platform.OS === 'ios' ? 40 : 0}> */}
        <View>
          <ScrollView showsVerticalScrollIndicator={false}>
            <View
              style={{ flex: 1}}>
              {children}
            </View>
          </ScrollView>
        </View>
        {/* </KeyboardAvoidingView> */}
      </View>
    </SafeAreaView>
);

const styles = StyleSheet.create({
  background: {
    flex: 1,
    backgroundColor: Theme.colors.background,
  },
  container: {
    flex: 1,
    width: '90%',
    alignSelf: 'center',
    justifyContent: 'center',
  },
  footer:{
    width: '90%',
    alignSelf: 'center',
    justifyContent: 'center',
    marginBottom:18,
    marginTop:10,
  },
  text:{
    color:Theme.colors.white,
  }
});

export default memo(Background);
