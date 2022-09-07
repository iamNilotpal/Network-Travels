import { Text, StyleSheet } from 'react-native';
import React from 'react';
import { TextProps } from '../../../../../types/typography';
import { COLORS, FONTS } from '../../../../../constants';

const HeadingSmall = ({ text, textStyles }: TextProps) => {
  return <Text style={[styles.text, textStyles]}>{text}</Text>;
};

const styles = StyleSheet.create({
  text: {
    ...FONTS.h2,
    fontSize: 24,
    color: COLORS.black,
    fontWeight: '400',
    letterSpacing: 3,
  },
});

export default HeadingSmall;
