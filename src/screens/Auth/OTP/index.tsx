import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import React, { useEffect, useState } from 'react';
import {
  Image,
  ImageSourcePropType,
  Keyboard,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import PrimaryButton from '../../../components/common/Button/PrimaryButton';

import OtpInput from '../../../components/common/OtpInput';
import BodyRegular from '../../../components/common/Text/Body/BodyRegular';
import { Images } from '../../../constants';
import AuthLayout from '../../../layout/AuthLayout';
import { AppStackParams } from '../../../navigation/AppNavigation';
import styles from './styles';

const OTPInputs = new Array(4).fill('');

const OtpScreen = () => {
  const [otp, setOtp] = useState<string | undefined>();
  const [focusedIndex, setFocusedIndex] = useState(0);
  const navigation = useNavigation<NativeStackNavigationProp<AppStackParams>>();

  useEffect(() => {
    if (focusedIndex === OTPInputs.length) Keyboard.dismiss();
  }, [focusedIndex]);

  const handleOtpChange = (otp: string, index: number) => {
    console.log({ otp, index });
    setOtp(prev => prev + otp);
    setFocusedIndex(otp === '' ? index - 1 : index + 1);
  };

  return (
    <AuthLayout>
      {/* HEADER CONTAINER */}
      <View style={styles.headerTextContainer}>
        <Text style={styles.title}>OTP Verification</Text>
        <Text style={styles.subtitle}>
          We have sent an OTP to your registered mobile number
        </Text>
      </View>
      {/* OTP CONTAINER */}
      <View style={styles.otpContainer}>
        {OTPInputs.map((_, index) => (
          <OtpInput
            key={index}
            index={index}
            focusedIndex={focusedIndex}
            onChangeText={handleOtpChange}
            inputStyles={{
              marginRight: index === OTPInputs.length - 1 ? 0 : 20,
            }}
          />
        ))}
      </View>
      <View style={styles.confirmBtn}>
        <PrimaryButton
          text="VERIFY"
          onPress={() => navigation.replace('Home')}
        />
        <View style={styles.resendActions}>
          <BodyRegular text="Didn't receive OTP?" textStyles={{ opacity: 1 }} />
          <TouchableOpacity>
            <BodyRegular
              text="RESEND"
              textStyles={{ opacity: 1, fontWeight: '700', marginLeft: 4 }}
            />
          </TouchableOpacity>
        </View>
      </View>
      <Image source={Images.bus as ImageSourcePropType} style={styles.bus} />
    </AuthLayout>
  );
};

export default OtpScreen;
