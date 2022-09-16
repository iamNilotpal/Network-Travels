import React from 'react';
import { useNavigation } from '@react-navigation/native';

import { StyleProp, View, ViewStyle } from 'react-native';

import { COLORS } from '../../../../constants';
import PrimaryButton from '../../Button/PrimaryButton';
import BodyRegular from '../../Text/Body/BodyRegular';
import HeadingBold from '../../Text/Heading/Bold';
import styles from './styles';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { HomeStackParams } from '../../../../navigation/AppNavigation';

type BookingCardProps = {
  containerStyle?: StyleProp<ViewStyle>;
};

const BookingCard: React.FC<BookingCardProps> = ({ containerStyle = {} }) => {
  const navigation =
    useNavigation<NativeStackNavigationProp<HomeStackParams>>();

  return (
    <View style={[styles.container, containerStyle]}>
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
          onPress={() => navigation.navigate('RateAndReview')}
          text="Rate & review"
          btnStyles={{ width: '30%', paddingVertical: 9 }}
          textStyles={{ fontSize: 11.5, fontWeight: '500' }}
        />
        <PrimaryButton
          onPress={() => {}}
          text="Download ticket"
          btnStyles={{ width: '32%', paddingVertical: 9 }}
          textStyles={{ fontSize: 11.5, fontWeight: '500' }}
        />
        <PrimaryButton
          onPress={() => navigation.navigate('CancelBooking')}
          text="Cancel ticket"
          btnStyles={{ width: '30%', paddingVertical: 9 }}
          textStyles={{ fontSize: 11.5, fontWeight: '500' }}
        />
      </View>
    </View>
  );
};

export default BookingCard;
