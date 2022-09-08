import { View, Text } from 'react-native';
import React from 'react';
import { useAppSelector } from '../../store/hooks';

const HomeScreen = () => {
  const state = useAppSelector(state => state);

  return (
    <View>
      <Text>{JSON.stringify(state, null, 4)}</Text>
    </View>
  );
};

export default HomeScreen;
