import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import HomeScreen from '../screens/Home';

export type AppStackParams = {
  Home: undefined;
};

const AppStack = createNativeStackNavigator<AppStackParams>();

const AppNavigation = () => {
  return (
    <AppStack.Navigator>
      <AppStack.Screen name="Home" component={HomeScreen} />
    </AppStack.Navigator>
  );
};

export default AppNavigation;
