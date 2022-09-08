import { DefaultTheme, NavigationContainer } from '@react-navigation/native';
import React from 'react';
import { COLORS } from '../constants';

import { selectActivated } from '../store/features/authSlice';
import { useAppSelector } from '../store/hooks';

import AppNavigation from './AppNavigation';
import AuthNavigation from './AuthNavigation';

const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: COLORS.white,
  },
};

const RootNavigation = () => {
  const isActivated = useAppSelector(selectActivated);

  return (
    <NavigationContainer theme={theme}>
      {isActivated ? <AppNavigation /> : <AuthNavigation />}
    </NavigationContainer>
  );
};

export default RootNavigation;
