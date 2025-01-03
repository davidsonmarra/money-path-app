import React from 'react';
import Svg, {Path} from 'react-native-svg';

interface Props {
  size?: number;
  color?: string;
}

const BankIcon = ({size = 24, color = '#FFF'}: Props) => (
  <Svg
    width={size}
    height={size}
    fill={color}
    viewBox="0 -960 960 960"
    testID="icon-bank">
    <Path d="M200-280v-280h80v280zm240 0v-280h80v280zM80-120v-80h800v80zm600-160v-280h80v280zM80-640v-80l400-200 400 200v80zm178-80h444zm0 0h444L480-830z" />
  </Svg>
);

export default BankIcon;
