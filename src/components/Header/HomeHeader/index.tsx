import { View, Image, ImageSourcePropType, StyleSheet } from 'react-native';
import React from 'react';
import { COLORS, Icons, Images } from '../../../constants';

const HomeHeader = () => {
  return (
    <View style={styles.container}>
      <Image source={Icons.hamburger as ImageSourcePropType} />
      <Image
        source={Images.logo as ImageSourcePropType}
        resizeMode="contain"
        style={styles.logo}
      />
      <Image source={Icons.bell as ImageSourcePropType} />
      <View style={styles.notification} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.primary,
    height: 85,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    shadowColor: COLORS.black,
    shadowOffset: { height: 10, width: 10 },
    shadowOpacity: 0.25,
    shadowRadius: 10,
    elevation: 25,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
  },

  logo: {
    width: 250,
  },

  notification: {
    backgroundColor: '#E53935',
    width: 10,
    height: 10,
    borderRadius: 5,
    top: 30,
    right: 25,
    position: 'absolute',
  },
});

export default HomeHeader;
