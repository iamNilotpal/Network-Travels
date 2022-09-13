import { View, TouchableOpacity } from 'react-native';
import React, { useState } from 'react';
import styles from './styles';
import BodyRegular from '../../common/Text/Body/BodyRegular';
import { COLORS } from '../../../constants';

const FilterBottomNav = () => {
  const [activeTab, setActiveTab] = useState<'APPLY' | 'CANCEL'>('APPLY');

  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={() => setActiveTab('APPLY')}
        style={[
          styles.btnContainer,
          {
            backgroundColor:
              activeTab === 'APPLY' ? COLORS.white : 'transparent',
          },
        ]}>
        <BodyRegular
          text="APPLY"
          textStyles={{
            fontWeight: activeTab === 'APPLY' ? '700' : '600',
          }}
        />
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => setActiveTab('CANCEL')}
        style={[
          styles.btnContainer,
          {
            backgroundColor:
              activeTab === 'CANCEL' ? COLORS.white : 'transparent',
          },
        ]}>
        <BodyRegular
          text="CANCEL"
          textStyles={{
            fontWeight: activeTab === 'CANCEL' ? '700' : '600',
          }}
        />
      </TouchableOpacity>
    </View>
  );
};

export default FilterBottomNav;
