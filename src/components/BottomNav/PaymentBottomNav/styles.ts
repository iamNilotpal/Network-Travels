import { StyleSheet } from 'react-native';
import { COLORS } from '../../../constants';

export default StyleSheet.create({
  container: {
    position: 'absolute',
    top: 735,
    width: 352,
    height: 58,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    alignSelf: 'center',
    paddingHorizontal: 20,
    backgroundColor: COLORS.primary,
    borderRadius: 100,
    zIndex: 100,
    elevation: 10,
  },

  btn: {
    backgroundColor: COLORS.white,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 25,
    paddingVertical: 10,
    borderRadius: 40,
  },

  priceTag: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  arrowUp: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 25,
    height: 25,
    backgroundColor: COLORS.white,
    padding: 8,
    borderRadius: 50,
    marginLeft: 16,
    marginTop: 1.5,
  },
});
