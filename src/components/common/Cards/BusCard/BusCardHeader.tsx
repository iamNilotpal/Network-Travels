import React from 'react';
import { View } from 'react-native';

import Bus from '../../../Icons/Bus';
import LogoNameSmall from '../../../Icons/Logo/LogoNameSmall';
import BodyRegular from '../../Text/Body/BodyRegular';
import styles from './styles';

const BusCardHeader = ({ seats }: { seats: number }) => {
  return (
    <>
      <View style={styles.logo}>
        <Bus />
        <View style={{ marginLeft: 10 }}>
          <LogoNameSmall />
          <BodyRegular
            text="NON AC (2X1)"
            textStyles={{ fontSize: 12, marginTop: 1.5 }}
          />
        </View>
      </View>
      <View style={styles.seatBadge}>
        <BodyRegular
          text={`${seats} seats`}
          textStyles={{ fontWeight: '700', fontSize: 10 }}
        />
      </View>
    </>
  );
};

export default BusCardHeader;
