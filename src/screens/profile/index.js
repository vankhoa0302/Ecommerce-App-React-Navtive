import { StyleSheet, Text, View,FlatList } from 'react-native'
import React from 'react'
import { Theme } from '../../common/theme/theme';
import InfoCard from '../../features/auth/components/info-card';
import InfoProfile from '../../features/auth/components/info-profile';
import ButtonLogOut from '../../features/auth/components/ButtonLogOut';

const Profile = () => {
  const arrInfoCard = [
    {nameIcon: 'basket-outline', name: 'My orders'},
    {nameIcon: 'ios-location-outline', name: 'Shipping addresses'},
    {nameIcon: 'ios-card-outline', name: 'Payment methods'},
    {nameIcon: 'ios-barcode-outline', name: 'Promocodes'},
    {nameIcon: 'pencil-outline', name: 'My reviews'},
    {nameIcon: 'cog-outline', name: 'Settings'},
  ];
    return (
      <View style={styles.root}>
        <FlatList
          data={arrInfoCard}
          renderItem={({item}) => {
            return <InfoCard nameIcon={item.nameIcon} name={item.name} />;
          }}
          keyExtractor={(item, index) => index.toString()}
          ListHeaderComponent={InfoProfile}
          ListFooterComponent={
            <ButtonLogOut onPress={() => dispatch({type: typeAuths.logout})} />
          }
        />
    </View>
    );
  }
export default Profile

const styles = StyleSheet.create({  
  root: {
    flex: 1,
    justifyContent: 'center',
    alignContent: 'center',
    backgroundColor: Theme.backgrounds.white,
    paddingBottom: 44,  
    // paddingTop: Platform.OS === 'ios' ? 44 : 0,
  },
})