import React from 'react';
import {
  KeyboardTypeOptions,
  StyleProp,
  StyleSheet,
  TextInput as NativeTextInput,
  View,
  type ViewStyle,
} from 'react-native';
import { COLORS, SIZES } from '../../../constants';

type TextInputProps = {
  placeholder: string;
  value?: string;
  placeholderColor?: string;
  onChangeText?: (text: string) => void;
  keyboardType?: KeyboardTypeOptions;
  inputStyles?: StyleProp<ViewStyle>;
  autoFocus?: boolean;
};

const TextInput: React.FC<TextInputProps> = ({ inputStyles, ...rest }) => {
  return (
    <View style={[styles.container, inputStyles]}>
      <NativeTextInput
        placeholderTextColor={COLORS.lightGray}
        style={{ fontWeight: '600' }}
        {...rest}
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
});

export default TextInput;
