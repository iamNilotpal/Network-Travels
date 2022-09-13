import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import React from 'react';
import { TouchableOpacity, View } from 'react-native';
import BodyRegular from '../../components/common/Text/Body/BodyRegular';
import User from '../../components/Icons/User';
import X from '../../components/Icons/X';
import { MENU_BAR_DATA } from '../../constants/menuBar';
import { HomeStackParams } from '../../navigation/HomeNavigation';
import styles from './styles';

const MenuBarScreen = () => {
  const navigation =
    useNavigation<NativeStackNavigationProp<HomeStackParams>>();

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={{ margin: 30 }}
        onPress={() => navigation.goBack()}>
        <X width={18} height={18} />
      </TouchableOpacity>
      <TouchableOpacity
        style={[styles.linkContainer, { marginBottom: -1 }]}
        activeOpacity={0.5}>
        <User />
        <BodyRegular text="Login / Sign-up" textStyles={{ marginLeft: 40 }} />
      </TouchableOpacity>
      <View style={styles.divider} />
      <View>
        {MENU_BAR_DATA.map(({ Icon, text, screen }) => (
          <TouchableOpacity
            key={text}
            style={styles.linkContainer}
            activeOpacity={0.5}
            onPress={() => screen && navigation.navigate(screen as any)}>
            <Icon />
            <BodyRegular
              text={text}
              textStyles={{
                marginLeft:
                  text === 'Share'
                    ? 44
                    : text === 'About us'
                    ? 44
                    : text === 'Terms & condition'
                    ? 38
                    : 40,
              }}
            />
          </TouchableOpacity>
        ))}
      </View>
      <BodyRegular
        text="v1.2.1"
        textStyles={{ marginTop: 128, marginLeft: 40 }}
      />
    </View>
  );
};

export default MenuBarScreen;
