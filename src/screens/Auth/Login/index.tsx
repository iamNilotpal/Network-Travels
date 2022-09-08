import { View, Text, Image, ImageSourcePropType } from 'react-native';
import React from 'react';
import AuthLayout from '../../../layout/AuthLayout';
import HeadingBold from '../../../components/common/Text/Heading/Bold';
import Logo from '../../../components/common/Logo';
import styles from './styles';
import TextInput from '../../../components/common/TextInput';
import PrimaryButton from '../../../components/common/Button/PrimaryButton';
import { Images } from '../../../constants';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { AuthStackParams } from '../../../navigation/AuthNavigation';
import { useAppDispatch, useAppSelector } from '../../../store/hooks';
import { selectUser, setUser } from '../../../store/features/authSlice';
import showAlert from '../../../utils/showAlert';
import phone from 'phone';

const LoginScreen = () => {
  const navigation =
    useNavigation<NativeStackNavigationProp<AuthStackParams>>();
  const user = useAppSelector(selectUser);
  const dispatch = useAppDispatch();

  const handleLogin = () => {
    if (!user.mobileNumber)
      return showAlert('LOGIN ERROR', 'Enter valid phone number.');

    const { isValid } = phone(user.mobileNumber, { country: 'IND' });
    if (!isValid) return showAlert('Login Error', 'Enter valid phone number.');

    navigation.navigate('OtpScreen');
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
          onChangeText={mobileNumber =>
            dispatch(setUser({ ...user, mobileNumber }))
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
