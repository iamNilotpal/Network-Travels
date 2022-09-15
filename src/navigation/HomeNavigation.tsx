import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import BottomNavigation from './BottomNavigation';
import StatusBar from '../components/common/StatusBar';
import { COLORS } from '../constants';
import BusesContainer from '../containers/BusesContainer';
import MenuBarScreen from '../screens/MenuBar';
import FiltersContainer from '../containers/FiltersContainer';
import SeatBooking from '../screens/SeatBooking';
import FareDetailsScreen from '../screens/FareDetails';
import PickupDropPointsScreen from '../screens/Pickup&DropPoints';
import PassengerDetails from '../screens/PassengerDetails';
import OrderSummery from '../screens/OrderSummery/Payment';
import OrderPaymentConfirm from '../screens/OrderSummery/Confirm';

export type HomeStackParams = {
  Bottom: undefined;
  BusTypes: undefined;
  SeatBooking: { bus: {} };
  FareDetails: undefined;
  PickupDrop: undefined;
  PassengerDetails: undefined;
  OrderSummery: undefined;
  Payment: undefined;
  MenuBar: undefined;
  Filter: undefined;
};

const HomeStack = createNativeStackNavigator<HomeStackParams>();

const HomeNavigation = () => {
  return (
    <>
      <StatusBar backgroundColor={COLORS.primary} barStyle="dark-content" />
      <HomeStack.Navigator screenOptions={{ headerShown: false }}>
        <HomeStack.Screen name="Bottom" component={BottomNavigation} />
        <HomeStack.Screen
          name="BusTypes"
          component={BusesContainer}
          options={{ animation: 'slide_from_bottom' }}
        />
        <HomeStack.Screen
          name="MenuBar"
          component={MenuBarScreen}
          options={{ animation: 'slide_from_left' }}
        />
        <HomeStack.Screen
          name="Filter"
          component={FiltersContainer}
          options={{ animation: 'slide_from_bottom' }}
        />
        <HomeStack.Screen name="SeatBooking" component={SeatBooking} />
        <HomeStack.Screen name="FareDetails" component={FareDetailsScreen} />
        <HomeStack.Screen
          name="PickupDrop"
          component={PickupDropPointsScreen}
        />
        <HomeStack.Screen
          name="PassengerDetails"
          component={PassengerDetails}
        />
        <HomeStack.Screen name="OrderSummery" component={OrderSummery} />
        <HomeStack.Screen name="Payment" component={OrderPaymentConfirm} />
      </HomeStack.Navigator>
    </>
  );
};

export default HomeNavigation;
