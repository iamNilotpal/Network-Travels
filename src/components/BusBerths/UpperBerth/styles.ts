import { StyleSheet } from 'react-native';
import { COLORS } from '../../../constants';

export default StyleSheet.create({
  berthContainer: {
    borderWidth: 2,
    borderColor: COLORS.primary,
    borderRadius: 5,
    width: 149,
    height: 440,
    paddingBottom: 5,
    justifyContent: 'flex-end',
  },

  seat: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-evenly',
    alignItems: 'center',
  },
});
