import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import React from 'react';
import { StyleProp, View, ViewStyle } from 'react-native';

import { COLORS } from '../../../constants';
import { HomeStackParams } from '../../../navigation/HomeNavigation';
import PrimaryButton from '../../common/Button/PrimaryButton';
import TextInput from '../../common/TextInput';
import Dash from './Dash';
import Mouse from './Mouse';
import styles from './styles';

type SearchBusFormProps = {
  containerStyles?: StyleProp<ViewStyle>;
};

const SearchBusForm: React.FC<SearchBusFormProps> = ({ containerStyles }) => {
  const navigation =
    useNavigation<NativeStackNavigationProp<HomeStackParams>>();

  return (
    <View style={[styles.container, containerStyles]}>
      <View style={styles.formContainer}>
        <View>
          <TextInput
            placeholder="From"
            inputStyles={{
              backgroundColor: COLORS.lightGray2,
              marginBottom: 15,
            }}
          />
          <TextInput
            placeholder="To"
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
        <TextInput
          placeholder="Departure date"
          inputStyles={{
            width: '48%',
            backgroundColor: COLORS.lightGray2,
            marginLeft: -3,
          }}
        />
        <TextInput
          placeholder="Return date"
          inputStyles={{ width: '48%', backgroundColor: COLORS.lightGray2 }}
        />
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
