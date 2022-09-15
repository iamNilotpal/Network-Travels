import React from 'react';
import {
  StyleProp,
  StyleSheet,
  TouchableOpacity,
  ViewStyle,
  TextStyle,
} from 'react-native';
import { COLORS, SIZES } from '../../../../constants';
import BodyRegular from '../../Text/Body/BodyRegular';

type PrimaryButtonProps = {
  text: string;
  onPress: () => void;
  disabled?: boolean;
  btnStyles?: StyleProp<ViewStyle>;
  textStyles?: StyleProp<TextStyle>;
};

const PrimaryButton: React.FC<PrimaryButtonProps> = ({
  text,
  onPress,
  btnStyles,
  disabled,
  textStyles,
}) => {
  return (
    <TouchableOpacity
      activeOpacity={0.7}
      onPress={onPress}
      disabled={disabled}
      style={[styles.container, btnStyles, { opacity: disabled ? 0.6 : 1 }]}>
      <BodyRegular
        text={text}
        textStyles={[
          {
            color: '#fff',
            fontWeight: 'bold',
            textAlign: 'center',
          },
          textStyles,
        ]}
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
