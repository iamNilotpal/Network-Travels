import React, { useState } from 'react';
import {
  View,
  Pressable,
  ImageBackground,
  ImageSourcePropType,
} from 'react-native';
import { COLORS, Icons } from '../../../constants';
import { UPPER_BERTH } from '../../../constants/data';
import BodyRegular from '../../common/Text/Body/BodyRegular';
import styles from './styles';

type SeatProps = {
  text: string;
  index: number;
};

const Seat: React.FC<SeatProps> = ({ index, text }) => {
  const [selected, setSelected] = useState(false);

  return (
    <Pressable
      style={{
        marginBottom: 5,
      }}
      key={index}
      onPress={() => setSelected(prev => !prev)}>
      <ImageBackground
        source={Icons.bigSeat as ImageSourcePropType}
        style={{
          width: 35,
          height: 77,
          borderRadius: 5,
          backgroundColor: selected ? COLORS.green : COLORS.white,
        }}>
        <BodyRegular
          text={text}
          textStyles={{
            textAlign: 'center',
            marginTop: 22,
          }}
        />
      </ImageBackground>
    </Pressable>
  );
};

const UpperBerth = () => {
  return (
    <View>
      <BodyRegular
        text="Upper berth"
        textStyles={{ textAlign: 'center', marginBottom: 7 }}
      />
      <View style={styles.berthContainer}>
        <View style={styles.seat}>
          {UPPER_BERTH.map((item, i) =>
            item.visible ? (
              <Seat index={i} text={item.text} key={i} />
            ) : (
              <View style={{ marginHorizontal: 10 }} key={i} />
            ),
          )}
        </View>
      </View>
    </View>
  );
};

export default UpperBerth;
