import { StyleSheet } from 'react-native';
import { COLORS } from '../../../constants';

export default StyleSheet.create({
  headingContainer: {
    marginTop: 38,
    marginLeft: 46,
  },

  inputContainer: {
    marginTop: 60,
  },

  actionsContainer: {
    marginTop: 25,
  },

  actions: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 8,
  },

  footer: { marginTop: 30, flex: 1 },

  bar: {
    flex: 1,
    height: 1,
    backgroundColor: COLORS.black,
  },

  footerForm: { flexDirection: 'row', alignItems: 'center' },

  googleButton: {
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'center',
    marginTop: 20,
    backgroundColor: COLORS.white,
    paddingHorizontal: 25,
    paddingVertical: 10,
    borderRadius: 7,
    elevation: 10,
    shadowOffset: { height: 5, width: 5 },
    shadowColor: COLORS.black,
    shadowRadius: 15,
    shadowOpacity: 0.3,
  },

  bus: {
    alignSelf: 'center',
    marginTop: 70,
  },
});
