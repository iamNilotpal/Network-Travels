import { useRoute } from '@react-navigation/native';
import React from 'react';
import { View } from 'react-native';
import LowerBerth from '../../components/BusBerths/LowerBerth';
import UpperBerth from '../../components/BusBerths/UpperBerth';
import BookingHeader from '../../components/Header/BookingHeader';
import Tabs from '../../components/Tabs';
import styles from './styles';

const SeatBooking = () => {
  const { params } = useRoute();
  // const bus = params?.bus;

  return (
    <View>
      <BookingHeader />
      <View style={{ marginTop: 25 }}>
        <Tabs firstText="One way" secondText="Return" onPress={() => {}} />
      </View>
      <View style={styles.berths}>
        <LowerBerth />
        <UpperBerth />
      </View>
    </View>
  );
};

export default SeatBooking;
