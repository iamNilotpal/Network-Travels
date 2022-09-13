import React from 'react';
import { Svg, Path } from 'react-native-svg';
import { IconProps } from '../../types/icons';

const X: React.FC<IconProps> = ({ width = 14, height = 14 }) => {
  return (
    <Svg width={width} height={height} viewBox="0 0 14 14" fill="none">
      <Path
        d="M7.00023 5.58599L11.9502 0.635986L13.3642 2.04999L8.41423 6.99999L13.3642 11.95L11.9502 13.364L7.00023 8.41399L2.05023 13.364L0.63623 11.95L5.58623 6.99999L0.63623 2.04999L2.05023 0.635986L7.00023 5.58599Z"
        fill="black"
      />
    </Svg>
  );
};

export default X;