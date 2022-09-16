import React from 'react';
import {
  StyleSheet,
  View,
  StyleProp,
  ViewStyle,
  Pressable,
} from 'react-native';
import { COLORS } from '../../../constants';

type LowerSeatProps = {
  onPress: () => void;
  style?: StyleProp<ViewStyle>;
  children: React.ReactNode;
  selected: boolean;
};

const LowerSeat: React.FC<LowerSeatProps> = ({
  selected,
  onPress,
  style,
  children,
}) => {
  return (
    <Pressable style={[styles.container, style]} onPress={onPress}>
      <View
        style={[
          styles.commonStyles,
          styles.bar1,
          { backgroundColor: selected ? COLORS.green : COLORS.white },
        ]}
      />
      <View
        style={[
          styles.commonStyles,
          styles.bar2,
          { backgroundColor: selected ? COLORS.green : COLORS.white },
        ]}
      />
      <View
        style={[
          styles.commonStyles,
          styles.bar3,
          { backgroundColor: selected ? COLORS.green : COLORS.white },
        ]}
      />
      {children}
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {
    width: 31,
    height: 34,
    backgroundColor: COLORS.white,
    borderWidth: 2,
    borderColor: COLORS.black,
    borderRadius: 4,
    position: 'relative',
  },
  commonStyles: {
    position: 'absolute',
    width: 9,
    height: 25,
    borderWidth: 2,
    borderColor: COLORS.black,
    borderRadius: 10,
    backgroundColor: COLORS.white,
  },
  bar1: {
    top: 5,
    left: -5,
  },
  bar2: {
    right: -5,
    top: 5,
  },
  bar3: {
    height: 29,
    bottom: 0,
    top: 12,
    left: 8,
    transform: [{ rotate: '90deg' }],
  },
});

export default LowerSeat;
