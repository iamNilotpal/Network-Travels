import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { useNavigation } from '@react-navigation/native';

import React, { useState } from 'react';
import { TouchableOpacity } from 'react-native';
import { View } from 'react-native';
import { COLORS } from '../../../constants';
import { HomeStackParams } from '../../../navigation/AppNavigation';
import BodyRegular from '../../common/Text/Body/BodyRegular';
import Filter from '../../Icons/Filter';
import styles from './styles';

const BOTTOM_NAV_LINKS = [
  { text: 'AC' },
  { text: 'SLEEPER' },
  { text: 'PICKUP AFTER 6PM' },
  { text: 'Filter', Icon: Filter, screen: 'Filter' },
];

const BusTypesBottomNav = () => {
  const [current, setCurrent] = useState<string>('');
  const navigation =
    useNavigation<NativeStackNavigationProp<HomeStackParams>>();

  const handlePress = (item: any) => {
    setCurrent(item.text);
    item.screen && navigation.navigate('Filter');
  };

  return (
    <View style={styles.container}>
      {BOTTOM_NAV_LINKS.map(item => (
        <TouchableOpacity
          key={item.text}
          onPress={() => handlePress(item)}
          style={{
            ...styles.button,
            backgroundColor:
              current === item.text ? COLORS.white : 'transparent',
          }}>
          {!item.Icon && (
            <BodyRegular text={item.text} textStyles={styles.buttonText} />
          )}
          {item.Icon && <item.Icon />}
        </TouchableOpacity>
      ))}
    </View>
  );
};

export default BusTypesBottomNav;
