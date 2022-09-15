import { View, StyleSheet, ViewStyle, StyleProp } from 'react-native';
import React from 'react';
import { COLORS } from '../../../constants';

type RadioButtonProps = {
  isActive: boolean;
  style?: StyleProp<ViewStyle>;
};

const RadioButton: React.FC<RadioButtonProps> = ({ isActive, style }) => {
  return (
    <View style={[styles.container, style]}>
      {isActive && <View style={styles.innerContainer} />}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: 15,
    height: 15,
    padding: 2,
    borderWidth: 2,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  innerContainer: {
    width: '100%',
    height: '100%',
    backgroundColor: COLORS.black,
    borderRadius: 20,
  },
});

export default RadioButton;
