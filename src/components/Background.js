
import React, {memo} from 'react';
import {
  StyleSheet,
  KeyboardAvoidingView,
  View,
  ScrollView,
  Platform,
} from 'react-native';
import { Theme } from '../common/theme/theme';
import Header from './header';

const Background = ({children, isButtonBack,isButtonRight,style,title,pageName}) => (
  <View style={styles.background}>
    <Header
      isBack={isButtonBack}
      isRight={isButtonRight}
      styleRoot={style}
      title={title}
      pageName={pageName}
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
  </View>
);

const styles = StyleSheet.create({
  background: {
    flex: 1,
    backgroundColor: Theme.backgrounds.white,
    paddingTop: Platform.OS === 'ios' ? 44 : 0,
  },
  container: {
    flex: 1,
    width: '90%',
    alignSelf: 'center',
    justifyContent: 'center',
  },
});

export default memo(Background);
