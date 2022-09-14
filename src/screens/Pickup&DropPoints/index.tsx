import { View, Text } from 'react-native';
import React from 'react';
import OtherHeader from '../../components/Header/OtherHeader';
import ArrowLeft from '../../components/Icons/ArrowLeft';
import PaymentBottomNav from '../../components/BottomNav/PaymentBottomNav';

const PickupDropPointsScreen = () => {
  return (
    <>
      <OtherHeader text="Pickup & drop points">
        <ArrowLeft />
      </OtherHeader>
      <View>
        <Text>PickupDropPointsScreen</Text>
      </View>
      <PaymentBottomNav seats={10} price={200} onPress={() => {}} />
    </>
  );
};

export default PickupDropPointsScreen;
