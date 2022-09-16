import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import React from 'react';
import {
  Pressable,
  StyleProp,
  TouchableOpacity,
  View,
  ViewStyle,
} from 'react-native';
import { HomeStackParams } from '../../../navigation/AppNavigation';

import BodyRegular from '../../common/Text/Body/BodyRegular';
import ArrowRight from '../../Icons/ArrowRight';
import ArrowUp from '../../Icons/ArrowUp';
import Rupee from '../../Icons/Rupee';
import styles from './styles';

type PaymentBottomNavProps = {
  price: number;
  seats: number;
  btnText?: string;
  containerStyle?: StyleProp<ViewStyle>;
  onPress: () => void;
};

const PaymentBottomNav: React.FC<PaymentBottomNavProps> = ({
  price,
  seats,
  containerStyle,
  onPress,
  btnText = 'NEXT',
}) => {
  const navigation =
    useNavigation<NativeStackNavigationProp<HomeStackParams>>();

  return (
    <View style={[styles.container, containerStyle]}>
      <View style={{ marginLeft: 10 }}>
        <View style={styles.priceTag}>
          <View style={{ marginTop: 2 }}>
            <Rupee height={15} />
          </View>
          <BodyRegular
            text={price.toFixed(2).toString()}
            textStyles={{ fontSize: 22, fontWeight: '700', marginLeft: 7 }}
          />
          <Pressable
            style={styles.arrowUp}
            onPress={() => navigation.navigate('FareDetails')}>
            <ArrowUp />
          </Pressable>
        </View>
        <BodyRegular
          text={`For ${seats} seats`}
          textStyles={{ opacity: 0.5, fontSize: 13 }}
        />
      </View>
      <TouchableOpacity
        style={styles.btn}
        onPress={onPress}
        activeOpacity={0.8}>
        <BodyRegular
          text={btnText}
          textStyles={{ fontSize: 16, fontWeight: '700', marginRight: 12 }}
        />
        <ArrowRight />
      </TouchableOpacity>
    </View>
  );
};

export default PaymentBottomNav;
