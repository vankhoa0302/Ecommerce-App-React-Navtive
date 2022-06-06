
import React, {memo} from 'react';
import {
  StyleSheet,
  KeyboardAvoidingView,
  View,
  ScrollView,
  Platform,
  SafeAreaView
} from 'react-native';
import { Theme } from '../common/theme/theme';
import Header from './header';

const Background = ({children, isButtonBack,isButtonRight,style,midHeader}) => (
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
    {/* {isButtonBack ? <ButtonBack navigation={navigation} /> : <></>} */}
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
});

export default memo(Background);
