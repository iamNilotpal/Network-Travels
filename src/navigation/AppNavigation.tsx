import React from 'react';
import { Image, ImageSourcePropType, Text, View } from 'react-native';
import {
  AnimatedTabBarNavigator,
  TabElementDisplayOptions,
} from 'react-native-animated-nav-tab-bar';
import { COLORS, Icons } from '../constants';
import HomeScreen from '../screens/Home';

export type AppStackParams = {
  Home: undefined;
  Bookings: undefined;
  Help: undefined;
  Profile: undefined;
};

const BottomStack = AnimatedTabBarNavigator<AppStackParams>();

const AppNavigation = () => {
  return (
    <BottomStack.Navigator
      screenOptions={{ headerShown: false }}
      tabBarOptions={{
        activeBackgroundColor: COLORS.white,
        activeTintColor: COLORS.black,
      }}
      appearance={{
        tabBarBackground: COLORS.primary,
        floating: true,
        whenInactiveShow: TabElementDisplayOptions.ICON_ONLY,
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
        component={HomeScreen}
        options={{
          tabBarIcon: () => (
            <Image source={Icons.bookings as ImageSourcePropType} />
          ),
        }}
      />
      <BottomStack.Screen
        name="Help"
        component={HomeScreen}
        options={{
          tabBarLabel: 'Support',
          tabBarIcon: () => (
            <Image source={Icons.support as ImageSourcePropType} />
          ),
        }}
      />
      <BottomStack.Screen
        name="Profile"
        component={HomeScreen}
        options={{
          tabBarIcon: () => (
            <Image source={Icons.profile as ImageSourcePropType} />
          ),
        }}
      />
    </BottomStack.Navigator>
  );
};

export default AppNavigation;
