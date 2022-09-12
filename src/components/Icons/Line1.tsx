import { Svg, Line, Path } from 'react-native-svg';
import React from 'react';
import { IconProps } from '../../types/icons';

const Line1: React.FC<IconProps> = ({ width = 375, height = 11 }) => {
  return (
    <Svg width={width} height="11" viewBox={`0 0 ${width} 11`} fill="none">
      <Line y1="10.5" x2="50" y2="10.5" stroke="black" />
      <Line x1="78" y1="10.5" x2="375" y2="10.5" stroke="black" />
      <Path
        d="M78.5 10.5C75 10.5 73.7413 8.38642 73.2388 7.17317C72.7362 5.95991 71.9997 4.85752 71.0711 3.92893C70.1425 3.00035 69.0401 2.26375 67.8268 1.7612C66.6136 1.25866 65.3132 1 64 1C62.6868 1 61.3864 1.25866 60.1732 1.7612C58.9599 2.26375 57.8575 3.00035 56.9289 3.92893C56.0003 4.85752 55.2638 5.95991 54.7612 7.17317C54.2587 8.38642 53 10.5 49.5 10.5"
        stroke="black"
      />
    </Svg>
  );
};

export default Line1;
