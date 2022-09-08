import { View, Text, StyleSheet, StyleProp, TextStyle } from 'react-native';
import React from 'react';
import { COLORS } from '../../../constants';

type LogoProps = {
  textStyles?: StyleProp<TextStyle>;
};

const Logo: React.FC<LogoProps> = ({ textStyles }) => {
  return (
    <View style={styles.container}>
      <Text style={[styles.network, textStyles]}>NETWORK</Text>
      <Text style={[styles.travels, textStyles]}>TRAVELS</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flexDirection: 'row' },
  network: { fontWeight: 'bold', color: COLORS.black, fontSize: 30 },
  travels: { fontWeight: '400', color: COLORS.black, fontSize: 30 },
});

export default Logo;
