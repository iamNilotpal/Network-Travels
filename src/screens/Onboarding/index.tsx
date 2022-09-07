import React from 'react';
import {
  Image,
  ImageSourcePropType,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

import SecondaryButton from '../../components/common/Button/SecondaryButton';
import StatusBar from '../../components/common/StatusBar';
import BodyRegular from '../../components/common/Text/Body/BodyRegular';
import HeadingBold from '../../components/common/Text/Heading/Bold';
import HeadingSmall from '../../components/common/Text/Heading/Small';

import { COLORS, Icons } from '../../constants';
import styles from './styles';

type OnboardingScreenProps = {
  img: ImageSourcePropType;
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
      <StatusBar backgroundColor={COLORS.white} barStyle="dark-content" />
      <TouchableOpacity onPress={onSkip}>
        <Text style={styles.skip}>Skip</Text>
      </TouchableOpacity>
      <View style={styles.imgContainer}>
        <Image source={img} resizeMode="cover" style={styles.img} />
      </View>
      <View style={styles.textContainer}>
        <View style={styles.headingContainer}>
          <HeadingBold text={firstTitle} />
          <HeadingSmall text={secondTitle} />
        </View>
        <BodyRegular text={subtitle} />
      </View>
      <View style={styles.circle}>
        <SecondaryButton
          img={Icons.arrowRight as ImageSourcePropType}
          onPress={onNext}
        />
      </View>
    </View>
  );
};

export default OnboardingScreen;
