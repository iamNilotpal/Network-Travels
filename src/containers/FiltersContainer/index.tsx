import { View } from 'react-native';
import React, { useState } from 'react';

import { FILTER_DATA } from '../../constants/data';
import FilterScreen from '../../screens/Filter';
import OtherHeader from '../../components/Header/OtherHeader';
import ArrowLeft from '../../components/Icons/ArrowLeft';
import FilterBottomNav from '../../components/BottomNav/FilterBottomNav';

const FiltersContainer = () => {
  const [filters, setFilters] = useState([]);
  const Departure_Data = FILTER_DATA.departure;
  const Bus_Types = FILTER_DATA.busTypes;
  const Arrival_Data = FILTER_DATA.arrival;

  const handleFilter = (item: any) => {
    console.log({ item });
  };

  return (
    <>
      <OtherHeader text="Filter & sort by">
        <ArrowLeft />
      </OtherHeader>
      <View>
        <FilterScreen data={Departure_Data} onFilter={handleFilter} />
        <FilterScreen data={Bus_Types} onFilter={handleFilter} />
        <FilterScreen data={Arrival_Data} onFilter={handleFilter} />
      </View>
      <FilterBottomNav />
    </>
  );
};

export default FiltersContainer;
