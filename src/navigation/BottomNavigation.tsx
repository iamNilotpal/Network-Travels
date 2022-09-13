import React from 'react';
import { Image, ImageSourcePropType, Text, View } from 'react-native';
import {
  AnimatedTabBarNavigator,
  TabElementDisplayOptions,
} from 'react-native-animated-nav-tab-bar';
import { COLORS, Icons } from '../constants';
import Bookings from '../screens/Bookings';
import HelpSupport from '../screens/Help&Support';
import HomeScreen from '../screens/Home';
import Profile from '../screens/Profile';

export type AppStackParams = {
  Home: undefined;
  Bookings: undefined;
  Help: undefined;
  Profile: undefined;
};

const BottomStack = AnimatedTabBarNavigator<AppStackParams>();

const BottomNavigation = () => {
  return (
    <BottomStack.Navigator
      screenOptions={{ headerShown: false }}
      tabBarOptions={{
        activeBackgroundColor: COLORS.white,
        activeTintColor: COLORS.black,
      }}
      appearance={{
        tabBarBackground: COLORS.primary,
        whenInactiveShow: TabElementDisplayOptions.ICON_ONLY,
        floating: true,
      }}>
      <BottomStack.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarIcon: () => (
            <Image source={Icons.home as ImageSourcePropType} />
          ),
        }}
      />
      <BottomStack.Screen
        name="Bookings"
        component={Bookings}
        options={{
          tabBarIcon: () => (
            <Image source={Icons.bookings as ImageSourcePropType} />
          ),
        }}
      />
      <BottomStack.Screen
        name="Help"
        component={HelpSupport}
        options={{
          tabBarLabel: 'Support',
          tabBarIcon: () => (
            <Image source={Icons.support as ImageSourcePropType} />
          ),
        }}
      />
      <BottomStack.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarIcon: () => (
            <Image source={Icons.profile as ImageSourcePropType} />
          ),
        }}
      />
    </BottomStack.Navigator>
  );
};

export default BottomNavigation;
