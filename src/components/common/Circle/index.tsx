import React from 'react';
import { View, StyleSheet, StyleProp, ViewStyle } from 'react-native';

type CircleProps = {
  style: StyleProp<ViewStyle>;
};

const Circle: React.FC<CircleProps> = ({ style }) => {
  return <View style={[styles.circle, style]} />;
};

const styles = StyleSheet.create({
  circle: {
    width: 30,
    height: 30,
    position: 'absolute',
    borderRadius: 20,
    backgroundColor: '#FEF8DA',
  },
});

export default Circle;
