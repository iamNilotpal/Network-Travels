import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import React from 'react';
import {
  Image,
  ImageSourcePropType,
  StyleSheet,
  TouchableOpacity,
  View,
} from 'react-native';

import {
  selectDestination,
  selectStart,
} from '../../../store/features/journeySlice';
import { useAppSelector } from '../../../store/hooks';

import { COLORS, Icons } from '../../../constants';
import { AppStackParams } from '../../../navigation/AppNavigation';
import BodyRegular from '../../common/Text/Body/BodyRegular';

const BustTypesHeader = () => {
  const navigation = useNavigation<NativeStackNavigationProp<AppStackParams>>();
  const destination = useAppSelector(selectDestination);
  const start = useAppSelector(selectStart);

  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={() => navigation.goBack()}
        style={{ padding: 2 }}>
        <Image source={Icons.arrowLeft as ImageSourcePropType} />
      </TouchableOpacity>
      <View style={styles.timing}>
        {/* START CONTAINER */}
        <View style={styles.from}>
          <View style={{ marginBottom: 7 }}>
            <BodyRegular text="From" textStyles={{ fontSize: 10 }} />
            <BodyRegular
              text={start.from}
              textStyles={{
                fontSize: 12,
                fontWeight: '700',
                color: COLORS.black,
              }}
            />
          </View>
          <View>
            <BodyRegular text="Departure date" textStyles={{ fontSize: 10 }} />
            <BodyRegular
              text={destination.date}
              textStyles={{
                fontSize: 12,
                fontWeight: '700',
                color: COLORS.black,
              }}
            />
          </View>
        </View>

        {/* TO CONTAINER */}
        <View style={{ alignSelf: 'flex-start' }}>
          <View style={{ marginBottom: 7 }}>
            <BodyRegular text="To" textStyles={{ fontSize: 9 }} />
            <BodyRegular
              text={destination.to}
              textStyles={{
                fontSize: 12,
                fontWeight: '700',
                color: COLORS.black,
              }}
            />
          </View>
          <View>
            <BodyRegular text="Return date" textStyles={{ fontSize: 9 }} />
            <BodyRegular
              text={start.date}
              textStyles={{
                fontSize: 12,
                fontWeight: '700',
                color: COLORS.black,
              }}
            />
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.primary,
    height: 88,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    shadowColor: COLORS.black,
    shadowOffset: { height: 10, width: 10 },
    shadowOpacity: 0.25,
    shadowRadius: 10,
    flexDirection: 'row',
    alignItems: 'center',
    elevation: 25,
    paddingLeft: 20,
  },

  timing: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  from: {
    marginRight: 32,
    marginLeft: 20,
  },
});

export default BustTypesHeader;
