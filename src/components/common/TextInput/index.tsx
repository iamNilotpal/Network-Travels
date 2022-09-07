import React from 'react';
import {
  StyleSheet,
  TextInput as NativeTextInput,
  View,
  StyleProp,
  type ViewStyle,
  KeyboardTypeOptions,
} from 'react-native';
import { COLORS, SIZES } from '../../../constants';

type TextInputProps = {
  placeholder: string;
  value?: string;
  placeholderColor?: string;
  onChangeText?: (text: string) => void;
  inputStyles?: StyleProp<ViewStyle>;
  keyboardType?: KeyboardTypeOptions;
};

const TextInput: React.FC<TextInputProps> = ({ inputStyles, ...rest }) => {
  return (
    <View style={[styles.container, inputStyles]}>
      <NativeTextInput
        placeholderTextColor={COLORS.lightGray}
        {...rest}
        style={{ fontWeight: '600' }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: 290,
    height: 42,
    backgroundColor: COLORS.white,
    alignSelf: 'center',
    borderRadius: SIZES.base,
    paddingLeft: 15,
    paddingRight: 10,
  },
  input: {},
});

export default TextInput;
