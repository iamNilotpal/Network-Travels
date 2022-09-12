import React from 'react';
import { View } from 'react-native';

import { COLORS } from '../../../../constants';
import Guard from '../../../Icons/Guard';
import Track from '../../../Icons/Track';
import HeadingBold from '../../Text/Heading/Bold';
import styles from './styles';

const BusCardFooter = () => {
  return (
    <View style={styles.footer}>
      <View style={styles.footerItem}>
        <Guard />
        <HeadingBold
          text="Safe & secure"
          textStyles={{
            fontSize: 15,
            fontWeight: '700',
            color: COLORS.white,
            marginLeft: 12,
          }}
        />
      </View>
      <View style={styles.footerItem}>
        <Track />
        <HeadingBold
          text="Safe & secure"
          textStyles={{
            fontSize: 15,
            fontWeight: '700',
            color: COLORS.white,
            marginLeft: 12,
          }}
        />
      </View>
    </View>
  );
};

export default BusCardFooter;
