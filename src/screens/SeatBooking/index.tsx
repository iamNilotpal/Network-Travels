import { useNavigation, useRoute } from '@react-navigation/native';
import React from 'react';
import { Image, ImageSourcePropType, ScrollView, View } from 'react-native';
import PaymentBottomNav from '../../components/BottomNav/PaymentBottomNav';

import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import LowerBerth from '../../components/BusBerths/LowerBerth';
import UpperBerth from '../../components/BusBerths/UpperBerth';
import BodyRegular from '../../components/common/Text/Body/BodyRegular';
import BookingHeader from '../../components/Header/BookingHeader';
import Hygiene from '../../components/Icons/Hygiene';
import Safety from '../../components/Icons/Safety';
import BookingsTab from '../../components/Tabs/BookingsTab';
import { Images } from '../../constants';
import { HomeStackParams } from '../../navigation/AppNavigation';
import styles from './styles';

const SeatBooking = () => {
  const navigation =
    useNavigation<NativeStackNavigationProp<HomeStackParams>>();
  const { params } = useRoute();
  // @ts-ignore
  const bus = params?.bus;

  return (
    <>
      <BookingHeader />
      <ScrollView
        contentContainerStyle={{ paddingBottom: 80 }}
        showsVerticalScrollIndicator={false}>
        <BookingsTab containerStyles={{ marginTop: 25 }} />
        <View style={styles.berths}>
          <LowerBerth />
          <UpperBerth />
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
      <PaymentBottomNav
        price={100}
        seats={3}
        onPress={() => navigation.navigate('PickupDrop')}
      />
    </>
  );
};

export default SeatBooking;
