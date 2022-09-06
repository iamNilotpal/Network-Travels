import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';

import LoginScreen from '../screens/Auth/Login';
import OtpScreen from '../screens/Auth/OTP';
import RegistrationScreen from '../screens/Auth/Registration';
import OnBoardingNavigation from './OnboardingNavigation';

type AuthStackParams = {
  Onboarding: undefined;
  LoginScreen: undefined;
  RegistrationScreen: undefined;
  OtpScreen: undefined;
};

const AuthStack = createNativeStackNavigator<AuthStackParams>();

const AuthNavigation = () => {
  return (
    <AuthStack.Navigator>
      <AuthStack.Screen name="Onboarding" component={OnBoardingNavigation} />
      <AuthStack.Screen
        name="RegistrationScreen"
        component={RegistrationScreen}
      />
      <AuthStack.Screen name="LoginScreen" component={LoginScreen} />
      <AuthStack.Screen name="OtpScreen" component={OtpScreen} />
    </AuthStack.Navigator>
  );
};

export default AuthNavigation;
