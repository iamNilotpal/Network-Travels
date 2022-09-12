import {
  View,
  StyleSheet,
  TouchableOpacity,
  StyleProp,
  ViewStyle,
} from 'react-native';
import React from 'react';
import { COLORS } from '../../../../constants';
import BodyRegular from '../../Text/Body/BodyRegular';

export type BusType = 'All' | 'AC' | 'Morning';

type BusCountCardProps = {
  count: number;
  type: BusType;
  currentType: BusType;
  onPress: (type: BusType) => void;
  style?: StyleProp<ViewStyle>;
};

const BusCountCard: React.FC<BusCountCardProps> = ({
  count,
  type,
  currentType,
  onPress,
  style,
}) => {
  return (
    <TouchableOpacity
      activeOpacity={0.6}
      onPress={() => onPress(type)}
      style={[
        styles.container,
        {
          backgroundColor: type === currentType ? COLORS.white : COLORS.primary,
        },
        style,
      ]}>
      <View>
        <BodyRegular
          text={type}
          textStyles={{
            color: type === currentType ? COLORS.primary : COLORS.black,
            fontWeight: '600',
            fontSize: 15,
          }}
        />
        <BodyRegular
          text={type === 'Morning' ? 'departure' : 'buses'}
          textStyles={{
            color: type === currentType ? COLORS.primary : COLORS.black,
            fontWeight: '600',
            fontSize: 15,
            marginBottom: 10,
          }}
        />
      </View>
      <BodyRegular
        text={count.toString()}
        textStyles={{
          color: type === currentType ? COLORS.primary : COLORS.black,
          fontWeight: '700',
          fontSize: 25,
        }}
      />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    elevation: 5,
    width: 80,
    height: 95,
    borderWidth: 2,
    borderColor: COLORS.primary,
    borderRadius: 5,
    paddingHorizontal: 10,
    paddingVertical: 5,
    justifyContent: 'space-between',
  },
});

export default BusCountCard;
