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
import {
  setActivated,
  setOtp as storeSetOtp,
} from '../../../store/features/authSlice';
import { useAppDispatch } from '../../../store/hooks';
import showAlert from '../../../utils/showAlert';
import styles from './styles';

const OTPInputs = new Array(4).fill('');

const OtpScreen = () => {
  const [otp, setOtp] = useState<string>('');
  const [focusedIndex, setFocusedIndex] = useState(0);
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (focusedIndex === OTPInputs.length) Keyboard.dismiss();
  }, [focusedIndex]);

  const handleOtpChange = (data: string, index: number) => {
    setOtp(prev => prev + data);
    setFocusedIndex(data === '' ? index - 1 : index + 1);
  };

  const handleVerifyOtp = () => {
    if (!otp || otp.length < 4)
      return showAlert('OTP Validation Error', 'Enter a valid OTP.');
    dispatch(storeSetOtp(otp));
    dispatch(setActivated(true));
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
        <PrimaryButton text="VERIFY" onPress={handleVerifyOtp} />
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
