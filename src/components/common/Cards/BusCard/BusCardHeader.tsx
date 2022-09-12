import React from 'react';
import { View } from 'react-native';

import Bus from '../../../Icons/Bus';
import LogoSmall from '../../../Icons/Logo/LogoSmall';
import BodyRegular from '../../Text/Body/BodyRegular';
import styles from './styles';

const BusCardHeader = () => {
  return (
    <>
      <View style={styles.logo}>
        <Bus />
        <View style={{ marginLeft: 10 }}>
          <LogoSmall />
          <BodyRegular
            text="NON AC (2X1)"
            textStyles={{ fontSize: 12, marginTop: 1.5 }}
          />
        </View>
      </View>
      <View style={styles.seatBadge}>
        <BodyRegular
          text="28 seats"
          textStyles={{ fontWeight: '700', fontSize: 10 }}
        />
      </View>
    </>
  );
};

export default BusCardHeader;
