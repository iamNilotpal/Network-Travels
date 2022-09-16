import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import React, { useState } from 'react';

import Step1 from '../../components/CancelBooking/Step1';
import Step2 from '../../components/CancelBooking/Step2';
import Step3 from '../../components/CancelBooking/Step3';
import OtherHeader from '../../components/Header/OtherHeader';
import ArrowLeft from '../../components/Icons/ArrowLeft';
import Progress from '../../components/Progress';
import { AppStackParams } from '../../navigation/BottomNavigation';

const COMPONENTS = {
  0: Step1,
  1: Step2,
  2: Step3,
};

const CancelBookingScreen = () => {
  const [activeStep, setActiveStep] = useState(0);
  const navigation = useNavigation<NativeStackNavigationProp<AppStackParams>>();
  const Component = COMPONENTS[activeStep as keyof typeof COMPONENTS];

  return (
    <>
      <OtherHeader text="Cancel booking">
        <ArrowLeft />
      </OtherHeader>
      <Progress activeStep={activeStep} />
      <Component
        onPress={() =>
          activeStep === 2
            ? navigation.navigate('Bookings')
            : setActiveStep(activeStep + 1)
        }
      />
    </>
  );
};

export default CancelBookingScreen;
