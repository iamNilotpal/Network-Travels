import { View, Pressable, StyleProp, ViewStyle } from 'react-native';
import React, { useState } from 'react';
import styles from './styles';
import BodyRegular from '../common/Text/Body/BodyRegular';
import { COLORS } from '../../constants';

type TabsProps = {
  containerStyles?: StyleProp<ViewStyle>;
  firstText: string;
  secondText: string;
  onPress: (text: string) => void;
};

const Tabs: React.FC<TabsProps> = ({
  containerStyles,
  firstText,
  secondText,
  onPress,
}) => {
  const [selected, setSelected] = useState(firstText);

  const handlePress = (text: string) => {
    setSelected(text);
    onPress(text);
  };

  return (
    <View style={[styles.container, containerStyles]}>
      <Pressable
        onPress={() => handlePress(firstText)}
        style={[
          styles.tab,
          {
            backgroundColor:
              selected === firstText ? COLORS.white : 'transparent',
          },
        ]}>
        <BodyRegular
          text={firstText}
          textStyles={{
            color: selected === firstText ? COLORS.black : COLORS.darkGray,
            fontWeight: selected === firstText ? '700' : '500',
          }}
        />
      </Pressable>
      <Pressable
        onPress={() => handlePress(secondText)}
        style={[
          styles.tab,
          {
            backgroundColor:
              selected === secondText ? COLORS.white : 'transparent',
          },
        ]}>
        <BodyRegular
          text={secondText}
          textStyles={{
            color: selected === secondText ? COLORS.black : COLORS.darkGray,
            fontWeight: selected === secondText ? '700' : '500',
          }}
        />
      </Pressable>
    </View>
  );
};

export default Tabs;
