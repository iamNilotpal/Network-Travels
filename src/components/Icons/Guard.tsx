import { Svg, Path } from 'react-native-svg';
import React from 'react';
import { IconProps } from '../../types/icons';

const Guard: React.FC<IconProps> = ({
  width = 14,
  height = 18,
  fill = 'white',
}) => {
  return (
    <Svg width={width} height={height} viewBox="0 0 14 18" fill="none">
      <Path
        d="M7 0.75L13.1627 2.1195C13.5055 2.196 13.75 2.49975 13.75 2.8515V10.3417C13.75 11.8462 12.9977 13.2517 11.746 14.0858L7 17.25L2.254 14.0858C1.0015 13.251 0.25 11.8463 0.25 10.3425V2.8515C0.25 2.49975 0.4945 2.196 0.83725 2.1195L7 0.75ZM10.339 6.1665L6.6265 9.87825L4.5055 7.75725L3.445 8.81775L6.62725 12L11.4003 7.227L10.339 6.1665Z"
        fill={fill}
      />
    </Svg>
  );
};

export default Guard;
