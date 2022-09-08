import React from 'react';
import {
  StyleProp,
  StyleSheet,
  TouchableOpacity,
  ViewStyle,
} from 'react-native';
import { COLORS, SIZES } from '../../../../constants';
import BodyRegular from '../../Text/Body/BodyRegular';

type PrimaryButtonProps = {
  text: string;
  onPress: () => void;
  btnStyles?: StyleProp<ViewStyle>;
  disabled?: boolean;
};

const PrimaryButton: React.FC<PrimaryButtonProps> = ({
  text,
  onPress,
  btnStyles,
  disabled,
}) => {
  return (
    <TouchableOpacity
      activeOpacity={0.7}
      onPress={onPress}
      disabled={disabled}
      style={[styles.container, btnStyles, { opacity: disabled ? 0.6 : 1 }]}>
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
});

export default PrimaryButton;
