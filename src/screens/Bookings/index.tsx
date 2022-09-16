import React from 'react';
import { ScrollView, View } from 'react-native';

import BookingCard from '../../components/common/Cards/BookingCard';
import OtherHeader from '../../components/Header/OtherHeader';
import AuthTabs from '../../components/Tabs/AuthTabs';
import styles from './styles';

const Bookings = () => {
  return (
    <>
      <OtherHeader text="My Bookings" />
      <View style={styles.container}>
        <AuthTabs
          firstText="All bookings"
          secondText="Cancelled bookings"
          onPress={() => {}}
          containerStyles={{
            marginTop: 31,
            width: '100%',
          }}
          tabPadding={20}
        />
        <ScrollView
          style={{ marginTop: 10 }}
          contentContainerStyle={{ paddingTop: 25, paddingBottom: 90 }}
          showsVerticalScrollIndicator={false}>
          <BookingCard containerStyle={{ marginBottom: 18 }} />
          <BookingCard containerStyle={{ marginBottom: 18 }} />
          <BookingCard />
        </ScrollView>
      </View>
    </>
  );
};

export default Bookings;
