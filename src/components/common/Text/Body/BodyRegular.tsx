import React from 'react';
import { StyleSheet, Text } from 'react-native';

import { COLORS, FONTS } from '../../../../constants';
import { TextProps } from '../../../../types/typography';

const BodyRegular = ({ text, textStyles }: TextProps) => {
  return <Text style={[styles.text, textStyles]}>{text}</Text>;
};

const styles = StyleSheet.create({
  text: {
    ...FONTS.body3,
    fontWeight: '400',
    color: COLORS.black,
    opacity: 0.5,
  },
});

export default BodyRegular;
