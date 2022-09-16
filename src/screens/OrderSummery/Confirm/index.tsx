import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import React from 'react';
import { View } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import PrimaryButton from '../../../components/common/Button/PrimaryButton';
import Circle from '../../../components/common/Circle';
import { useNavigation } from '@react-navigation/native';

import BodyRegular from '../../../components/common/Text/Body/BodyRegular';
import OtherHeader from '../../../components/Header/OtherHeader';
import Logo from '../../../components/Icons/Logo/Logo';
import LogoNameBig from '../../../components/Icons/Logo/LogoNameBig';
import Rupee from '../../../components/Icons/Rupee';
import { HomeStackParams } from '../../../navigation/AppNavigation';
import styles from './styles';
import { AppStackParams } from '../../../navigation/BottomNavigation';

const OrderPaymentConfirm = () => {
  const navigation = useNavigation<NativeStackNavigationProp<AppStackParams>>();

  return (
    <>
      <OtherHeader text="Order confirmation" />
      <View style={styles.container}>
        <View style={styles.paymentConfirmHeader}>
          <BodyRegular text="BOOKING ID" textStyles={{ fontWeight: '400' }} />
          <BodyRegular
            text="PNR - 1215420"
            textStyles={{ fontWeight: '700' }}
          />
        </View>
        <View style={styles.paymentDetails}>
          <LinearGradient
            colors={['#00000033', 'transparent', '#0000000e']}
            style={{
              width: '108%',
              height: 20,
              borderRadius: 50,
              marginLeft: -10,
            }}
          />
          <View style={styles.logo}>
            <Logo />
            <View style={{ marginRight: 5 }} />
            <LogoNameBig />
          </View>
          <View style={styles.details}>
            <View style={styles.time}>
              <BodyRegular
                text="06:00"
                textStyles={{ fontWeight: '700', marginRight: 5 }}
              />
              {new Array(5).fill('').map((_, i) => (
                <View key={i} style={styles.bar} />
              ))}
              <BodyRegular
                text="6h45m"
                textStyles={{ opacity: 0.5, marginHorizontal: 5, fontSize: 10 }}
              />
              {new Array(5).fill('').map((_, i) => (
                <View key={i} style={styles.bar} />
              ))}
              <BodyRegular
                text="12:45"
                textStyles={{ fontWeight: '700', marginLeft: 5 }}
              />
            </View>
            <View style={{ marginTop: 18 }}>
              <View style={styles.addressDetails}>
                <BodyRegular text="Guwahati" />
                <BodyRegular text="Jorhat" />
              </View>
              <View style={[styles.addressDetails, { marginTop: 21 }]}>
                <BodyRegular text="Sunday,24 April" />
                <BodyRegular text="7(UB),7(LB)" />
              </View>
            </View>
            <View style={[styles.addressDetails, { marginTop: 58 }]}>
              <BodyRegular
                text="Total amount :"
                textStyles={{ fontWeight: '700', fontSize: 18 }}
              />
              <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                <Rupee height={12} />
                <BodyRegular
                  text="1200.00"
                  textStyles={{
                    fontWeight: '700',
                    fontSize: 18,
                    marginLeft: 5,
                  }}
                />
              </View>
            </View>
            <Circle style={{ top: 230, left: -30 }} />
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                marginTop: 37,
                marginHorizontal: 10,
              }}>
              {new Array(22).fill('').map((_, i) => (
                <View key={i} style={styles.bar} />
              ))}
            </View>
            <Circle style={{ top: 230, right: -30 }} />
            <PrimaryButton
              text="DOWNLOAD TICKET"
              onPress={() => {}}
              btnStyles={{ width: '100%', marginTop: 27 }}
            />
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                marginTop: 7,
              }}>
              <BodyRegular
                text="NOTE :"
                textStyles={{ fontSize: 10, fontWeight: '700' }}
              />
              <BodyRegular
                text="Bus details will be sent 1 hour prior to the departure"
                textStyles={{ fontSize: 10, marginLeft: 5 }}
              />
            </View>
          </View>
        </View>
      </View>
      <PrimaryButton
        text="DONE"
        onPress={() => navigation.navigate('Bookings')}
        btnStyles={{ bottom: 25, position: 'absolute' }}
      />
    </>
  );
};

export default OrderPaymentConfirm;
