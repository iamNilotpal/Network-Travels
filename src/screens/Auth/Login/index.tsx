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

const LoginScreen = () => {
  const navigation =
    useNavigation<NativeStackNavigationProp<AuthStackParams>>();

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
        />
        <PrimaryButton
          text="LOGIN"
          onPress={() => navigation.navigate('OtpScreen')}
          btnStyles={{ marginTop: 20 }}
        />
      </View>
      <Image source={Images.bus as ImageSourcePropType} style={styles.bus} />
    </AuthLayout>
  );
};

export default LoginScreen;
