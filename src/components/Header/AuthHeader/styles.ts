import { StyleSheet } from 'react-native';
import { COLORS } from '../../../constants';

export default StyleSheet.create({
  container: {
    backgroundColor: COLORS.primary,
  },
  header: {
    backgroundColor: COLORS.white,
    width: 70,
    height: 30,
    borderTopLeftRadius: 20,
    borderBottomLeftRadius: 20,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 15,
    alignSelf: 'flex-end',
  },
  img: {
    marginTop: 2,
  },
  text: { color: COLORS.black },
});
