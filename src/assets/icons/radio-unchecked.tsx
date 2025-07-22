import React from 'react';
import Svg, { Path } from 'react-native-svg';

interface Props {
  size?: number;
  color?: string;
}

const RadioUncheckedIcon = ({ size = 24, color = '#00000055' }: Props) => (
  <Svg
    width={size}
    height={size}
    fill={color}
    viewBox="0 -960 960 960"
    testID="icon-radio-unchecked"
  >
    <Path d="M480-80q-83 0-156-31.5T197-197t-85.5-127T80-480t31.5-156T197-763t127-85.5T480-880t156 31.5T763-763t85.5 127T880-480t-31.5 156T763-197t-127 85.5T480-80m0-80q134 0 227-93t93-227-93-227-227-93-227 93-93 227 93 227 227 93" />
  </Svg>
);

export default RadioUncheckedIcon;
