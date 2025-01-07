import React from 'react';
import Svg, {Path} from 'react-native-svg';

interface Props {
  size?: number;
  color?: string;
}

const ChevronRight = ({size = 48, color = '#FFF'}: Props) => (
  <Svg
    width={size}
    height={size}
    fill={color}
    viewBox="0 -960 960 960"
    testID="icon-chevron-right">
    <Path d="m321-80-71-71 329-329-329-329 71-71 400 400z" />
  </Svg>
);

export default ChevronRight;
