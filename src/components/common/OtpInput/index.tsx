import React, { useEffect, useRef } from 'react';
import { StyleProp, StyleSheet, TextInput, ViewStyle } from 'react-native';
import { COLORS } from '../../../constants';

type OtpInputProps = {
  autoFocus?: boolean;
  onChangeText: (otp: string, index: number) => void;
  inputStyles?: StyleProp<ViewStyle>;
  index: number;
  focusedIndex: number;
};

const OtpInput: React.FC<OtpInputProps> = ({
  index,
  focusedIndex,
  inputStyles,
  onChangeText,
  ...rest
}) => {
  const ref = useRef<TextInput>();

  useEffect(() => {
    if (index === focusedIndex) ref.current?.focus();
  }, [index, focusedIndex]);

  return (
    <TextInput
      textAlign="center"
      maxLength={1}
      keyboardType="numeric"
      autoFocus={index === focusedIndex}
      ref={ref as any}
      onChangeText={text => onChangeText(text, index)}
      style={[styles.input, inputStyles]}
      {...rest}
    />
  );
};

const styles = StyleSheet.create({
  input: {
    backgroundColor: COLORS.white,
    width: 47,
    borderRadius: 5,
    elevation: 6,
  },
});

export default OtpInput;
