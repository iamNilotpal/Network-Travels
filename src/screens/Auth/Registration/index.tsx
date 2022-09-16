import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import phone from 'phone';
import React from 'react';
import {
  Image,
  ImageSourcePropType,
  TouchableOpacity,
  View,
} from 'react-native';

import PrimaryButton from '../../../components/common/Button/PrimaryButton';
import BodyRegular from '../../../components/common/Text/Body/BodyRegular';
import HeadingBold from '../../../components/common/Text/Heading/Bold';
import TextInput from '../../../components/common/TextInput';
import AuthLayout from '../../../layout/AuthLayout';

import { Icons, Images, SIZES } from '../../../constants';
import { AuthStackParams } from '../../../navigation/AuthNavigation';
import styles from './styles';

import { selectUser, setUser } from '../../../store/features/authSlice';
import { useAppDispatch, useAppSelector } from '../../../store/hooks';
import showAlert from '../../../utils/showAlert';

const RegistrationScreen = () => {
  const navigation =
    useNavigation<NativeStackNavigationProp<AuthStackParams>>();
  const user = useAppSelector(selectUser);
  const dispatch = useAppDispatch();

  const handleRegistration = () => {
    if (user.fullName && user.mobileNumber.length) {
      const { isValid } = phone(user.mobileNumber, {
        country: 'IND',
      });
      if (!isValid)
        return showAlert('Registration Error', 'Invalid Phone Number');
      navigation.navigate('Otp');
    } else showAlert('Registration Error', 'All fields are required.');
  };

  return (
    <AuthLayout>
      {/* Heading Container */}
      <View style={styles.headingContainer}>
        <HeadingBold text="Create a new" />
        <HeadingBold text="account" />
      </View>
      {/* Input Container */}
      <View style={styles.inputContainer}>
        <TextInput
          placeholder="Full name"
          inputStyles={{ marginBottom: 8 }}
          autoFocus
          onChangeText={fullName => dispatch(setUser({ ...user, fullName }))}
        />
        <TextInput
          placeholder="Mobile number"
          inputStyles={{ marginBottom: 8 }}
          keyboardType="numeric"
          onChangeText={mobileNumber =>
            dispatch(setUser({ ...user, mobileNumber }))
          }
        />
        <TextInput
          placeholder="Email (optional)"
          keyboardType="email-address"
          onChangeText={email => dispatch(setUser({ ...user, email }))}
        />
      </View>
      {/* Actions Container */}
      <View style={styles.actionsContainer}>
        <PrimaryButton text="REGISTRATION" onPress={handleRegistration} />
        <View style={styles.actions}>
          <BodyRegular
            text="Already have an account?"
            textStyles={{ fontWeight: '500' }}
          />
          <TouchableOpacity onPress={() => navigation.navigate('Login')}>
            <BodyRegular
              text="LOGIN"
              textStyles={{
                fontWeight: '700',
                marginLeft: 4,
              }}
            />
          </TouchableOpacity>
        </View>
      </View>
      {/* Footer Section */}
      <View style={styles.footer}>
        <View style={styles.footerForm}>
          <View style={styles.bar} />
          <BodyRegular
            text="or sign up with"
            textStyles={{ marginHorizontal: 8, fontWeight: '500' }}
          />
          <View style={styles.bar} />
        </View>
        <TouchableOpacity style={styles.googleButton} activeOpacity={0.8}>
          <Image source={Icons.google as ImageSourcePropType} />
          <BodyRegular
            text="Google"
            textStyles={{
              fontWeight: '600',
              fontSize: SIZES.body2,
              marginLeft: 7,
            }}
          />
        </TouchableOpacity>
        <Image source={Images.bus as ImageSourcePropType} style={styles.bus} />
      </View>
    </AuthLayout>
  );
};

export default RegistrationScreen;
