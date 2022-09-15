import { StyleSheet } from 'react-native';
import { COLORS } from '../../constants';

export default StyleSheet.create({
  dropdownContainer: {
    marginHorizontal: 30,
    marginTop: 57,
  },

  dropdown: {
    height: 50,
    backgroundColor: COLORS.lightGray2,
    borderRadius: 5,
    padding: 12,
  },

  item: {
    padding: 17,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  textItem: {
    flex: 1,
    fontSize: 16,
  },

  placeholderStyle: {
    fontSize: 16,
  },

  selectedTextStyle: {
    fontSize: 16,
  },
});
