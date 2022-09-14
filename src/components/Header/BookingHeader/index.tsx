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
import { COLORS, Icons } from '../../../constants';
import { HomeStackParams } from '../../../navigation/HomeNavigation';
import BodyRegular from '../../common/Text/Body/BodyRegular';

const BookingHeader = () => {
  const navigation =
    useNavigation<NativeStackNavigationProp<HomeStackParams>>();

  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={() => navigation.goBack()}
        style={{ padding: 2 }}>
        <Image source={Icons.arrowLeft as ImageSourcePropType} />
      </TouchableOpacity>

      {/* TIMING CONTAINER*/}
      <View style={styles.timing}>
        {/* FROM CONTAINER */}
        <View style={styles.from}>
          <View style={{ marginBottom: 7 }}>
            <BodyRegular text="From" textStyles={{ fontSize: 10 }} />
            <BodyRegular
              text="Guwahati"
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
              text="21-04-21"
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
              text="Jorhat"
              textStyles={{
                fontSize: 12,
                fontWeight: '700',
                color: COLORS.black,
              }}
            />
          </View>
          <View>
            <BodyRegular text="Return date" textStyles={{ fontSize: 9 }} />
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

export default BookingHeader;
