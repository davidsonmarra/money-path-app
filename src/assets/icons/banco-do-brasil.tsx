import React from 'react';
import Svg, {G, Path} from 'react-native-svg';

interface Props {
  size?: number;
  color?: string;
}

const BancoDoBrasilIcon = ({size = 24}: Props) => (
  <Svg
    id="svg10"
    width={size}
    height={size}
    viewBox="0 0 192.756 192.756"
    testID="icon-bancoDoBrasil">
    <G id="g8" fill="#33348e" fillRule="evenodd" clipRule="evenodd">
      <Path
        id="path4"
        d="m96.396 16.925-78.85 52.85 32.819 21.311L89.577 64.66 74.023 54.443l21.305-14.274 46.231 30.679-75.845 50.918 16.405 10.865 94.379-62.848-.213-.213zm78.631.022-32.808 21.731 16.404 11.078 16.404-11.078zM17.005 175.832l32.809-21.73-16.404-11.079-16.405 11.079z"
      />
      <Path
        id="path6"
        d="m96.36 175.787 78.849-52.851-32.818-21.311-39.211 26.426 15.552 10.217-21.304 14.275-46.231-30.68 75.844-50.917-16.404-10.866-94.38 62.848.213.215z"
      />
    </G>
  </Svg>
);

export default BancoDoBrasilIcon;
