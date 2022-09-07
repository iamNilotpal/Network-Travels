import React from 'react';
import {
  Image,
  ImageSourcePropType,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import { COLORS } from '../../../../constants';

type SecondaryButtonProps = {
  img: ImageSourcePropType;
  onPress: () => void;
};

const SecondaryButton = ({ img, onPress }: SecondaryButtonProps) => {
  return (
    <TouchableOpacity
      style={styles.container}
      activeOpacity={0.7}
      onPress={onPress}>
      <Image style={styles.img} source={img} />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.primary,
    width: 68,
    height: 68,
    justifyContent: 'center',
    alignItems: 'center',
    transform: [{ rotate: '45deg' }],
    borderRadius: 10,
    shadowColor: 'rgba(250, 208, 8, 0.15)',
    shadowOffset: { height: 10, width: 10 },
    shadowOpacity: 1,
    shadowRadius: 20,
    elevation: 10,
    marginTop: -30,
    alignSelf: 'center',
  },

  img: {
    transform: [{ rotate: '-45deg' }],
  },
});

export default SecondaryButton;
