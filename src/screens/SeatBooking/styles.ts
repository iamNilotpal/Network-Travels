import { StyleSheet } from 'react-native';
import { COLORS } from '../../constants';

export default StyleSheet.create({
  berths: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    marginTop: 35,
  },
  rest: { marginTop: 33, marginHorizontal: 29 },
  restDetailsContainer: {
    borderWidth: 2,
    borderColor: COLORS.primary,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: 'rgba(250, 208, 8, 0.15)',
    borderRadius: 10,
    height: 55,
    paddingHorizontal: 10,
  },
  restDetails: {
    flexDirection: 'row',
  },
  details: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: COLORS.white,
    paddingHorizontal: 15,
    paddingVertical: 8,
    elevation: 3,
    borderRadius: 7,
  },
  amenitiesContainer: {
    marginTop: 30,
    marginHorizontal: 29,
  },
});
