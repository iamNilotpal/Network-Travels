import { StyleSheet } from 'react-native';
import { COLORS } from '../../../../constants';

export default StyleSheet.create({
  container: {
    backgroundColor: COLORS.primary,
    borderWidth: 1,
    borderColor: COLORS.black,
    borderRadius: 5,
    marginTop: 10,
  },

  wrapper: {
    backgroundColor: COLORS.white,
    borderRadius: 5,
    borderBottomLeftRadius: 7,
    borderBottomRightRadius: 7,
    elevation: 10,
    paddingHorizontal: 12,
    paddingVertical: 12,
  },

  logo: { flexDirection: 'row' },

  footer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderBottomLeftRadius: 5,
    borderBottomRightRadius: 5,
    paddingHorizontal: 12,
    paddingVertical: 8,
  },

  footerItem: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },

  seatBadge: {
    position: 'absolute',
    right: 0,
    backgroundColor: COLORS.primary,
    paddingHorizontal: 8,
    paddingVertical: 5,
    paddingBottom: 6,
    borderRadius: 5,
    borderTopLeftRadius: 0,
  },

  mainContent: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 20,
    marginBottom: 15,
  },

  details: {
    flexDirection: 'row',
    marginLeft: -20,
  },

  departureTime: {
    marginLeft: 10,
  },

  timing: { marginHorizontal: 15 },

  slider: {
    width: 50,
    height: 1,
    backgroundColor: COLORS.black,
    borderRadius: 5,
    position: 'relative',
    opacity: 0.6,
  },

  ball: {
    width: 14,
    height: 14,
    backgroundColor: COLORS.white,
    position: 'absolute',
    borderRadius: 8,
    borderWidth: 2,
    borderColor: COLORS.primary,
    top: -5.5,
    left: '38%',
    zIndex: 5,
  },

  rupeeContainer: {
    marginLeft: 20,
  },

  rupee: { flexDirection: 'row', alignItems: 'center', position: 'relative' },
  lineThrough: {
    position: 'absolute',
    width: '80%',
    height: 2,
    backgroundColor: COLORS.black,
    opacity: 0.5,
    left: -2,
  },
});
