import { StyleSheet } from 'react-native';
import { COLORS } from '../../../constants';

export default StyleSheet.create({
  container: {
    height: 510,
    marginHorizontal: 29,
    marginTop: 55,
    backgroundColor: 'rgba(250, 208, 8, 0.15)',
    borderRadius: 10,
  },
  paymentConfirmHeader: {
    height: 59,
    backgroundColor: COLORS.primary,
    borderRadius: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 25,
    alignItems: 'center',
  },

  paymentDetails: {
    width: 277,
    height: 410,
    backgroundColor: COLORS.white,
    alignSelf: 'center',
    marginTop: 23,
    borderRadius: 5,
  },

  logo: {
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'center',
    marginTop: 20,
  },

  details: {
    marginHorizontal: 20,
  },

  time: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: 35,
  },

  bar: {
    width: 5,
    height: 1,
    backgroundColor: COLORS.lightGray,
  },

  addressDetails: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
});
