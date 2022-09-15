import { StyleSheet } from 'react-native';
import { COLORS } from '../../../../constants';

export default StyleSheet.create({
  container: {
    width: '100%',
    paddingBottom: 10,
    backgroundColor: ' rgba(250, 208, 8, 0.15)',
    borderWidth: 1,
    borderColor: COLORS.primary,
    borderRadius: 5,
    borderTopWidth: 0,
  },

  header: {
    width: '100%',
    height: 29,
    backgroundColor: COLORS.green,
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
