import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NativeStackHeaderProps } from '@react-navigation/native-stack';
import React from 'react';
import { ImageSourcePropType } from 'react-native';
import StatusBar from '../components/common/StatusBar';

import AuthHeader from '../components/Header/AuthHeader';
import { COLORS, Icons } from '../constants';
import LoginScreen from '../screens/Auth/Login';
import OtpScreen from '../screens/Auth/OTP';
import RegistrationScreen from '../screens/Auth/Registration';
import OnBoardingNavigation from './OnboardingNavigation';

export type AuthStackParams = {
  Onboarding: undefined;
  LoginScreen: undefined;
  RegistrationScreen: undefined;
  OtpScreen: undefined;
};

const AuthStack = createNativeStackNavigator<AuthStackParams>();

const AuthNavigation = () => {
  return (
    <>
      <StatusBar backgroundColor={COLORS.primary} barStyle="dark-content" />
      <AuthStack.Navigator
        screenOptions={{
          animation: 'slide_from_bottom',
          headerShown: false,
        }}>
        <AuthStack.Screen name="Onboarding" component={OnBoardingNavigation} />
        <AuthStack.Screen
          name="RegistrationScreen"
          component={RegistrationScreen}
          options={{
            headerShown: true,
            header: (props: NativeStackHeaderProps) => (
              <AuthHeader
                {...props}
                text="Skip"
                img={Icons.arrowRightSmall as ImageSourcePropType}
                textStyle={{
                  marginRight: 5,
                  fontWeight: '700',
                  color: COLORS.black,
                }}
              />
            ),
          }}
        />
        <AuthStack.Screen name="LoginScreen" component={LoginScreen} />
        <AuthStack.Screen name="OtpScreen" component={OtpScreen} />
      </AuthStack.Navigator>
    </>
  );
};

export default AuthNavigation;
