import { StyleSheet } from 'react-native';
import { COLORS } from '../../constants';

export default StyleSheet.create({
  container: {
    backgroundColor: COLORS.primary,
    alignSelf: 'center',
    width: 317,
    height: 48,
    borderRadius: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 8,
  },

  tab: {
    paddingHorizontal: 35,
    paddingVertical: 8,
    borderRadius: 5,
  },
});
