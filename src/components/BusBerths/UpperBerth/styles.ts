import { StyleSheet } from 'react-native';
import { COLORS } from '../../../constants';

export default StyleSheet.create({
  berthContainer: {
    borderWidth: 2,
    borderColor: COLORS.primary,
    backgroundColor: 'rgba(250, 208, 8, 0.15)',
    borderRadius: 5,
    width: 149,
    height: 469,
    paddingBottom: 5,
    justifyContent: 'flex-end',
    marginLeft: 20,
  },

  seat: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-evenly',
    alignItems: 'center',
  },
});
