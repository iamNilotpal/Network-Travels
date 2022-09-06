import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import OnboardingScreen from '../screens/Onboarding';

type OnboardingStackParams = {
  FirstOnboardingScreen: undefined;
  SecondOnboardingScreen: undefined;
};

const OnboardingStack = createNativeStackNavigator<OnboardingStackParams>();

const OnBoardingNavigation = () => {
  return (
    <OnboardingStack.Navigator screenOptions={{ headerShown: false }}>
      <OnboardingStack.Screen
        name="FirstOnboardingScreen"
        component={OnboardingScreen}
      />
      <OnboardingStack.Screen
        name="SecondOnboardingScreen"
        component={OnboardingScreen}
      />
    </OnboardingStack.Navigator>
  );
};

export default OnBoardingNavigation;
