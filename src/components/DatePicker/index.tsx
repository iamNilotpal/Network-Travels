import React from 'react';
import { StyleProp, StyleSheet, ViewStyle } from 'react-native';
import ModernDatePicker, { getToday } from 'react-native-modern-datepicker';
import { COLORS } from '../../constants';

type DatePickerProps = {
  onDateSelect: (date: string) => void;
  style?: StyleProp<ViewStyle>;
};

const DatePicker: React.FC<DatePickerProps> = ({
  onDateSelect,
  style = {},
}) => {
  return (
    <ModernDatePicker
      minimumDate={getToday()}
      selected={getToday()}
      onDateChange={onDateSelect}
      options={{ backgroundColor: COLORS.primary, mainColor: COLORS.black }}
      mode="calendar"
      style={{ ...styles.container, ...(style as any) }}
    />
  );
};

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    top: -100,
    zIndex: 10,
    width: 300,
    borderRadius: 10,
  },
});

export default DatePicker;
