import React from 'react';
import { Svg, Line, Circle } from 'react-native-svg';

const Track = () => {
  return (
    <Svg width="18" height="18" viewBox="0 0 18 18" fill="none">
      <Line
        x1="9.125"
        y1="2.375"
        x2="9.125"
        y2="1"
        stroke="white"
        stroke-width="2"
        stroke-linecap="round"
      />
      <Line
        x1="9.125"
        y1="17"
        x2="9.125"
        y2="15.625"
        stroke="white"
        stroke-width="2"
        stroke-linecap="round"
      />
      <Line
        x1="15.625"
        y1="9.125"
        x2="17"
        y2="9.125"
        stroke="white"
        stroke-width="2"
        stroke-linecap="round"
      />
      <Line
        x1="1"
        y1="9.125"
        x2="2.375"
        y2="9.125"
        stroke="white"
        stroke-width="2"
        stroke-linecap="round"
      />
      <Circle cx="9" cy="9" r="2.25" fill="white" />
      <Circle cx="9" cy="9" r="5.75" stroke="white" stroke-width="2" />
    </Svg>
  );
};

export default Track;
