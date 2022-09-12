import { StyleSheet } from 'react-native';
import { COLORS } from '../../constants';

export default StyleSheet.create({
  container: {
    backgroundColor: COLORS.primary,
    flex: 1,
  },

  linkContainer: {
    width: 345,
    backgroundColor: COLORS.white,
    marginBottom: 10,
    borderTopRightRadius: 5,
    borderBottomRightRadius: 5,
    elevation: 10,
    paddingLeft: 35,
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 12,
  },
});
