import React, { useState } from 'react';
import {
  Pressable,
  View,
  ImageBackground,
  ImageSourcePropType,
} from 'react-native';
import { COLORS, Icons } from '../../../constants';

import { LOWER_BERTH } from '../../../constants/data';
import BodyRegular from '../../common/Text/Body/BodyRegular';
import Steering from '../../Icons/Steering';
import LowerSeat from '../../Seats/LowerSeat';
import styles from './styles';

type SeatProps = {
  text: string;
  index: number;
};

const Seat: React.FC<SeatProps> = ({ index, text }) => {
  const [selected, setSelected] = useState(false);

  return (
    <LowerSeat
      selected={selected}
      onPress={() => setSelected(prev => !prev)}
      style={{
        marginBottom: 7,
        backgroundColor: selected ? COLORS.green : COLORS.white,
        marginRight: +text % 3 === 0 ? 0 : 3,
        marginLeft: +text % 3 === 0 ? 0 : 1,
      }}
      key={index}>
      <BodyRegular
        text={text}
        textStyles={{
          textAlign: 'center',
          marginTop: 3,
        }}
      />
    </LowerSeat>
  );
};

const LowerBerth = () => {
  return (
    <View>
      <BodyRegular
        text="Lower berth"
        textStyles={{ textAlign: 'center', marginBottom: 7 }}
      />
      <View style={styles.berthContainer}>
        <View style={styles.steering}>
          <Steering />
        </View>
        <View style={styles.seat}>
          {LOWER_BERTH.map((item, i) =>
            item.visible ? (
              <Seat text={item.text} index={i} key={i} />
            ) : (
              <View style={{ marginHorizontal: 13 }} key={i} />
            ),
          )}
        </View>
      </View>
    </View>
  );
};

export default LowerBerth;
