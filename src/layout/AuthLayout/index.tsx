import React from 'react';
import {
  Image,
  ImageSourcePropType,
  Keyboard,
  Pressable,
  StyleSheet,
} from 'react-native';
import { COLORS, Images } from '../../constants';

type AuthLayoutProps = {
  children: React.ReactNode;
};

const AuthLayout: React.FC<AuthLayoutProps> = ({ children }) => {
  return (
    <Pressable style={styles.container} onPress={() => Keyboard.dismiss()}>
      <Image
        source={Images.map as ImageSourcePropType}
        resizeMode="cover"
        style={[StyleSheet.absoluteFillObject, styles.image]}
      />
      {children}
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.primary,
    width: '100%',
    height: '100%',
  },
  image: {
    justifyContent: 'center',
    alignItems: 'center',
    opacity: 0.2,
    top: 120,
    left: 30,
  },
});

export default AuthLayout;
