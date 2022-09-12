import React from 'react';
import { Path, Svg } from 'react-native-svg';
import { IconProps } from '../../types/icons';

const Location: React.FC<IconProps> = ({ width = 14, height = 17 }) => {
  return (
    <Svg width={width} height={height} viewBox="0 0 14 17" fill="none">
      <Path
        d="M7.75 7.24994V3.49994H6.25V8.74994H10.75V7.24994H7.75ZM11.773 12.0229L7 16.7959L2.227 12.0229C1.28301 11.0789 0.64014 9.8762 0.379696 8.56683C0.119253 7.25746 0.25293 5.90026 0.763824 4.66687C1.27472 3.43347 2.13988 2.37927 3.24991 1.63757C4.35994 0.895878 5.66498 0.5 7 0.5C8.33502 0.5 9.64006 0.895878 10.7501 1.63757C11.8601 2.37927 12.7253 3.43347 13.2362 4.66687C13.7471 5.90026 13.8808 7.25746 13.6203 8.56683C13.3599 9.8762 12.717 11.0789 11.773 12.0229Z"
        fill="black"
      />
    </Svg>
  );
};

export default Location;
