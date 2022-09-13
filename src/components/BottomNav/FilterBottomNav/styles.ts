import { StyleSheet } from 'react-native';
import { COLORS } from '../../../constants';

export default StyleSheet.create({
  container: {
    position: 'absolute',
    bottom: 10,
    backgroundColor: COLORS.primary,
    alignSelf: 'center',
    width: 352,
    borderRadius: 100,
    height: 58,
    justifyContent: 'space-evenly',
    alignItems: 'center',
    flexDirection: 'row',
  },

  btnContainer: {
    paddingVertical: 10,
    paddingHorizontal: 55,
    borderRadius: 25,
  },
});
