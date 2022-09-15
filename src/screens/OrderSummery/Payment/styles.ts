import { StyleSheet } from 'react-native';
import { COLORS } from '../../../constants';

export default StyleSheet.create({
  container: {
    marginHorizontal: 29,
  },

  commonStyles: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  busContainer: {
    width: 40,
    height: 40,
    borderRadius: 30,
    borderWidth: 1,
    borderColor: COLORS.primary,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(250, 208, 8, 0.15)',
  },
});
