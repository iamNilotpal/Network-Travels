import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import React from 'react';
import { View } from 'react-native';

import PaymentBottomNav from '../../../components/BottomNav/PaymentBottomNav';
import BodyRegular from '../../../components/common/Text/Body/BodyRegular';
import OtherHeader from '../../../components/Header/OtherHeader';
import ArrowLeft from '../../../components/Icons/ArrowLeft';
import BusSmall from '../../../components/Icons/BusSmall';
import { AppStackParams } from '../../../navigation/AppNavigation';
import styles from './styles';

const OrderSummery = () => {
  const navigation = useNavigation<NativeStackNavigationProp<AppStackParams>>();

  return (
    <>
      <OtherHeader text="Order summery">
        <ArrowLeft />
      </OtherHeader>
      <View style={styles.container}>
        {/* FROM AND TO CONTAINER */}
        <View style={[styles.commonStyles, { marginTop: 36 }]}>
          <View>
            <BodyRegular text="From" textStyles={{ fontWeight: '700' }} />
            <BodyRegular text="Guwahati" />
          </View>
          <View style={styles.busContainer}>
            <BusSmall />
          </View>
          <View>
            <BodyRegular
              text="To"
              textStyles={{ fontWeight: '700', alignSelf: 'flex-end' }}
            />
            <BodyRegular text="Jorhat" />
          </View>
        </View>
        {/* PASSENGERS CONTAINER */}
        <View style={{ marginTop: 47 }}>
          <View style={styles.commonStyles}>
            <BodyRegular text="Passengers" textStyles={{ fontWeight: '700' }} />
            <BodyRegular
              text="Seats"
              textStyles={{ fontWeight: '700', alignSelf: 'flex-end' }}
            />
          </View>
          <View style={{ marginTop: 10 }}>
            <View style={styles.commonStyles}>
              <BodyRegular text="Loreum Ipsum" />
              <BodyRegular text="7 (upper berth)" />
            </View>
            <View style={styles.commonStyles}>
              <BodyRegular text="Loreum Ipsum" />
              <BodyRegular text="7 (lower berth)" />
            </View>
          </View>
        </View>
        {/* DEPARTURE DATE */}
        <View style={[styles.commonStyles, { marginTop: 36 }]}>
          <View>
            <BodyRegular
              text="Departure date"
              textStyles={{ fontWeight: '700', marginBottom: 5 }}
            />
            <BodyRegular text="Sunday, 22 April" />
          </View>
          <View>
            <BodyRegular
              text="Departure time"
              textStyles={{
                fontWeight: '700',
                alignSelf: 'flex-end',
                marginBottom: 5,
              }}
            />
            <BodyRegular
              text="06:00 AM"
              textStyles={{ alignSelf: 'flex-end' }}
            />
          </View>
        </View>
      </View>
      <PaymentBottomNav
        seats={3}
        price={15000}
        onPress={() => navigation.navigate('Payment')}
        btnText="PAY"
      />
    </>
  );
};

export default OrderSummery;
