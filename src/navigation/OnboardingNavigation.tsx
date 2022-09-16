import { useNavigation } from '@react-navigation/native';
import {
  createNativeStackNavigator,
  NativeStackNavigationProp,
} from '@react-navigation/native-stack';
import React, { useMemo } from 'react';
import { ImageSourcePropType } from 'react-native';

import StatusBar from '../components/common/StatusBar';
import { COLORS, Images } from '../constants';
import OnboardingScreen from '../screens/Onboarding';
import { AuthStackParams } from './AuthNavigation';

export type OnboardingStackParams = {
  FirstOnboarding: undefined;
  SecondOnboarding: undefined;
};

const OnboardingStack = createNativeStackNavigator<OnboardingStackParams>();

const OnBoardingNavigation = () => {
  const navigation =
    useNavigation<
      NativeStackNavigationProp<OnboardingStackParams & AuthStackParams>
    >();

  const FIRST_PAGE_PROPS = useMemo(
    () => ({
      img: Images.onboarding_1 as ImageSourcePropType,
      title: { firstTitle: 'Move', secondTitle: 'with us' },
      subtitle:
        'Buy bus tickets easily. You choose the destination and we make the rest.',
      onNext: () => navigation.navigate('SecondOnboarding'),
      onSkip: () => navigation.replace('Registration'),
    }),
    [],
  );

  const SECOND_PAGE_PROPS = useMemo(
    () => ({
      img: Images.onboarding_2 as ImageSourcePropType,
      title: { firstTitle: 'Enjoy', secondTitle: 'your holiday' },
      subtitle: 'Enjoy your best holiday experience with NetworkTravels.',
      onNext: () => navigation.replace('Registration'),
      onSkip: () => navigation.replace('Registration'),
    }),
    [],
  );

  return (
    <>
      <StatusBar barStyle="dark-content" backgroundColor={COLORS.white} />
      <OnboardingStack.Navigator
        screenOptions={{ headerShown: false, animation: 'slide_from_right' }}>
        <OnboardingStack.Screen name="FirstOnboarding">
          {() => <OnboardingScreen {...FIRST_PAGE_PROPS} />}
        </OnboardingStack.Screen>
        <OnboardingStack.Screen name="SecondOnboarding">
          {() => <OnboardingScreen {...SECOND_PAGE_PROPS} />}
        </OnboardingStack.Screen>
      </OnboardingStack.Navigator>
    </>
  );
};

export default OnBoardingNavigation;
