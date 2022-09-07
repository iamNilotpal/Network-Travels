import { View, Text } from 'react-native';
import React from 'react';

type OnboardingScreenProps = {
  img: string;
  title: {
    firstTitle: string;
    secondTitle: string;
  };
  subtitle: string;
  onNext: () => void;
  onSkip: () => void;
};

const OnboardingScreen: React.FC<OnboardingScreenProps> = ({
  img,
  title: { firstTitle, secondTitle },
  subtitle,
  onNext,
  onSkip,
}) => {
  return (
    <View>
      <Text>OnboardingScreen</Text>
    </View>
  );
};

export default OnboardingScreen;
