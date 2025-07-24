import React from 'react';
import Svg, { Path } from 'react-native-svg';

interface Props {
  size?: number;
  color?: string;
}

const ChevronDownIcon = ({ size = 24, color = '#000' }: Props) => (
  <Svg
    width={size}
    height={size}
    fill={color}
    viewBox="0 -960 960 960"
    testID="icon-chevron-down"
  >
    <Path d="M480-345 240-585l56-56 184 184 184-184 56 56-240 240z" />
  </Svg>
);

export default ChevronDownIcon;
