import { NavigationContainer } from '@react-navigation/native';
import React from 'react';

import { selectActivated } from '../store/features/authSlice';
import { useAppSelector } from '../store/hooks';

import AppNavigation from './AppNavigation';
import AuthNavigation from './AuthNavigation';

const RootNavigation = () => {
  const isActivated = useAppSelector(selectActivated);

  return (
    <NavigationContainer>
      {isActivated ? <AppNavigation /> : <AuthNavigation />}
    </NavigationContainer>
  );
};

export default RootNavigation;
