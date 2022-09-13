import { StyleSheet } from 'react-native';
import { COLORS } from '../../../constants';

export default StyleSheet.create({
  berthContainer: {
    borderWidth: 2,
    borderColor: COLORS.primary,
    borderRadius: 5,
    width: 145,
    position: 'relative',
    paddingBottom: 5,
  },

  steering: {
    position: 'absolute',
    right: 5,
    top: 5,
  },

  seat: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginTop: 50,
    justifyContent: 'space-evenly',
    alignItems: 'center',
  },
});
