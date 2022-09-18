import React from 'react';
import { StyleSheet, View } from 'react-native';
import PrimaryButton from '../../components/common/Button/PrimaryButton';
import TextInput from '../../components/common/TextInput';

import OtherHeader from '../../components/Header/OtherHeader';
import ArrowLeft from '../../components/Icons/ArrowLeft';
import { COLORS } from '../../constants';

const TicketDetails = () => {
  return (
    <>
      <OtherHeader text="Get ticket details">
        <ArrowLeft />
      </OtherHeader>
      <View style={styles.container}>
        <TextInput
          placeholder="PNR number"
          inputStyles={{ marginBottom: 20, backgroundColor: COLORS.lightGray2 }}
        />
        <PrimaryButton text="SUBMIT" onPress={() => {}} />
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: -100,
  },
});

export default TicketDetails;
