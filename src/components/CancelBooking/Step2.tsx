import { View, Text, StyleSheet } from 'react-native';
import React from 'react';
import { commonStyles } from './styles';
import BodyRegular from '../common/Text/Body/BodyRegular';
import Rupee from '../Icons/Rupee';
import RadioButton from '../common/RadioButton';
import PrimaryButton from '../common/Button/PrimaryButton';
import { StepProps } from './Step1';

const Step2: React.FC<StepProps> = ({ onPress }) => {
  return (
    <View style={[commonStyles.margin, styles.container]}>
      <View>
        <View style={[commonStyles.align, { marginBottom: 14 }]}>
          <BodyRegular
            text="Refundable amount"
            textStyles={{ fontWeight: '700' }}
          />
          <View style={commonStyles.align}>
            <Rupee height={11} />
            <BodyRegular
              text="120.00"
              textStyles={{
                fontWeight: '700',
                marginBottom: 1.5,
                marginLeft: 5,
              }}
            />
          </View>
        </View>
        <View>
          <BodyRegular
            text="Claim refundable amount :"
            textStyles={{ marginBottom: 10, marginTop: 32, fontWeight: '700' }}
          />
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              marginBottom: 15,
            }}>
            <RadioButton isActive={true} />
            <BodyRegular
              text="Default payment method (within 7 business days)"
              textStyles={{ marginLeft: 15 }}
            />
          </View>
          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <RadioButton isActive={true} />
            <BodyRegular
              text="My wallet (instantly)"
              textStyles={{ marginLeft: 15 }}
            />
          </View>
        </View>
      </View>
      <PrimaryButton
        text="SUBMIT"
        onPress={onPress}
        btnStyles={{ position: 'absolute', bottom: 20 }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {},
});

export default Step2;
