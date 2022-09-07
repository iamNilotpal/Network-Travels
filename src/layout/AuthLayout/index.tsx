import { View, StyleSheet } from 'react-native';
import React, { ReactNode } from 'react';
import { COLORS } from '../../constants';

type AuthLayoutProps = {
  children: React.ReactNode;
};

const AuthLayout: React.FC<AuthLayoutProps> = ({ children }) => {
  return <View style={styles.container}>{children}</View>;
};

const styles = StyleSheet.create({
  container: { backgroundColor: COLORS.primary, width: '100%', height: '100%' },
});

export default AuthLayout;
