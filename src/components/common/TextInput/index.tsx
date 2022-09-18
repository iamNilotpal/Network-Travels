import React from 'react';
import {
  KeyboardTypeOptions,
  StyleProp,
  StyleSheet,
  TouchableOpacity,
  TextInput as NativeTextInput,
  View,
  Image,
  type ViewStyle,
  ImageSourcePropType,
} from 'react-native';
import { COLORS, SIZES } from '../../../constants';

type TextInputProps = {
  placeholder: string;
  value?: string;
  placeholderTextColor?: string;
  keyboardType?: KeyboardTypeOptions;
  inputStyles?: StyleProp<ViewStyle>;
  autoFocus?: boolean;
  Icon?: React.ElementType;
  onIconPress?: () => void;
  onChangeText: (text: string) => void;
};

const TextInput: React.FC<TextInputProps> = ({
  inputStyles,
  Icon,
  onIconPress,
  ...rest
}) => {
  return (
    <View style={[styles.container, inputStyles]}>
      <NativeTextInput
        placeholderTextColor={COLORS.lightGray}
        style={{
          fontWeight: '600',
          height: '100%',
          width: '100%',
          textAlignVertical: 'top',
        }}
        {...rest}
      />
      {Icon && (
        <TouchableOpacity style={styles.icon} onPress={onIconPress}>
          {<Icon />}
        </TouchableOpacity>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: 'relative',
    width: 290,
    height: 42,
    backgroundColor: COLORS.white,
    alignSelf: 'center',
    borderRadius: SIZES.base,
    paddingLeft: 15,
    paddingRight: 10,
  },

  icon: {
    position: 'absolute',
    right: 8,
    top: 9,
    padding: 3,
  },
});

export default TextInput;
