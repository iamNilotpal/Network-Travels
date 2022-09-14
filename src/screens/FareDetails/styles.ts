import { StyleSheet } from 'react-native';
import { COLORS } from '../../constants';

export default StyleSheet.create({
  fareDetailsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 29,
    marginTop: 60,
  },

  fares: { marginTop: 36 },

  divider: {
    width: '90%',
    alignSelf: 'center',
    height: 1,
    marginVertical: 26,
    backgroundColor: COLORS.black,
    opacity: 0.3,
  },
});
