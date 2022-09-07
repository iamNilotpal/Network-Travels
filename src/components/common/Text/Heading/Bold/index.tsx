import React from 'react';
import { StyleSheet, Text } from 'react-native';

import { COLORS, FONTS } from '../../../../../constants';
import { TextProps } from '../../../../../types/typography';

const HeadingBold = ({ text, textStyles = {} }: TextProps) => {
  return <Text style={[styles.text, textStyles]}>{text}</Text>;
};

const styles = StyleSheet.create({
  text: {
    ...FONTS.h1,
    fontWeight: '700',
    color: COLORS.black,
  },
});

export default HeadingBold;
