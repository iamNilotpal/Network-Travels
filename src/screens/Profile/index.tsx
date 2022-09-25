import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { StyleSheet, TouchableOpacity, View } from 'react-native';

import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import BodyRegular from '../../components/common/Text/Body/BodyRegular';
import OtherHeader from '../../components/Header/OtherHeader';
import { COLORS } from '../../constants';
import { AuthStackParams } from '../../navigation/AuthNavigation';
import { AppStackParams } from '../../navigation/AppNavigation';
import { useAppSelector } from '../../store/hooks';
import { selectActivated, selectUser } from '../../store/features/authSlice';

const PROFILE_OPTIONS = [
  { label: 'My wallet', screen: 'Wallet' },
  { label: 'Get ticket details', screen: 'TicketDetails' },
  { label: 'Share' },
  { label: 'Logout', screen: 'Login' },
];

const AuthInfo = () => {
  const isActivated = useAppSelector(selectActivated);
  const { fullName, phoneNumber } = useAppSelector(selectUser);
  const firstFive = phoneNumber.substring(0, 5);
  const lastFive = phoneNumber.substring(5, phoneNumber.length);
  const numberToShow = `${firstFive} ${lastFive}`;
  const navigation =
    useNavigation<NativeStackNavigationProp<AuthStackParams>>();

  return isActivated ? (
    <>
      <BodyRegular
        textStyles={{ fontWeight: '700', marginBottom: 5 }}
        text={fullName}
      />
      <BodyRegular textStyles={{ fontWeight: '700' }} text={numberToShow} />
    </>
  ) : (
    <TouchableOpacity onPress={() => navigation.navigate('Registration')}>
      <BodyRegular
        textStyles={{ fontWeight: '700', marginBottom: 5 }}
        text="Login / Sign-up"
      />
      <BodyRegular text="Login to receive our latest offers" />
    </TouchableOpacity>
  );
};

const ProfileScreen = () => {
  const navigation =
    useNavigation<
      NativeStackNavigationProp<AppStackParams & AuthStackParams>
    >();

  return (
    <>
      <OtherHeader text="Profile" />
      <View style={styles.container}>
        <View style={styles.item}>
          <AuthInfo />
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
