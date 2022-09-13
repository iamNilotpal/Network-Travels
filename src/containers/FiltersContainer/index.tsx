import { View } from 'react-native';
import React from 'react';

import { FILTER_DATA } from '../../constants/data';
import FilterScreen from '../../screens/Filter';
import OtherHeader from '../../components/Header/OtherHeader';
import ArrowLeft from '../../components/Icons/ArrowLeft';
import FilterBottomNav from '../../components/BottomNav/FilterBottomNav';

const FiltersContainer = () => {
  const Departure_Data = FILTER_DATA.departure;
  const Bus_Types = FILTER_DATA.busTypes;
  const Arrival_Data = FILTER_DATA.arrival;

  return (
    <>
      <OtherHeader text="Filter & sort by">
        <ArrowLeft />
      </OtherHeader>
      <View>
        <FilterScreen data={Departure_Data} />
        <FilterScreen data={Bus_Types} />
        <FilterScreen data={Arrival_Data} />
      </View>
      <FilterBottomNav />
    </>
  );
};

export default FiltersContainer;
