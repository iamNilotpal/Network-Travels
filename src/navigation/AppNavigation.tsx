import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';

import StatusBar from '../components/common/StatusBar';
import { COLORS } from '../constants';

import BusesContainer from '../containers/BusesContainer';
import FiltersContainer from '../containers/FiltersContainer';
import CancelBookingScreen from '../screens/CancelBooking';
import FareDetailsScreen from '../screens/FareDetails';
import MenuBarScreen from '../screens/MenuBar';
import OrderPaymentConfirm from '../screens/OrderSummery/Confirm';
import OrderSummery from '../screens/OrderSummery/Payment';
import PassengerDetails from '../screens/PassengerDetails';
import PickupDropPointsScreen from '../screens/Pickup&DropPoints';
import ProfileScreen from '../screens/Profile';
import RateAndReviewScreen from '../screens/Rate&Review';
import SeatBooking from '../screens/SeatBooking';
import WalletScreen from '../screens/Wallet';
import AuthNavigation from './AuthNavigation';
import BottomNavigation from './BottomNavigation';

export type HomeStackParams = {
  Authentication: undefined;
  BottomNav: undefined;
  BusTypes: undefined;
  SeatBooking: undefined;
  FareDetails: undefined;
  PickupDrop: undefined;
  PassengerDetails: undefined;
  OrderSummery: undefined;
  Payment: undefined;
  MenuBar: undefined;
  Filter: undefined;
  RateAndReview: undefined;
  CancelBooking: undefined;
  Profile: undefined;
  Wallet: undefined;
};

const AppStack = createNativeStackNavigator<HomeStackParams>();

const AppNavigation = () => {
  return (
    <>
      <StatusBar backgroundColor={COLORS.primary} barStyle="dark-content" />
      <AppStack.Navigator screenOptions={{ headerShown: false }}>
        <AppStack.Screen name="Authentication" component={AuthNavigation} />
        <AppStack.Screen name="BottomNav" component={BottomNavigation} />
        <AppStack.Screen
          name="BusTypes"
          component={BusesContainer}
          options={{ animation: 'slide_from_bottom' }}
        />
        <AppStack.Screen
          name="MenuBar"
          component={MenuBarScreen}
          options={{ animation: 'slide_from_left' }}
        />
        <AppStack.Screen
          name="Filter"
          component={FiltersContainer}
          options={{ animation: 'slide_from_bottom' }}
        />
        <AppStack.Screen name="SeatBooking" component={SeatBooking} />
        <AppStack.Screen name="FareDetails" component={FareDetailsScreen} />
        <AppStack.Screen name="PickupDrop" component={PickupDropPointsScreen} />
        <AppStack.Screen name="PassengerDetails" component={PassengerDetails} />
        <AppStack.Screen name="OrderSummery" component={OrderSummery} />
        <AppStack.Screen name="Payment" component={OrderPaymentConfirm} />
        <AppStack.Screen name="RateAndReview" component={RateAndReviewScreen} />
        <AppStack.Screen name="CancelBooking" component={CancelBookingScreen} />
        <AppStack.Screen name="Profile" component={ProfileScreen} />
        <AppStack.Screen name="Wallet" component={WalletScreen} />
      </AppStack.Navigator>
    </>
  );
};

export default AppNavigation;