import React from 'react';
import Svg, { Path } from 'react-native-svg';

interface Props {
  size?: number;
  color?: string;
}

const GamesIcon = ({ size = 48, color = '#FFF' }: Props) => (
  <Svg
    width={size}
    height={size}
    fill={color}
    viewBox="0 -960 960 960"
    testID="icon-games"
  >
    <Path d="M182-200q-51 0-79-35.5T82-322l42-300q9-60 53.5-99T282-760h396q60 0 104.5 39t53.5 99l42 300q7 51-21 86.5T778-200q-21 0-39-7.5T706-230l-90-90H344l-90 90q-15 15-33 22.5t-39 7.5m16-86 114-114h336l114 114q2 2 16 6 11 0 17.5-6.5T800-304l-44-308q-4-29-26-48.5T678-680H282q-30 0-52 19.5T204-612l-44 308q-2 11 4.5 17.5T182-280q2 0 16-6m482-154q17 0 28.5-11.5T720-480t-11.5-28.5T680-520t-28.5 11.5T640-480t11.5 28.5T680-440m-80-120q17 0 28.5-11.5T640-600t-11.5-28.5T600-640t-28.5 11.5T560-600t11.5 28.5T600-560M310-440h60v-70h70v-60h-70v-70h-60v70h-70v60h70zm170-40" />
  </Svg>
);

export default GamesIcon;
