import { View, Pressable, StyleProp, ViewStyle } from 'react-native';
import React, { useState } from 'react';
import styles from './styles';
import BodyRegular from '../../common/Text/Body/BodyRegular';
import { COLORS } from '../../../constants';

type TabsProps = {
  firstText: string;
  secondText: string;
  onPress: (text: string) => void;
  containerStyles?: StyleProp<ViewStyle>;
  tabPadding?: number;
};

const AuthTabs: React.FC<TabsProps> = ({
  containerStyles,
  firstText,
  secondText,
  onPress,
  tabPadding,
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
            paddingHorizontal: tabPadding || 35,
          },
        ]}>
        <BodyRegular
          text={firstText}
          textStyles={{
            color: COLORS.black,
            opacity: selected === firstText ? 1 : 0.3,
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
            paddingHorizontal: tabPadding || 35,
          },
        ]}>
        <BodyRegular
          text={secondText}
          textStyles={{
            color: COLORS.black,
            opacity: selected === secondText ? 1 : 0.3,
          }}
        />
      </Pressable>
    </View>
  );
};

export default AuthTabs;
