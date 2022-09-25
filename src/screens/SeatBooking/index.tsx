import { useNavigation, useRoute, RouteProp } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import React, { useState } from 'react';
import { Image, ImageSourcePropType, ScrollView, View } from 'react-native';

import PaymentBottomNav from '../../components/BottomNav/PaymentBottomNav';
import LowerBerth from '../../components/BusBerths/LowerBerth';
import UpperBerth from '../../components/BusBerths/UpperBerth';
import BodyRegular from '../../components/common/Text/Body/BodyRegular';
import BustTypesHeader from '../../components/Header/BusTypesHeader';
import Hygiene from '../../components/Icons/Hygiene';
import Safety from '../../components/Icons/Safety';
import BookingsTab from '../../components/Tabs/BookingsTab';

import { Images } from '../../constants';
import { AppStackParams } from '../../navigation/AppNavigation';
import styles from './styles';

const SeatBooking = () => {
  const [seats, setSelectedSeats] = useState(0);
  const navigation = useNavigation<NativeStackNavigationProp<AppStackParams>>();
  const {
    params: {
      busData: { bus },
    },
  } = useRoute<RouteProp<AppStackParams, 'SeatBooking'>>();

  return (
    <>
      <BustTypesHeader />
      <ScrollView
        contentContainerStyle={{
          paddingBottom: seats > 0 ? 80 : 20,
        }}
        showsVerticalScrollIndicator={false}>
        <BookingsTab containerStyles={{ marginTop: 25 }} />
        <View style={styles.berths}>
          <LowerBerth onSeatSelect={seat => setSelectedSeats(seats + seat)} />
          <UpperBerth onSeatSelect={seat => setSelectedSeats(seats + seat)} />
        </View>
        <View style={styles.rest}>
          <BodyRegular
            text="Rest-stop"
            textStyles={{ fontSize: 14, fontWeight: '600', marginBottom: 10 }}
          />
          <View style={styles.restDetailsContainer}>
            <BodyRegular text={bus.rest} textStyles={{ fontWeight: '600' }} />
            <View style={styles.restDetails}>
              <View style={[styles.details, { marginRight: 10 }]}>
                <Safety />
                <BodyRegular text="Safe" textStyles={{ marginLeft: 3 }} />
              </View>
              <View style={styles.details}>
                <Hygiene />
                <BodyRegular
                  text="Hygiene"
                  textStyles={{ marginLeft: 3, marginBottom: 3 }}
                />
              </View>
            </View>
          </View>
        </View>
        <View style={styles.amenitiesContainer}>
          <BodyRegular
            text="Amenities & photos"
            textStyles={{ marginBottom: 10 }}
          />
          <Image
            source={Images.amenities as ImageSourcePropType}
            resizeMode="contain"
            style={{ width: '100%', height: 150 }}
          />
        </View>
      </ScrollView>
      {seats > 0 && (
        <PaymentBottomNav
          price={seats * bus.price}
          seats={seats}
          onPress={() =>
            navigation.navigate('PickupDrop', {
              price: seats * bus.price,
              seats,
            })
          }
        />
      )}
    </>
  );
};

export default SeatBooking;
