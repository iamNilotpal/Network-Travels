import { StyleSheet } from 'react-native';
import { COLORS } from '../../../constants';

export default StyleSheet.create({
  container: {
    bottom: 10,
    width: 372,
    height: 58,
    alignSelf: 'center',
    backgroundColor: COLORS.primary,
    borderRadius: 100,
    elevation: 5,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    paddingHorizontal: 10,
  },

  button: {
    borderRadius: 50,
    padding: 15,
  },

  buttonText: {
    fontSize: 14,
    fontWeight: '700',
  },
});
