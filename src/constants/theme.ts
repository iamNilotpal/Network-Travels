import { Dimensions } from 'react-native';
const { width, height } = Dimensions.get('window');

export const COLORS = {
  primary: '#FAD008',
  primary100: 'rgba(250, 208, 8, 0.15)',
  black: '#000000',
  white: '#FFFFFF',
  green: '#00AA63',
  lightGray: '#C4C4C4',
  lightGray2: '#EFEBEB',
  darkGray: '#898C95',
  transparent: 'transparent',
};

export const SIZES = {
  /* Base Sizes */
  base: 8,
  font: 14,
  radius: 30,
  padding: 10,
  padding2: 12,

  /* Font Sizes */
  largeTitle: 50,
  h1: 32,
  h2: 22,
  h3: 20,
  h4: 18,
  body1: 20,
  body2: 18,
  body3: 14,
  body4: 12,

  /* App Dimensions */
  width,
  height,
};
