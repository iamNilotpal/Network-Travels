import { NativeStackHeaderProps } from '@react-navigation/native-stack';
import React from 'react';
import {
  Image,
  ImageSourcePropType,
  StyleProp,
  TextStyle,
  StyleSheet,
  Text,
  View,
  type ViewStyle,
  TouchableOpacity,
} from 'react-native';
import { COLORS } from '../../../constants';

interface AuthHeaderProps extends NativeStackHeaderProps {
  headerStyles?: StyleProp<ViewStyle>;
  textStyle?: StyleProp<TextStyle>;
  text: string;
  img: ImageSourcePropType;
}

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
      <TouchableOpacity style={[styles.header, headerStyles]} onPress={onPress}>
        <Text style={textStyle}>{text}</Text>
        <Image source={img} style={styles.img} />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.primary,
  },
  header: {
    backgroundColor: COLORS.white,
    width: 80,
    height: 26,
    borderTopLeftRadius: 20,
    borderBottomLeftRadius: 20,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 15,
    alignSelf: 'flex-end',
  },
  img: {
    marginTop: 2,
  },
});

export default AuthHeader;
