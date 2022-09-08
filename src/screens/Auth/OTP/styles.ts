import { StyleSheet } from 'react-native';
import { FONTS } from '../../../constants';

export default StyleSheet.create({
  headerTextContainer: {
    alignItems: 'center',
    marginTop: 39,
  },
  title: {
    ...FONTS.h1,
    fontWeight: '700',
    marginBottom: 9,
  },
  subtitle: {
    width: 230,
    textAlign: 'center',
    ...FONTS.body4,
    fontWeight: '500',
  },
  otpContainer: {
    marginTop: 176,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  confirmBtn: {
    marginTop: 30,
  },
  bus: {
    marginTop: 150,
    alignSelf: 'center',
  },

  resendActions: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 8,
  },
});
