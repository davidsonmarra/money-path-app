import React from 'react';
import Svg, { Path } from 'react-native-svg';

interface Props {
  size?: number;
  color?: string;
}

const HealthIcon = ({ size = 48, color = '#FFF' }: Props) => (
  <Svg
    width={size}
    height={size}
    fill={color}
    viewBox="0 -960 960 960"
    testID="icon-health"
  >
    <Path d="M320-120v-200H120v-320h200v-200h320v200h200v320H640v200zm80-80h160v-200h200v-160H560v-200H400v200H200v160h200zm80-280" />
  </Svg>
);

export default HealthIcon;
