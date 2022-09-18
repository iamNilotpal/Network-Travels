import {
  createNativeStackNavigator,
  NativeStackHeaderProps,
} from '@react-navigation/native-stack';
import React from 'react';
import { ImageSourcePropType } from 'react-native';
import StatusBar from '../components/common/StatusBar';

import AuthHeader from '../components/Header/AuthHeader';
import { COLORS, Icons, SIZES } from '../constants';
import LoginScreen from '../screens/Auth/Login';
import OtpScreen from '../screens/Auth/OTP';
import RegistrationScreen from '../screens/Auth/Registration';
import { AppStackParams } from './AppNavigation';
import OnBoardingNavigation from './OnboardingNavigation';

type MetaParam = { screen?: keyof AppStackParams; metadata?: any } | undefined;
export type AuthStackParams = {
  Onboarding: undefined;
  Login: MetaParam;
  Registration: MetaParam;
  Otp: MetaParam;
};

const BACK_HEADER_STYLES = Object.freeze({
  headerStyles: {
    right: SIZES.width - 70,
    borderRadius: 20,
    borderTopLeftRadius: 0,
    borderBottomLeftRadius: 0,
  },
  textStyle: {
    marginLeft: 5,
  },
});

const AuthStack = createNativeStackNavigator<AuthStackParams>();

const AuthNavigation = () => {
  return (
    <>
      <StatusBar backgroundColor={COLORS.primary} barStyle="dark-content" />
      <AuthStack.Navigator
        screenOptions={{
          animation: 'slide_from_right',
          headerShown: false,
        }}>
        <AuthStack.Screen name="Onboarding" component={OnBoardingNavigation} />
        <AuthStack.Screen
          name="Registration"
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
                }}
              />
            ),
          }}
        />
        <AuthStack.Screen
          name="Login"
          component={LoginScreen}
          options={{
            headerShown: true,
            header: (props: NativeStackHeaderProps) => (
              <AuthHeader
                {...props}
                text="Back"
                img={Icons.arrowLeftSmall as ImageSourcePropType}
                headerStyles={BACK_HEADER_STYLES.headerStyles}
                textStyle={{
                  ...BACK_HEADER_STYLES.textStyle,
                  fontWeight: '700',
                }}
              />
            ),
          }}
        />
        <AuthStack.Screen
          name="Otp"
          component={OtpScreen}
          options={{
            headerShown: true,
            header: (props: NativeStackHeaderProps) => (
              <AuthHeader
                {...props}
                text="Back"
                headerStyles={BACK_HEADER_STYLES.headerStyles}
                img={Icons.arrowLeftSmall as ImageSourcePropType}
                textStyle={{
                  ...BACK_HEADER_STYLES.textStyle,
                  fontWeight: '700',
                }}
              />
            ),
          }}
        />
      </AuthStack.Navigator>
    </>
  );
};

export default AuthNavigation;
