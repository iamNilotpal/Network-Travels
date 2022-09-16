import React from 'react';
import { View } from 'react-native';
import { COLORS } from '../../constants';
import BodyRegular from '../common/Text/Body/BodyRegular';
import styles from './styles';

const PROGRESS_STEPS = [
  { number: 1, label: 'Select passenger' },
  { number: 2, label: 'Refund amount' },
  { number: 3, label: 'Success' },
];

type ProgressProps = {
  activeStep: number;
};

const Divider = () => (
  <View
    style={{
      flexDirection: 'row',
      justifyContent: 'space-between',
      marginTop: -15,
    }}>
    {new Array(7).fill('').map((_, i) => (
      <View
        style={{
          width: 3,
          height: 3,
          backgroundColor: COLORS.primary,
          borderRadius: 10,
          marginRight: 5,
        }}
        key={i}
      />
    ))}
  </View>
);

const Progress: React.FC<ProgressProps> = ({ activeStep }) => {
  return (
    <View style={styles.container}>
      {PROGRESS_STEPS.map((item, i) => (
        <>
          <View style={[styles.progress]}>
            <View
              style={[
                styles.progressContainer,
                {
                  backgroundColor:
                    activeStep >= i ? COLORS.primary : 'transparent',
                  borderWidth: activeStep !== i ? 1 : 0,
                  borderColor: COLORS.primary,
                },
              ]}>
              <BodyRegular text={item.number.toString()} />
            </View>
            <BodyRegular
              text={item.label}
              textStyles={{ fontSize: 10, marginTop: 6 }}
            />
          </View>
          {i == 1 ? <Divider /> : null}
          {i == 0 ? <Divider /> : null}
        </>
      ))}
    </View>
  );
};

export default Progress;
