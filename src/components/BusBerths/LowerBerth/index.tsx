import React, { useEffect, useRef, useState } from 'react';
import { View } from 'react-native';
import { COLORS } from '../../../constants';

import { LOWER_BERTH } from '../../../constants/data';
import BodyRegular from '../../common/Text/Body/BodyRegular';
import Steering from '../../Icons/Steering';
import LowerSeat from '../../Seats/LowerSeat';
import styles from './styles';

type SeatProps = {
  text: string;
  index: number;
  onSeatSelect: (seat: number) => void;
};

const Seat: React.FC<SeatProps> = ({ index, text, onSeatSelect }) => {
  const initialRenderRef = useRef(true);
  const [selected, setSelected] = useState(false);

  useEffect(() => {
    if (!initialRenderRef.current)
      selected ? onSeatSelect(1) : onSeatSelect(-1);
  }, [selected]);

  return (
    <LowerSeat
      selected={selected}
      onPress={() => {
        initialRenderRef.current = false;
        setSelected(!selected);
      }}
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

type LowerBerthProps = {
  onSeatSelect: (seat: any) => void;
};

const LowerBerth: React.FC<LowerBerthProps> = ({ onSeatSelect }) => {
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
              <Seat
                text={item.text}
                index={i}
                key={i}
                onSeatSelect={onSeatSelect}
              />
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
