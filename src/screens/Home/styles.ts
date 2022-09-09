import { StyleSheet } from 'react-native';
import { COLORS } from '../../constants';

export default StyleSheet.create({
  headingContainer: {
    marginTop: 37,
    marginLeft: 29,
  },

  tabsContainer: {
    marginTop: 50,
  },

  bar: {
    width: '100%',
    height: 2,
    backgroundColor: COLORS.black,
    opacity: 0.5,
    position: 'relative',
  },

  details: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 23,
  },
});
