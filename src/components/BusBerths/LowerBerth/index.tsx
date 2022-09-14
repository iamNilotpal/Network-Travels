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
import styles from './styles';

type SeatProps = {
  text: string;
  index: number;
};

const Seat: React.FC<SeatProps> = ({ index, text }) => {
  const [selected, setSelected] = useState(false);

  return (
    <Pressable
      onPress={() => setSelected(prev => !prev)}
      style={{
        marginBottom: 5,
      }}
      key={index}>
      <ImageBackground
        source={Icons.smallSeat as ImageSourcePropType}
        style={{
          width: 33,
          height: 34,
          borderRadius: 5,
          backgroundColor: selected ? COLORS.green : COLORS.white,
        }}>
        <BodyRegular
          text={text}
          textStyles={{
            textAlign: 'center',
            marginTop: 6,
          }}
        />
      </ImageBackground>
    </Pressable>
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
              <View style={{ marginHorizontal: 15 }} key={i} />
            ),
          )}
        </View>
      </View>
    </View>
  );
};

export default LowerBerth;
