import { StyleSheet } from 'react-native';
import { COLORS } from '../../../constants';

export default StyleSheet.create({
  container: { alignItems: 'center' },
  formContainer: {
    flexDirection: 'row',
  },
  mouseContainer: { marginLeft: 20 },
  dateForm: {
    width: 320,
    flexDirection: 'row',
    marginTop: 15,
    justifyContent: 'space-between',
  },
});
