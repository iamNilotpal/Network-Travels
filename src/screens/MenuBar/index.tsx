import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import BodyRegular from '../../components/common/Text/Body/BodyRegular';
import X from '../../components/Icons/X';
import { MENU_BAR_DATA } from '../../constants/menuBar';
import styles from './styles';

const MenuBarScreen = () => {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={{ margin: 30 }}>
        <X width={18} height={18} />
      </TouchableOpacity>
      <View>
        {MENU_BAR_DATA.map(({ Icon, text }) => (
          <View key={text} style={styles.linkContainer}>
            <Icon />
            <BodyRegular text={text} textStyles={{ marginLeft: 40 }} />
          </View>
        ))}
      </View>
    </View>
  );
};

export default MenuBarScreen;
