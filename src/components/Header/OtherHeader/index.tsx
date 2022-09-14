import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { StyleSheet, TouchableOpacity, View } from 'react-native';
import { COLORS } from '../../../constants';
import HeadingBold from '../../common/Text/Heading/Bold';

type OtherHeaderProps = {
  text: string;
  children?: React.ReactNode;
};

const OtherHeader: React.FC<OtherHeaderProps> = ({ text, children }) => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.icon} onPress={() => navigation.goBack()}>
        {children}
      </TouchableOpacity>
      <HeadingBold
        text={text}
        textStyles={{ fontSize: 20, alignSelf: 'center' }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.primary,
    height: 85,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    shadowColor: COLORS.black,
    shadowOffset: { height: 10, width: 10 },
    shadowOpacity: 0.25,
    shadowRadius: 10,
    elevation: 25,
  },

  icon: {
    position: 'absolute',
    padding: 8,
    left: 25,
  },
});

export default OtherHeader;
