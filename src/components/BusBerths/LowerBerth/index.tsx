import React from 'react';
import { Pressable, View } from 'react-native';

import { LOWER_BERTH } from '../../../constants/data';
import BodyRegular from '../../common/Text/Body/BodyRegular';
import SmallSeat from '../../Icons/Seat/Small';
import Steering from '../../Icons/Steering';
import styles from './styles';

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
              <Pressable style={{ marginBottom: 5 }} key={i}>
                <SmallSeat>
                  <BodyRegular
                    text={item.text}
                    textStyles={{ textAlign: 'center' }}
                  />
                </SmallSeat>
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

export default LowerBerth;
