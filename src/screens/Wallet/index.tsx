import { View, Text } from 'react-native';
import React from 'react';
import OtherHeader from '../../components/Header/OtherHeader';
import ArrowLeft from '../../components/Icons/ArrowLeft';

const WalletScreen = () => {
  return (
    <>
      <OtherHeader text="My wallet">
        <ArrowLeft />
      </OtherHeader>
      <View>
        <Text>WalletScreen</Text>
      </View>
    </>
  );
};

export default WalletScreen;
