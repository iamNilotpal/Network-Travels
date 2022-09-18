import React from 'react';
import { FlatList, ScrollView, View } from 'react-native';
import BusTypesBottomNav from '../../components/BottomNav/BusTypesBottomNav';
import BusCard from '../../components/common/Cards/BusCard';
import BusCountCard, {
  BusType,
} from '../../components/common/Cards/BusCountCard';
import BustTypesHeader from '../../components/Header/BusTypesHeader';
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
      <BustTypesHeader />
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
      <FlatList
        data={data}
        keyExtractor={item => item.id as any}
        renderItem={({ item }) => <BusCard bus={item} key={item.id} />}
        contentContainerStyle={{ paddingBottom: 80, paddingTop: 8 }}
        style={styles.buses}
      />
      <BusTypesBottomNav />
    </>
  );
};

export default BusTypes;
