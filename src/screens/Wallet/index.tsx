import { View, Text, StyleSheet } from 'react-native';
import React from 'react';
import OtherHeader from '../../components/Header/OtherHeader';
import ArrowLeft from '../../components/Icons/ArrowLeft';
import WalletCard from '../../components/Icons/WalletCard';
import Rupee from '../../components/Icons/Rupee';
import BodyRegular from '../../components/common/Text/Body/BodyRegular';

const WalletScreen = () => {
  return (
    <>
      <OtherHeader text="My wallet">
        <ArrowLeft />
      </OtherHeader>
      <View style={styles.cardContainer}>
        <WalletCard />
        <View style={styles.availableMoney}>
          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <Rupee height={23} width={23} />
            <BodyRegular
              text="120.00"
              textStyles={{ fontWeight: '700', fontSize: 35, marginBottom: 4 }}
            />
          </View>
          <BodyRegular
            text="Available balance"
            textStyles={{ textAlign: 'center', fontSize: 12 }}
          />
        </View>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  cardContainer: {
    position: 'relative',
    marginTop: 37,
    marginHorizontal: 49,
    justifyContent: 'center',
    alignItems: 'center',
  },
  availableMoney: {
    position: 'absolute',
  },
});

export default WalletScreen;
