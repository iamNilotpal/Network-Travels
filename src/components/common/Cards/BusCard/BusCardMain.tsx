import React from 'react';
import { View } from 'react-native';

import Location from '../../../Icons/Location';
import Rupee from '../../../Icons/Rupee';
import BodyRegular from '../../Text/Body/BodyRegular';
import HeadingBold from '../../Text/Heading/Bold';
import styles from './styles';

type BusCardMainProps = {
  bus: any;
};

const BusCardMain: React.FC<BusCardMainProps> = ({ bus }) => {
  const departureTime = bus.departure.split(' ')[1];
  const arrivalTime = bus.arrival.split(' ')[1];

  return (
    <View style={styles.mainContent}>
      <Location />
      <View style={styles.details}>
        <View style={styles.departureTime}>
          <BodyRegular
            text={departureTime}
            textStyles={{ fontWeight: '700' }}
          />
          <BodyRegular text={bus.from} textStyles={{ opacity: 0.5 }} />
        </View>
        <View style={styles.timing}>
          <BodyRegular
            text="7h45m"
            textStyles={{ textAlign: 'center', marginBottom: 5, opacity: 0.5 }}
          />
          <View>
            <View style={styles.slider} />
            <View style={styles.ball} />
            <View style={styles.slider} />
          </View>
        </View>
        <View>
          <BodyRegular text={arrivalTime} textStyles={{ fontWeight: '700' }} />
          <BodyRegular text={bus.to} textStyles={{ opacity: 0.5 }} />
        </View>
      </View>
      <View>
        <View style={styles.rupee}>
          <Rupee width={25} height={25} />
          <HeadingBold
            text={bus.price.toFixed(2)}
            textStyles={{ fontSize: 22 }}
          />
        </View>
        {bus.ac_price && (
          <View style={[styles.rupee, { alignSelf: 'flex-end' }]}>
            <Rupee fill="gray" />
            <HeadingBold
              text={bus.ac_price.toFixed(2)}
              textStyles={{ fontSize: 18, opacity: 0.5, marginLeft: 3 }}
            />
            <View style={styles.lineThrough} />
          </View>
        )}
      </View>
    </View>
  );
};

export default BusCardMain;
