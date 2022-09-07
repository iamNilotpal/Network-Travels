import { View } from 'react-native';
import React from 'react';
import AuthLayout from '../../../layout/AuthLayout';
import HeadingBold from '../../../components/common/Text/Heading/Bold';
import styles from './styles';
import TextInput from '../../../components/common/TextInput';

const RegistrationScreen = () => {
  return (
    <AuthLayout>
      <View style={styles.headingContainer}>
        <HeadingBold text="Create a new" />
        <HeadingBold text="account" />
      </View>
      <View style={styles.inputContainer}>
        <TextInput placeholder="Full name" inputStyles={{ marginBottom: 8 }} />
        <TextInput
          placeholder="Mobile number"
          inputStyles={{ marginBottom: 8 }}
        />
        <TextInput placeholder="Email (optional)" />
      </View>
    </AuthLayout>
  );
};

export default RegistrationScreen;
