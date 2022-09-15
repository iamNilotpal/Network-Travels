import React from 'react';
import { View } from 'react-native';

import BodyRegular from '../../components/common/Text/Body/BodyRegular';
import OtherHeader from '../../components/Header/OtherHeader';
import ArrowLeft from '../../components/Icons/ArrowLeft';
import Rupee from '../../components/Icons/Rupee';
import { COLORS } from '../../constants';
import styles from './styles';

const FareDetailsScreen = () => {
  const price1 = 500;
  const price2 = 700;
  const basicFare = 1200;
  const discount = 120;
  const total = 1080;

  return (
    <>
      <OtherHeader text="Fare details">
        <ArrowLeft />
      </OtherHeader>
      <View style={styles.fareDetailsContainer}>
        <View>
          <BodyRegular text="Seats" textStyles={{ fontWeight: '700' }} />
          <View style={styles.fares}>
            <BodyRegular text="7 (lower berth)" />
            <BodyRegular text="7 (upper berth)" />
          </View>
        </View>
        <View>
          <BodyRegular
            text="Fare"
            textStyles={{ fontWeight: '700', alignSelf: 'flex-end' }}
          />
          <View style={styles.fares}>
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
              <Rupee height={12} />
              <BodyRegular
                text={price1.toFixed(2)}
                textStyles={{ marginLeft: 5 }}
              />
            </View>
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
              <Rupee height={12} />
              <BodyRegular
                text={price2.toFixed(2)}
                textStyles={{ marginLeft: 5 }}
              />
            </View>
          </View>
        </View>
      </View>
      <View style={[styles.fareDetailsContainer, { marginTop: 70 }]}>
        <BodyRegular text="Basic fare" />
        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
          <Rupee height={12} />
          <BodyRegular
            text={basicFare.toFixed(2)}
            textStyles={{ marginLeft: 3 }}
          />
        </View>
      </View>
      <View style={styles.divider} />
      <View style={[styles.fareDetailsContainer, { marginTop: 0 }]}>
        <BodyRegular text="Coupon discount" />
        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
          <View
            style={{
              width: 8,
              height: 1,
              backgroundColor: COLORS.green,
              marginRight: 3,
            }}
          />
          <Rupee height={12} fill={COLORS.green} />
          <BodyRegular
            text={discount.toFixed(2)}
            textStyles={{ marginLeft: 3, color: COLORS.green }}
          />
        </View>
      </View>
      <View style={[styles.fareDetailsContainer, { marginTop: 355 }]}>
        <BodyRegular
          text="Total amount"
          textStyles={{ fontWeight: '700', fontSize: 20 }}
        />
        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
          <Rupee height={12} />
          <BodyRegular
            text={total.toFixed(2)}
            textStyles={{ marginLeft: 3, fontWeight: '700', fontSize: 20 }}
          />
        </View>
      </View>
    </>
  );
};

export default FareDetailsScreen;
