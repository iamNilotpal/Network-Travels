import { StyleSheet } from 'react-native';
import { COLORS } from '../../constants';

export default StyleSheet.create({
  container: {
    backgroundColor: COLORS.white,
  },

  imgContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },

  img: {
    marginTop: 30,
  },

  textContainer: {
    paddingHorizontal: 46,
    marginTop: 65,
  },

  headingContainer: { marginBottom: 23 },

  circle: {
    backgroundColor: 'rgba(196, 196, 196, 0.15);',
    width: 568,
    height: 568,
    borderRadius: 300,
    left: -95,
    bottom: -70,
  },

  skip: {
    fontSize: 12,
    fontWeight: '700',
    color: COLORS.black,
    alignSelf: 'flex-end',
    marginRight: 58,
    marginTop: 20,
  },
});
