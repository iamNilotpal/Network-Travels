import React from 'react';
import { View } from 'react-native';
import RadioButton from '../../components/common/RadioButton';

import BodyRegular from '../../components/common/Text/Body/BodyRegular';
import TextInput from '../../components/common/TextInput';
import { COLORS } from '../../constants';
import styles from './styles';

const Details = () => {
  return (
    <View>
      <BodyRegular
        text="Passenger details :"
        textStyles={{ marginBottom: 8, fontWeight: '700' }}
      />
      <View style={styles.passengerDetails}>
        <View style={styles.passengerDetailsHeader}>
          <View>
            <BodyRegular text="From" textStyles={{ opacity: 0.5 }} />
            <BodyRegular text="Guwahati" textStyles={{ fontWeight: '700' }} />
          </View>
          <View>
            <BodyRegular
              text="From"
              textStyles={{ alignSelf: 'center', opacity: 0.5 }}
            />
            <BodyRegular text="Guwahati" textStyles={{ fontWeight: '700' }} />
          </View>
          <View>
            <BodyRegular
              text="From"
              textStyles={{ alignSelf: 'flex-end', opacity: 0.5 }}
            />
            <BodyRegular text="Guwahati" textStyles={{ fontWeight: '700' }} />
          </View>
        </View>
        <View style={styles.details}>
          <View>
            <View style={styles.personalInfo}>
              <TextInput
                placeholder="Full name"
                inputStyles={{
                  borderBottomWidth: 1,
                  borderBottomColor: COLORS.lightGray,
                  backgroundColor: 'transparent',
                  width: '60%',
                  paddingLeft: 0,
                }}
              />
              <TextInput
                placeholder="Age"
                inputStyles={{
                  borderBottomWidth: 1,
                  borderBottomColor: COLORS.lightGray,
                  backgroundColor: 'transparent',
                  width: '20%',
                  paddingLeft: 0,
                  borderRadius: 0,
                }}
              />
            </View>
            <View style={[styles.commonStyles, { marginHorizontal: 22 }]}>
              <BodyRegular
                text="Gender :"
                textStyles={{ marginRight: 10, fontWeight: '700' }}
              />
              <View style={styles.commonStyles}>
                <View style={[styles.commonStyles, { marginRight: 20 }]}>
                  <RadioButton isActive={true} style={{ marginRight: 5 }} />
                  <BodyRegular text="Male" />
                </View>
                <View style={styles.commonStyles}>
                  <RadioButton isActive={true} style={{ marginRight: 5 }} />
                  <BodyRegular text="Female" />
                </View>
              </View>
            </View>
          </View>
          <View
            style={{
              width: '100%',
              height: 1,
              backgroundColor: COLORS.primary,
              marginTop: 15,
            }}
          />
          <View>
            <View style={styles.personalInfo}>
              <TextInput
                placeholder="Full name"
                inputStyles={{
                  borderBottomWidth: 1,
                  borderBottomColor: COLORS.lightGray,
                  backgroundColor: 'transparent',
                  width: '60%',
                  paddingLeft: 0,
                }}
              />
              <TextInput
                placeholder="Age"
                inputStyles={{
                  borderBottomWidth: 1,
                  borderBottomColor: COLORS.lightGray,
                  backgroundColor: 'transparent',
                  width: '20%',
                  paddingLeft: 0,
                  borderRadius: 0,
                }}
              />
            </View>
            <View style={[styles.commonStyles, { marginHorizontal: 22 }]}>
              <BodyRegular
                text="Gender :"
                textStyles={{ marginRight: 10, fontWeight: '700' }}
              />
              <View style={styles.commonStyles}>
                <View style={[styles.commonStyles, { marginRight: 20 }]}>
                  <RadioButton isActive={true} style={{ marginRight: 5 }} />
                  <BodyRegular text="Male" />
                </View>
                <View style={styles.commonStyles}>
                  <RadioButton isActive={true} style={{ marginRight: 5 }} />
                  <BodyRegular text="Female" />
                </View>
              </View>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};

export default Details;
