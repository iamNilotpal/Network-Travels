import React from 'react';
import { View } from 'react-native';
import BouncyCheckbox from 'react-native-bouncy-checkbox';
import BodyRegular from '../../components/common/Text/Body/BodyRegular';
import { COLORS } from '../../constants';

type FilterScreenProps = {
  data: {
    title: string;
    data: { text: string; count: string }[];
  };
};

const FilterScreen: React.FC<FilterScreenProps> = ({ data }) => {
  return (
    <View
      style={{
        marginTop: data.title === 'DEPARTURE TIME' ? 54 : 35,
        marginLeft: 30,
      }}>
      <BodyRegular
        text={data.title}
        textStyles={{ fontWeight: '700', marginBottom: 15 }}
      />
      {data.data.map((item, i) => (
        <View key={i} style={{ marginBottom: 7 }}>
          <BouncyCheckbox
            size={20}
            fillColor={COLORS.primary}
            unfillColor={COLORS.white}
            text={`${item.text} (${item.count})`}
            textStyle={{ fontWeight: '600', fontSize: 14 }}
            iconStyle={{
              borderRadius: 0,
            }}
            disableBuiltInState
            innerIconStyle={{ borderRadius: 0, alignSelf: 'center' }}
          />
        </View>
      ))}
    </View>
  );
};

export default FilterScreen;
