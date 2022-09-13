import React from 'react';
import { ScrollView, View } from 'react-native';
import BusTypesBottomNav from '../../components/BottomNav/BusTypesBottomNav';
import BusCard from '../../components/common/Cards/BusCard';
import BusCountCard, {
  BusType,
} from '../../components/common/Cards/BusCountCard';
import BookingHeader from '../../components/Header/BookingHeader';
import Line1 from '../../components/Icons/Line1';
import Line2 from '../../components/Icons/Line2';
import Line3 from '../../components/Icons/Line3';
import { BusesProps } from '../../types/buses';
import styles from './styles';

const BUSES_COUNT: { type: BusType; count: number }[] = [
  { type: 'All', count: 45 },
  { type: 'AC', count: 12 },
  { type: 'Morning', count: 28 },
];

type BusTypesProps = {
  currentBusType: BusType;
  handleBusTypeChange: (type: BusType) => void;
  data: BusesProps;
};

const BusTypes: React.FC<BusTypesProps> = ({
  currentBusType,
  handleBusTypeChange,
  data,
}) => {
  const LineToDisplay =
    currentBusType === 'All' ? Line1 : currentBusType === 'AC' ? Line2 : Line3;

  return (
    <>
      <BookingHeader />
      <View style={styles.busCountContaineR}>
        {BUSES_COUNT.map(item => (
          <BusCountCard
            key={item.type}
            count={item.count}
            type={item.type}
            currentType={currentBusType}
            onPress={handleBusTypeChange}
            style={{ flex: item.type === 'Morning' ? 0.7 : 0 }}
          />
        ))}
      </View>
      <View style={{ marginTop: 13 }}>
        <LineToDisplay width={700} />
      </View>
      <ScrollView style={styles.buses} showsVerticalScrollIndicator={false}>
        {data?.map(bus => (
          <BusCard bus={bus} key={bus.id} />
        ))}
      </ScrollView>
      <BusTypesBottomNav />
    </>
  );
};

export default BusTypes;
