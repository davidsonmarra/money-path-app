import React from 'react';
import Svg, { Path } from 'react-native-svg';

interface Props {
  size?: number;
  color?: string;
}

const HouseIcon = ({ size = 48, color = '#FFF' }: Props) => (
  <Svg
    width={size}
    height={size}
    fill={color}
    viewBox="0 -960 960 960"
    testID="icon-house"
  >
    <Path d="M240-200h120v-240h240v240h120v-360L480-740 240-560zm-80 80v-480l320-240 320 240v480H520v-240h-80v240zm320-350" />
  </Svg>
);

export default HouseIcon;
