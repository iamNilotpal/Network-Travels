import React from 'react';
import { View, Pressable } from 'react-native';
import { UPPER_BERTH } from '../../../constants/data';
import BodyRegular from '../../common/Text/Body/BodyRegular';
import BigSeat from '../../Icons/Seat/Big';
import styles from './styles';

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
              <Pressable style={{ marginBottom: 5 }} key={i}>
                <BigSeat>
                  <BodyRegular
                    text={item.text}
                    textStyles={{ textAlign: 'center' }}
                  />
                </BigSeat>
              </Pressable>
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
