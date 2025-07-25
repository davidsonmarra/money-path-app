import React from 'react';
import Svg, { Path } from 'react-native-svg';

interface Props {
  size?: number;
  color?: string;
}

const ChangeIcon = ({ size = 24, color = '#FFF' }: Props) => (
  <Svg
    width={size}
    height={size}
    fill={color}
    viewBox="0 -960 960 960"
    testID="icon-change"
  >
    <Path d="m482-200 114-113-114-113-42 42 43 43q-28 1-54.5-9T381-381q-20-20-30.5-46T340-479q0-17 4.5-34t12.5-33l-44-44q-17 25-25 53t-8 57q0 38 15 75t44 66 65 43.5 74 15.5l-38 38zm165-170q17-25 25-53t8-57q0-38-14.5-75.5T622-622t-65.5-43-74.5-14l38-39-42-42-114 113 114 113 42-42-44-44q27 0 55 10.5t48 30.5 30.5 46 10.5 52q0 17-4.5 34T603-414zM480-80q-83 0-156-31.5T197-197t-85.5-127T80-480t31.5-156T197-763t127-85.5T480-880t156 31.5T763-763t85.5 127T880-480t-31.5 156T763-197t-127 85.5T480-80m0-80q134 0 227-93t93-227-93-227-227-93-227 93-93 227 93 227 227 93m0-320" />
  </Svg>
);

export default ChangeIcon;
