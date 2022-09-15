import React from 'react';
import { View } from 'react-native';

import { COLORS } from '../../../../constants';
import PrimaryButton from '../../Button/PrimaryButton';
import BodyRegular from '../../Text/Body/BodyRegular';
import HeadingBold from '../../Text/Heading/Bold';
import styles from './styles';

const BookingCard = () => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <HeadingBold
          text="UPCOMING"
          textStyles={{ fontSize: 15, color: COLORS.white, marginTop: -2 }}
        />
      </View>
      <View style={{ marginHorizontal: 20, marginTop: 10 }}>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}>
          <BodyRegular
            text="Booking ID"
            textStyles={{ fontWeight: '700', fontSize: 17 }}
          />
          <BodyRegular
            text="PNR - 1215420"
            textStyles={{ fontWeight: '700', fontSize: 17 }}
          />
        </View>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            marginTop: 14,
          }}>
          <BodyRegular text="Guwahati" textStyles={{ fontSize: 15 }} />
          <BodyRegular text="Jorhat" textStyles={{ fontSize: 15 }} />
        </View>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            marginTop: 14,
          }}>
          <BodyRegular text="Sunday, 21 April" textStyles={{ fontSize: 15 }} />
          <BodyRegular text="7(LB),7(UB)" textStyles={{ fontSize: 15 }} />
        </View>
      </View>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          width: '100%',
          justifyContent: 'space-evenly',
          marginTop: 15,
        }}>
        <PrimaryButton
          onPress={() => {}}
          text="Rate & review"
          btnStyles={{ width: '30%', paddingVertical: 10 }}
          textStyles={{ fontWeight: '500' }}
        />
        <PrimaryButton
          onPress={() => {}}
          text="Download ticket"
          btnStyles={{ width: '32%', paddingVertical: 10 }}
          textStyles={{ fontWeight: '500' }}
        />
        <PrimaryButton
          onPress={() => {}}
          text="Cancel ticket"
          btnStyles={{ width: '30%', paddingVertical: 10 }}
          textStyles={{ fontWeight: '500' }}
        />
      </View>
    </View>
  );
};

export default BookingCard;
