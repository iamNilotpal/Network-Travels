import { DefaultTheme, NavigationContainer } from '@react-navigation/native';
import React from 'react';

import { COLORS } from '../constants';
import AppNavigation from './AppNavigation';

const theme = Object.freeze({
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: COLORS.white,
  },
});

const RootNavigation = () => {
  return (
    <NavigationContainer theme={theme}>
      <AppNavigation />
    </NavigationContainer>
  );
};

export default RootNavigation;
