import { Svg, Rect } from 'react-native-svg';
import React from 'react';

const WalletCard = () => {
  return (
    <Svg width={277} height={144} viewBox="0 0 277 144" fill="none">
      <Rect
        x="0.5"
        y="0.5"
        width={276}
        height={143}
        rx="18.5"
        fill="#FAD008"
        fillOpacity="0.15"
        stroke="#FAD008"
      />
      <Rect
        x="0.5"
        y="7.82202"
        width={276}
        height="135.678"
        rx="18.5"
        fill="#FAD008"
        fillOpacity="0.15"
        stroke="#FAD008"
      />
      <Rect
        x="0.5"
        y="13.9236"
        width={276}
        height="129.576"
        rx="18.5"
        fill="#FAD008"
        fillOpacity="0.15"
        stroke="#FAD008"
      />
      <Rect
        x="0.5"
        y="21.2458"
        width={276}
        height="122.254"
        rx="18.5"
        fill="#FAD008"
        stroke="#FAD008"
      />
    </Svg>
  );
};

export default WalletCard;
