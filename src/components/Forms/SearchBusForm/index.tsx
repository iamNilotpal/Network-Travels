import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import React, { useState } from 'react';
import { StyleProp, View, ViewStyle } from 'react-native';

import { AppStackParams } from '../../../navigation/AppNavigation';
import PrimaryButton from '../../common/Button/PrimaryButton';
import TextInput from '../../common/TextInput';

import { COLORS, Icons } from '../../../constants';
import Dash from './Dash';
import Mouse from './Mouse';
import styles from './styles';
import { useAppDispatch, useAppSelector } from '../../../store/hooks';
import {
  selectDestination,
  selectStart,
  setDestination,
  setStart,
} from '../../../store/features/journeySlice';
import DatePickerIcon from '../../Icons/DatePicker';
import DatePicker from '../../DatePicker';

type SearchBusFormProps = {
  containerStyles?: StyleProp<ViewStyle>;
};

const SearchBusForm: React.FC<SearchBusFormProps> = ({ containerStyles }) => {
  const [showDeparturePicker, setShowDeparturePicker] = useState(false);
  const [showReturnPicker, setShowReturnPicker] = useState(false);

  const navigation = useNavigation<NativeStackNavigationProp<AppStackParams>>();
  const start = useAppSelector(selectStart);
  const destination = useAppSelector(selectDestination);
  const dispatch = useAppDispatch();

  const handleTravelDateSelect = (date: string) => {
    setShowDeparturePicker(false);
    dispatch(setDestination({ date }));
  };

  const handleReturnDateSelect = (date: string) => {
    setShowReturnPicker(false);
    dispatch(setStart({ date }));
  };

  return (
    <View style={[styles.container, containerStyles]}>
      <View style={styles.formContainer}>
        <View>
          <TextInput
            placeholder="From"
            value={start.from}
            onChangeText={from => dispatch(setStart({ from }))}
            inputStyles={{
              backgroundColor: COLORS.lightGray2,
              marginBottom: 15,
            }}
          />
          <TextInput
            placeholder="To"
            onChangeText={to => dispatch(setDestination({ to }))}
            value={destination.to}
            inputStyles={{ backgroundColor: COLORS.lightGray2 }}
          />
        </View>
        <View style={styles.mouseContainer}>
          <Mouse containerStyles={{ marginBottom: 7 }} />
          <Dash dashStyles={{ marginBottom: 3 }} />
          <Dash dashStyles={{ marginBottom: 3 }} />
          <Dash dashStyles={{ marginBottom: 7 }} />
          <Mouse
            containerStyles={{ backgroundColor: COLORS.black }}
            dotStyles={{ backgroundColor: COLORS.primary }}
          />
        </View>
      </View>
      <View style={styles.dateForm}>
        <View style={{ width: '48%' }}>
          <TextInput
            value={destination.date}
            onChangeText={() => {}}
            placeholder="Departure date"
            inputStyles={{
              width: '100%',
              backgroundColor: COLORS.lightGray2,
              marginLeft: -3,
            }}
            Icon={DatePickerIcon}
            onIconPress={() => setShowDeparturePicker(true)}
          />
          {showDeparturePicker && (
            <DatePicker onDateSelect={handleTravelDateSelect} />
          )}
        </View>
        <View style={{ width: '48%' }}>
          <TextInput
            value={start.date}
            onChangeText={() => {}}
            Icon={() => <DatePickerIcon fill="gray" />}
            onIconPress={() => setShowReturnPicker(true)}
            placeholder="Return date"
            inputStyles={{ width: '100%', backgroundColor: COLORS.lightGray2 }}
          />
          {showReturnPicker && (
            <DatePicker
              onDateSelect={handleReturnDateSelect}
              style={{
                right: 20,
              }}
            />
          )}
        </View>
      </View>
      <PrimaryButton
        text="FIND A BUS"
        onPress={() => navigation.navigate('BusTypes')}
        btnStyles={{ marginTop: 30, width: 320 }}
      />
    </View>
  );
};

export default SearchBusForm;
