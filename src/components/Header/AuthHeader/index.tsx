import { NativeStackHeaderProps } from '@react-navigation/native-stack';
import React from 'react';
import {
  Image,
  ImageSourcePropType,
  StyleProp,
  Text,
  TextStyle,
  TouchableOpacity,
  View,
  type ViewStyle,
} from 'react-native';
import styles from './styles';

interface AuthHeaderProps extends NativeStackHeaderProps {
  headerStyles?: StyleProp<ViewStyle>;
  textStyle?: StyleProp<TextStyle>;
  text: string;
  img: ImageSourcePropType;
}

type HeaderProps = {
  textStyle?: StyleProp<TextStyle>;
  text: string;
  img: ImageSourcePropType;
};

const RightHeader: React.FC<HeaderProps> = ({ textStyle, text, img }) => (
  <>
    <Text style={[styles.text, textStyle]}>{text}</Text>
    <Image source={img} style={styles.img} />
  </>
);

const LeftHeader: React.FC<HeaderProps> = ({ textStyle, text, img }) => (
  <>
    <Image source={img} style={styles.img} />
    <Text style={[styles.text, textStyle]}>{text}</Text>
  </>
);

const AuthHeader: React.FC<AuthHeaderProps> = ({
  headerStyles,
  text,
  img,
  textStyle,
  navigation,
}) => {
  const onPress =
    text === 'Skip'
      ? () => navigation.navigate('LoginScreen')
      : () => navigation.goBack();

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={[styles.header, headerStyles]}
        onPress={onPress}
        activeOpacity={0.8}>
        {text === 'Skip' ? (
          <RightHeader text={text} img={img} textStyle={textStyle} />
        ) : (
          <LeftHeader text={text} img={img} textStyle={textStyle} />
        )}
      </TouchableOpacity>
    </View>
  );
};

export default AuthHeader;
