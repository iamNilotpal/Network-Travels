import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { View } from 'react-native';
import { Dropdown } from 'react-native-element-dropdown';

import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import PaymentBottomNav from '../../components/BottomNav/PaymentBottomNav';
import BodyRegular from '../../components/common/Text/Body/BodyRegular';
import OtherHeader from '../../components/Header/OtherHeader';
import ArrowLeft from '../../components/Icons/ArrowLeft';
import BookingsTab from '../../components/Tabs/BookingsTab';
import { COLORS } from '../../constants';
import { HomeStackParams } from '../../navigation/HomeNavigation';
import styles from './styles';

const data = [
  { label: 'Item 1', value: '1' },
  { label: 'Item 2', value: '2' },
  { label: 'Item 3', value: '3' },
  { label: 'Item 4', value: '4' },
  { label: 'Item 5', value: '5' },
  { label: 'Item 6', value: '6' },
  { label: 'Item 7', value: '7' },
  { label: 'Item 8', value: '8' },
];

const PickupDropPointsScreen = () => {
  const navigation =
    useNavigation<NativeStackNavigationProp<HomeStackParams>>();

  return (
    <>
      <OtherHeader text="Pickup & drop points">
        <ArrowLeft />
      </OtherHeader>
      <BookingsTab containerStyles={{ marginTop: 25 }} />
      <View style={styles.dropdownContainer}>
        <View>
          <BodyRegular
            text="Select pickup point"
            textStyles={{ marginBottom: 5, fontWeight: '700' }}
          />
          <Dropdown
            style={styles.dropdown}
            placeholderStyle={styles.placeholderStyle}
            selectedTextStyle={styles.selectedTextStyle}
            data={data}
            maxHeight={300}
            labelField="label"
            valueField="value"
            placeholder="Select item"
            onChange={() => {}}
          />
        </View>
        <View style={{ marginTop: 25 }}>
          <BodyRegular
            text="Select dropoff point"
            textStyles={{ marginBottom: 5, fontWeight: '700' }}
          />
          <Dropdown
            style={styles.dropdown}
            placeholderStyle={styles.placeholderStyle}
            selectedTextStyle={styles.selectedTextStyle}
            data={data}
            maxHeight={300}
            labelField="label"
            valueField="value"
            placeholder="Select item"
            onChange={() => {}}
            activeColor={COLORS.lightGray}
            flatListProps={{ showsVerticalScrollIndicator: false }}
          />
        </View>
      </View>
      <PaymentBottomNav
        seats={10}
        price={200}
        onPress={() => navigation.navigate('PassengerDetails')}
      />
    </>
  );
};

export default PickupDropPointsScreen;
