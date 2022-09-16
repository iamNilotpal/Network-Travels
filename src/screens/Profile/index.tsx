import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { StyleSheet, TouchableOpacity, View } from 'react-native';

import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import BodyRegular from '../../components/common/Text/Body/BodyRegular';
import OtherHeader from '../../components/Header/OtherHeader';
import { COLORS } from '../../constants';
import { AuthStackParams } from '../../navigation/AuthNavigation';
import { HomeStackParams } from '../../navigation/AppNavigation';

const PROFILE_OPTIONS = [
  { label: 'My wallet', screen: 'Wallet' },
  { label: 'Get ticket details', screen: 'TicketDetail' },
  { label: 'Share' },
  { label: 'Logout', screen: 'Login' },
];

const ProfileScreen = () => {
  const navigation =
    useNavigation<
      NativeStackNavigationProp<HomeStackParams & AuthStackParams>
    >();

  return (
    <>
      <OtherHeader text="Profile" />
      <View style={styles.container}>
        <View style={styles.item}>
          <BodyRegular
            textStyles={{ fontWeight: '700', marginBottom: 5 }}
            text="Biraj Das"
          />
          <BodyRegular textStyles={{ fontWeight: '700' }} text="84029 54896" />
        </View>
        {PROFILE_OPTIONS.map((item, i) => (
          <TouchableOpacity
            style={styles.item}
            key={i}
            onPress={() =>
              item.screen ? navigation.navigate(item.screen as any) : {}
            }>
            <BodyRegular textStyles={{ fontWeight: '700' }} text={item.label} />
          </TouchableOpacity>
        ))}
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 60,
    marginHorizontal: 30,
  },
  item: {
    borderWidth: 1,
    borderColor: COLORS.primary,
    borderRadius: 5,
    width: 317,
    paddingHorizontal: 20,
    paddingVertical: 12,
    backgroundColor: COLORS.primary100,
    marginBottom: 21,
  },
});

export default ProfileScreen;
