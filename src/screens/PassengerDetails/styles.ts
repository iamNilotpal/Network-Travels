import { StyleSheet } from 'react-native';
import { COLORS } from '../../constants';

export default StyleSheet.create({
  inputContainers: {
    marginTop: 25,
    marginBottom: 15,
  },

  updates: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },

  passengerDetails: {
    borderWidth: 1,
    borderColor: COLORS.primary,
    borderRadius: 5,
  },

  passengerDetailsHeader: {
    height: 56,
    backgroundColor: COLORS.primary,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    alignItems: 'center',
    borderBottomLeftRadius: 5,
    borderBottomRightRadius: 5,
  },

  details: { backgroundColor: 'rgba(250, 208, 8, 0.15)', paddingBottom: 15 },
  personalInfo: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    marginBottom: 15,
  },
  inputStyle: {
    borderBottomWidth: 1,
    borderBottomColor: COLORS.lightGray,
    width: '70%',
  },

  commonStyles: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});
