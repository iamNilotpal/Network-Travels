import { Svg, Line, Path } from 'react-native-svg';
import React from 'react';
import { IconProps } from '../../types/icons';

const Line1: React.FC<IconProps> = () => {
  return (
    <Svg width="375" height="11" viewBox="0 0 375 11" fill="none">
      <Line x1="-32.9972" y1="9.50001" x2="144.469" y2="10.5" stroke="black" />
      <Line x1="176.648" y1="10.5" x2="518" y2="10.5" stroke="black" />
      <Path
        d="M177.223 10.5C173.2 10.5 171.753 8.38642 171.176 7.17317C170.598 5.95991 169.752 4.85752 168.684 3.92893C167.617 3.00035 166.35 2.26375 164.956 1.7612C163.561 1.25866 162.067 1 160.557 1C159.048 1 157.554 1.25866 156.159 1.7612C154.765 2.26375 153.498 3.00035 152.43 3.92893C151.363 4.85752 150.517 5.95991 149.939 7.17317C149.361 8.38642 147.915 10.5 143.892 10.5"
        stroke="black"
      />
    </Svg>
  );
};

export default Line1;
