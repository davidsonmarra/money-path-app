import React from 'react';
import Svg, {Path} from 'react-native-svg';

interface Props {
  size?: number;
  color?: string;
}

const BackIcon = ({size = 24, color = '#FFF'}: Props) => (
  <Svg
    width={size}
    height={size}
    fill={color}
    viewBox="0 -960 960 960"
    testID="icon-back">
    <Path d="M360-240 120-480l240-240 56 56-144 144h568v80H272l144 144z" />
  </Svg>
);

export default BackIcon;
