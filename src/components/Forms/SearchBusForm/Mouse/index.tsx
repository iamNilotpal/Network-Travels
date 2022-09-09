import { StyleProp, ViewStyle, View, StyleSheet } from 'react-native';
import { COLORS } from '../../../../constants';

type MouseProps = {
  containerStyles?: StyleProp<ViewStyle>;
  dotStyles?: StyleProp<ViewStyle>;
};

const Mouse: React.FC<MouseProps> = ({ containerStyles, dotStyles }) => (
  <View style={[styles.mouseStyles, containerStyles]}>
    <View style={[styles.dot, dotStyles]} />
  </View>
);

const styles = StyleSheet.create({
  mouseStyles: {
    width: 17,
    height: 28,
    borderRadius: 10,
    backgroundColor: COLORS.primary,
  },

  dot: {
    width: 8,
    height: 8,
    borderRadius: 8,
    backgroundColor: COLORS.black,
    marginTop: 4,
    alignSelf: 'center',
  },
});

export default Mouse;
