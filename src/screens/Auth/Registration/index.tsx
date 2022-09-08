import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
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
import styles from './styles';
import { COLORS, Icons, Images, SIZES } from '../../../constants';
import { AuthStackParams } from '../../../navigation/AuthNavigation';
import { useAppDispatch, useAppSelector } from '../../../store/hooks';
import { selectUser, setUser } from '../../../store/features/authSlice';

const RegistrationScreen = () => {
  const navigation =
    useNavigation<NativeStackNavigationProp<AuthStackParams>>();
  const user = useAppSelector(selectUser);
  const dispatch = useAppDispatch();

  const handleLogin = () => {
    navigation.navigate('OtpScreen');
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
          onChangeText={text => dispatch(setUser({ ...user, fullName: text }))}
        />
        <TextInput
          placeholder="Mobile number"
          inputStyles={{ marginBottom: 8 }}
          keyboardType="numeric"
        />
        <TextInput
          placeholder="Email (optional)"
          keyboardType="email-address"
        />
      </View>
      {/* Actions Container */}
      <View style={styles.actionsContainer}>
        <PrimaryButton text="REGISTRATION" onPress={handleLogin} />
        <View style={styles.actions}>
          <BodyRegular
            text="Already have an account?"
            textStyles={{ fontWeight: '500', opacity: 1 }}
          />
          <TouchableOpacity onPress={() => navigation.navigate('LoginScreen')}>
            <BodyRegular
              text="LOGIN"
              textStyles={{
                fontWeight: '700',
                opacity: 1,
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
            textStyles={{ marginHorizontal: 8, fontWeight: '500', opacity: 1 }}
          />
          <View style={styles.bar} />
        </View>
        <TouchableOpacity style={styles.googleButton} activeOpacity={0.8}>
          <Image source={Icons.google as ImageSourcePropType} />
          <BodyRegular
            text="Google"
            textStyles={{
              opacity: 1,
              fontWeight: '600',
              fontSize: SIZES.body2,
              marginLeft: 7,
            }}
          />
        </TouchableOpacity>
      </View>
      <Image source={Images.bus as ImageSourcePropType} style={styles.bus} />
      <View
        style={{
          width: 140,
          height: 3,
          backgroundColor: COLORS.black,
          bottom: 20,
          alignSelf: 'center',
        }}
      />
    </AuthLayout>
  );
};

export default RegistrationScreen;
