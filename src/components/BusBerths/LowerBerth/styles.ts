import { StyleSheet } from 'react-native';
import { COLORS } from '../../../constants';

export default StyleSheet.create({
  berthContainer: {
    borderWidth: 2,
    borderColor: COLORS.primary,
    backgroundColor: 'rgba(250, 208, 8, 0.15)',
    borderRadius: 5,
    width: 160,
    position: 'relative',
    paddingBottom: 5,
  },

  steering: {
    position: 'absolute',
    right: 5,
    top: 5,
  },

  seat: {
    paddingHorizontal: 5,
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginTop: 50,
    justifyContent: 'space-around',
    alignItems: 'center',
  },
});
