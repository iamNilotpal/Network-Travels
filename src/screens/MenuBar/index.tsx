import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import React from 'react';
import { TouchableOpacity, View } from 'react-native';
import BodyRegular from '../../components/common/Text/Body/BodyRegular';
import User from '../../components/Icons/User';
import X from '../../components/Icons/X';
import { COLORS } from '../../constants';
import { MENU_BAR_DATA } from '../../constants/menuBar';
import { AppStackParams } from '../../navigation/AppNavigation';
import { AuthStackParams } from '../../navigation/AuthNavigation';
import { selectActivated, selectUser } from '../../store/features/authSlice';
import { useAppSelector } from '../../store/hooks';
import styles from './styles';

const AuthProfile = () => {
  const isActivated = useAppSelector(selectActivated);
  const user = useAppSelector(selectUser);
  const navigation =
    useNavigation<
      NativeStackNavigationProp<AppStackParams & AuthStackParams>
    >();

  return isActivated ? (
    <TouchableOpacity
      onPress={() => navigation.navigate('Profile')}
      style={[styles.linkContainer, { marginBottom: -1, marginLeft: -5 }]}
      activeOpacity={0.5}>
      <User />
      <View style={{ marginLeft: -10 }}>
        <BodyRegular
          text={`Hi ${user.fullName}`}
          textStyles={{ marginLeft: 40, fontWeight: '700' }}
        />
        <BodyRegular
          text={user.phoneNumber}
          textStyles={{ marginLeft: 40, color: COLORS.lightGray }}
        />
      </View>
    </TouchableOpacity>
  ) : (
    <TouchableOpacity
      onPress={() => navigation.navigate('Registration')}
      style={[styles.linkContainer, { marginBottom: -1, marginLeft: -5 }]}
      activeOpacity={0.5}>
      <User />
      <BodyRegular text="Login / Sign-up" textStyles={{ marginLeft: 30 }} />
    </TouchableOpacity>
  );
};

const MenuBarScreen = () => {
  const navigation = useNavigation<NativeStackNavigationProp<AppStackParams>>();

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={{ margin: 30 }}
        onPress={() => navigation.goBack()}>
        <X width={18} height={18} />
      </TouchableOpacity>
      <AuthProfile />
      <View style={styles.divider} />
      <View>
        {MENU_BAR_DATA.map(({ Icon, text, screen }) => (
          <TouchableOpacity
            key={text}
            style={styles.linkContainer}
            activeOpacity={0.5}
            onPress={() => screen && navigation.navigate(screen as any)}>
            <Icon />
            <BodyRegular
              text={text}
              textStyles={{
                marginLeft:
                  text === 'Share'
                    ? 44
                    : text === 'About us'
                    ? 44
                    : text === 'Terms & condition'
                    ? 38
                    : 40,
              }}
            />
          </TouchableOpacity>
        ))}
      </View>
      <BodyRegular
        text="v1.2.1"
        textStyles={{ marginTop: 128, marginLeft: 40 }}
      />
    </View>
  );
};

export default MenuBarScreen;
