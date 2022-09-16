import { StyleSheet } from 'react-native';
import { COLORS } from '../../constants';

export default StyleSheet.create({
  container: {
    marginHorizontal: 29,
    marginTop: 60,
  },
  commonStyles: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  questionContainer: {
    justifyContent: 'space-between',
    marginBottom: 15,
  },
  emojiContainer: {
    justifyContent: 'space-evenly',
  },
});
