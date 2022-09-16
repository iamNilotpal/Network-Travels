import React from 'react';
import { View } from 'react-native';

import PrimaryButton from '../common/Button/PrimaryButton';
import RadioButton from '../common/RadioButton';
import BodyRegular from '../common/Text/Body/BodyRegular';
import { commonStyles } from './styles';

export type StepProps = {
  onPress: () => void;
};

const Step1: React.FC<StepProps> = ({ onPress }) => {
  return (
    <View style={[commonStyles.margin]}>
      <View>
        <View style={[commonStyles.align, { marginBottom: 14 }]}>
          <BodyRegular text="BOOKING ID" textStyles={{ fontWeight: '700' }} />
          <BodyRegular
            text="PNR - 1215420"
            textStyles={{ fontWeight: '700' }}
          />
        </View>
        <View style={[commonStyles.align, { marginBottom: 14 }]}>
          <BodyRegular text="Guwahati" />
          <BodyRegular text="Jorhat" />
        </View>
        <View style={[commonStyles.align, { marginBottom: 14 }]}>
          <BodyRegular text="Sunday, 21 April" />
          <BodyRegular text="06:00" />
        </View>
      </View>

      <View style={[{ marginTop: 37 }]}>
        <View style={[commonStyles.align, { marginBottom: 14 }]}>
          <BodyRegular
            text="Passenger details"
            textStyles={{ fontWeight: '700' }}
          />
          <BodyRegular text="Seats" textStyles={{ fontWeight: '700' }} />
        </View>
        <View style={[commonStyles.align, { marginBottom: 14 }]}>
          <View style={commonStyles.align}>
            <RadioButton
              isActive={false}
              style={{ marginRight: 15, marginTop: 1 }}
            />
            <BodyRegular text="Lorem Ipsum" />
          </View>
          <BodyRegular text="7(LB)" />
        </View>
        <View style={[commonStyles.align, { marginBottom: 14 }]}>
          <View style={commonStyles.align}>
            <RadioButton
              isActive={true}
              style={{ marginRight: 15, marginTop: 1 }}
            />
            <BodyRegular text="Lorem Ipsum" />
          </View>
          <BodyRegular text="7(UB)" />
        </View>
      </View>
      <PrimaryButton
        text="CANCEL"
        onPress={onPress}
        btnStyles={{ position: 'absolute', bottom: 20 }}
      />
    </View>
  );
};

export default Step1;
