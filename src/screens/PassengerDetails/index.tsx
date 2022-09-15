import React, { useState } from 'react';
import { Switch, View, ScrollView } from 'react-native';

import BodyRegular from '../../components/common/Text/Body/BodyRegular';
import TextInput from '../../components/common/TextInput';
import OtherHeader from '../../components/Header/OtherHeader';
import ArrowLeft from '../../components/Icons/ArrowLeft';
import Details from './Details';
import { COLORS } from '../../constants';
import styles from './styles';
import RadioButton from '../../components/common/RadioButton';
import PrimaryButton from '../../components/common/Button/PrimaryButton';
import PaymentBottomNav from '../../components/BottomNav/PaymentBottomNav';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { HomeStackParams } from '../../navigation/HomeNavigation';
import { useNavigation } from '@react-navigation/native';

const PassengerDetails = () => {
  const [sendUpdates, setSendUpdates] = useState(true);
  const navigation =
    useNavigation<NativeStackNavigationProp<HomeStackParams>>();

  return (
    <>
      <OtherHeader text="Passenger detail">
        <ArrowLeft />
      </OtherHeader>
      <ScrollView
        contentContainerStyle={{ paddingBottom: 85, marginHorizontal: 28 }}>
        <View style={styles.inputContainers}>
          <BodyRegular
            text="Contact information :"
            textStyles={{ marginBottom: 8, fontWeight: '700' }}
          />
          <TextInput
            placeholder="Email address"
            inputStyles={{
              backgroundColor: COLORS.lightGray2,
              width: '100%',
              marginBottom: 10,
            }}
          />
          <TextInput
            placeholder="Mobile number(default)"
            inputStyles={{ backgroundColor: COLORS.lightGray2, width: '100%' }}
          />
          <View style={styles.updates}>
            <BodyRegular text="Send booking details & updates on Whatsapp" />
            <Switch
              style={{ marginTop: 5, marginRight: -3 }}
              value={sendUpdates}
              trackColor={{ true: COLORS.green }}
              onValueChange={v => setSendUpdates(v)}
            />
          </View>
        </View>
        <Details />
        <View style={{ marginVertical: 20 }}>
          <BodyRegular
            text="COUPONS :"
            textStyles={{ fontWeight: '700', marginBottom: 10 }}
          />
          <View style={[styles.commonStyles, { marginBottom: 10 }]}>
            <RadioButton isActive={true} style={{ marginRight: 5 }} />
            <BodyRegular text="NEWRIDE : Up to Rs 100 OFF on your 1st bus booking." />
          </View>
          <View style={styles.commonStyles}>
            <RadioButton isActive={true} style={{ marginRight: 5 }} />
            <BodyRegular text="FLAT50 : Flat 50% OFF on bookings before 1st May'21." />
          </View>
        </View>
        <View
          style={[
            styles.commonStyles,
            { width: '100%', justifyContent: 'space-between' },
          ]}>
          <TextInput
            placeholder="Enter a coupon code"
            inputStyles={{ backgroundColor: COLORS.lightGray2, width: '60%' }}
          />
          <PrimaryButton
            text="APPLY"
            onPress={() => {}}
            btnStyles={{ width: '35%' }}
          />
        </View>
        <BodyRegular
          text="By clicking on next, I agree to all the terms & condition and privacy policy."
          textStyles={{ marginTop: 15 }}
        />
      </ScrollView>
      <PaymentBottomNav
        onPress={() => navigation.navigate('OrderSummery')}
        seats={5}
        price={1000}
      />
    </>
  );
};

export default PassengerDetails;
