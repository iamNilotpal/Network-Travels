import React from 'react';
import { View } from 'react-native';

import BusCardFooter from './BusCardFooter';
import BusCardHeader from './BusCardHeader';
import BusCardMain from './BusCardMain';
import styles from './styles';

const BusCard = (props: any) => {
  return (
    <View style={styles.container}>
      <View style={styles.wrapper}>
        <BusCardHeader />
        <BusCardMain {...props} />
      </View>
      <BusCardFooter />
    </View>
  );
};

export default BusCard;
