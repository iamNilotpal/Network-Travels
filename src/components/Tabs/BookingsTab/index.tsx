import React from 'react';
import { StyleProp, StyleSheet, View, ViewStyle } from 'react-native';
import { COLORS } from '../../../constants';
import BodyRegular from '../../common/Text/Body/BodyRegular';

type BookingsTabProps = {
  containerStyles?: StyleProp<ViewStyle>;
};

const BookingsTab: React.FC<BookingsTabProps> = ({ containerStyles }) => {
  return (
    <View style={[styles.container, containerStyles]}>
      <View
        style={[
          styles.btn,
          { backgroundColor: COLORS.primary, borderRightWidth: 1 },
        ]}>
        <BodyRegular text="One way" />
      </View>
      <View style={[styles.btn]}>
        <BodyRegular text="Return" />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: 35,
    justifyContent: 'space-between',
    borderWidth: 1,
    borderColor: COLORS.black,
    borderRadius: 5,
    overflow: 'hidden',
    height: 40,
  },

  btn: {
    width: '50%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
    overflow: 'hidden',
  },
});

export default BookingsTab;
