import { Text, TouchableOpacity, StyleSheet } from 'react-native';
import React from 'react';
import { COLORS, SIZES } from '../../../../constants';
import BodyRegular from '../../Text/Body/BodyRegular';

type PrimaryButtonProps = {
  text: string;
  onPress?: () => void;
};

const PrimaryButton: React.FC<PrimaryButtonProps> = ({ text, onPress }) => {
  return (
    <TouchableOpacity
      activeOpacity={0.8}
      onPress={onPress}
      style={styles.container}>
      <BodyRegular
        text={text}
        textStyles={{
          color: '#fff',
          fontWeight: 'bold',
          textAlign: 'center',
          opacity: 1,
        }}
      />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.black,
    width: 290,
    borderRadius: SIZES.base,
    alignSelf: 'center',
    paddingVertical: 12,
    elevation: 10,
  },
  text: {},
});

export default PrimaryButton;
