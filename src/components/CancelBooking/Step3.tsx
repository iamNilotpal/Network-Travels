import Lottie from 'lottie-react-native';
import React from 'react';
import { StyleSheet, View } from 'react-native';

import animation from '../../assets/animation.json';
import PrimaryButton from '../common/Button/PrimaryButton';
import { StepProps } from './Step1';

const Step3: React.FC<StepProps> = ({ onPress }) => {
  return (
    <>
      <View style={styles.container}>
        <Lottie source={animation} loop={false} autoPlay />
      </View>
      <PrimaryButton text="DONE" onPress={onPress} btnStyles={{ bottom: 20 }} />
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: -100,
  },
});

export default Step3;
