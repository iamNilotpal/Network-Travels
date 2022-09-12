import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import React from 'react';
import {
  Image,
  ImageSourcePropType,
  Keyboard,
  Pressable,
  View,
} from 'react-native';

import HeadingBold from '../../components/common/Text/Heading/Bold';
import SearchBusForm from '../../components/Forms/SearchBusForm';
import HomeHeader from '../../components/Header/HomeHeader';
import Tabs from '../../components/Tabs';
import { Images } from '../../constants';
import styles from './styles';

const HomeScreen = () => {
  const navigation = useNavigation<NativeStackNavigationProp<{}>>();

  return (
    <Pressable onPress={() => Keyboard.dismiss()}>
      <HomeHeader />
      <View style={styles.headingContainer}>
        <HeadingBold text="Where are you" />
        <HeadingBold text="going to?" />
      </View>
      <View style={styles.tabsContainer}>
        <View style={styles.bar} />
        <Tabs
          firstText="One way"
          secondText="Round trip"
          onPress={() => {}}
          containerStyles={{ position: 'absolute', top: -23 }}
        />
      </View>
      <SearchBusForm containerStyles={{ marginTop: 65, alignSelf: 'center' }} />
      <View style={styles.details}>
        <Image source={Images.group1 as ImageSourcePropType} />
        <Image source={Images.group2 as ImageSourcePropType} />
      </View>
    </Pressable>
  );
};

export default HomeScreen;
