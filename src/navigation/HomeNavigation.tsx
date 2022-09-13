import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import BottomNavigation from './BottomNavigation';
import BusTypes from '../screens/BusTypes';
import StatusBar from '../components/common/StatusBar';
import { COLORS } from '../constants';
import BusesContainer from '../containers/BusesContainer';
import MenuBarScreen from '../screens/MenuBar';
import FilterScreen from '../screens/Filter';
import FiltersContainer from '../containers/FiltersContainer';

export type HomeStackParams = {
  Bottom: undefined;
  BusTypes: undefined;
  SetBooking: undefined;
  FareDetails: undefined;
  PickupDrop: undefined;
  PassengerDetails: undefined;
  OrderSummer: undefined;
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
      </HomeStack.Navigator>
    </>
  );
};

export default HomeNavigation;
