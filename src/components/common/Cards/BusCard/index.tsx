import React from 'react';
import { View, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import BusCardFooter from './BusCardFooter';
import BusCardHeader from './BusCardHeader';
import BusCardMain from './BusCardMain';
import styles from './styles';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { AppStackParams } from '../../../../navigation/AppNavigation';

const BusCard = (props: any) => {
  const navigation = useNavigation<NativeStackNavigationProp<AppStackParams>>();

  return (
    <TouchableOpacity
      style={styles.container}
      activeOpacity={0.9}
      onPress={() => navigation.navigate('SeatBooking', { ...props })}>
      <View style={styles.wrapper}>
        <BusCardHeader />
        <BusCardMain {...props} />
      </View>
      <BusCardFooter />
    </TouchableOpacity>
  );
};

export default BusCard;
