import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import phone from 'phone';
import React from 'react';
import { Image, ImageSourcePropType, View } from 'react-native';

/* ------- COMPONENTS --------- */
import PrimaryButton from '../../../components/common/Button/PrimaryButton';
import Logo from '../../../components/common/Logo';
import HeadingBold from '../../../components/common/Text/Heading/Bold';
import TextInput from '../../../components/common/TextInput';
import AuthLayout from '../../../layout/AuthLayout';

/* ---------- STORE ---------- */
import { selectUser, setUser } from '../../../store/features/authSlice';
import { useAppDispatch, useAppSelector } from '../../../store/hooks';

import { Images } from '../../../constants';
import { AuthStackParams } from '../../../navigation/AuthNavigation';
import showAlert from '../../../utils/showAlert';
import styles from './styles';

const LoginScreen = () => {
  const navigation =
    useNavigation<NativeStackNavigationProp<AuthStackParams>>();

  const user = useAppSelector(selectUser);
  const dispatch = useAppDispatch();

  const handleLogin = () => {
    if (!user.phoneNumber)
      return showAlert('LOGIN ERROR', 'Enter valid phone number.');

    const { isValid } = phone(user.phoneNumber, { country: 'IND' });
    if (!isValid) return showAlert('Login Error', 'Enter valid phone number.');

    navigation.navigate('Otp');
  };

  return (
    <AuthLayout>
      <View style={styles.headingContainer}>
        <HeadingBold text="Welcome to" />
        <Logo />
      </View>
      <View style={styles.actions}>
        <TextInput
          autoFocus
          placeholder="Mobile number"
          keyboardType="numeric"
          onChangeText={phoneNumber =>
            dispatch(setUser({ ...user, phoneNumber }))
          }
        />
        <PrimaryButton
          text="LOGIN"
          onPress={handleLogin}
          btnStyles={{ marginTop: 20 }}
        />
      </View>
      <Image source={Images.bus as ImageSourcePropType} style={styles.bus} />
    </AuthLayout>
  );
};

export default LoginScreen;
