import React, { useEffect, useState } from 'react';

import { BusType } from '../../components/common/Cards/BusCountCard';
import { BUSES } from '../../constants';
import BusTypes from '../../screens/BusTypes';
import { BusesProps } from '../../types/buses';

const BusesContainer = () => {
  const [currentBusType, setCurrentBusType] = useState<BusType>('All');
  const [busesToShow, setBusesToShow] = useState<BusesProps>(BUSES);

  useEffect(() => {
    if (currentBusType === 'All') return setBusesToShow(BUSES);
    if (currentBusType === 'AC') {
      const filteredBuses = BUSES.filter(bus => Boolean(bus.ac));
      return setBusesToShow(filteredBuses);
    }
    if (currentBusType === 'Morning') {
      const filteredBuses = BUSES.filter(bus => Boolean(bus.morning));
      return setBusesToShow(filteredBuses);
    }
  }, [currentBusType]);

  const handleBusTypeChange = (type: BusType) => {
    setCurrentBusType(type);
  };

  return (
    <BusTypes
      currentBusType={currentBusType}
      handleBusTypeChange={handleBusTypeChange}
      data={busesToShow}
    />
  );
};

export default BusesContainer;
