import {
  createNativeStackNavigator,
  NativeStackNavigationProp,
} from '@react-navigation/native-stack';
import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { ImageSourcePropType } from 'react-native';

import { COLORS, Images } from '../constants';
import OnboardingScreen from '../screens/Onboarding';
import { AuthStackParams } from './AuthNavigation';
import StatusBar from '../components/common/StatusBar';

export type OnboardingStackParams = {
  FirstOnboardingScreen: undefined;
  SecondOnboardingScreen: undefined;
};

const OnboardingStack = createNativeStackNavigator<OnboardingStackParams>();

const OnBoardingNavigation = () => {
  const navigation =
    useNavigation<
      NativeStackNavigationProp<OnboardingStackParams & AuthStackParams>
    >();

  const FIRST_PAGE_PROPS = {
    img: Images.onboarding_1 as ImageSourcePropType,
    title: { firstTitle: 'Move', secondTitle: 'with us' },
    subtitle:
      'Buy bus tickets easily. You choose the destination and we make the rest.',
    onNext: () => navigation.navigate('SecondOnboardingScreen'),
    onSkip: () => navigation.replace('RegistrationScreen'),
  };

  const SECOND_PAGE_PROPS = {
    img: Images.onboarding_2 as ImageSourcePropType,
    title: { firstTitle: 'Enjoy', secondTitle: 'your holiday' },
    subtitle: 'Enjoy your best holiday experience with NetworkTravels.',
    onNext: () => navigation.replace('RegistrationScreen'),
    onSkip: () => navigation.replace('RegistrationScreen'),
  };

  return (
    <>
      <StatusBar barStyle="dark-content" backgroundColor={COLORS.white} />
      <OnboardingStack.Navigator
        screenOptions={{ headerShown: false, animation: 'slide_from_right' }}>
        <OnboardingStack.Screen name="FirstOnboardingScreen">
          {() => <OnboardingScreen {...FIRST_PAGE_PROPS} />}
        </OnboardingStack.Screen>
        <OnboardingStack.Screen name="SecondOnboardingScreen">
          {() => <OnboardingScreen {...SECOND_PAGE_PROPS} />}
        </OnboardingStack.Screen>
      </OnboardingStack.Navigator>
    </>
  );
};

export default OnBoardingNavigation;
