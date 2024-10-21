import React from 'react';
import {View} from 'react-native';

interface Props {
  width?: number;
  height?: number;
}

const Spacer = ({width = 0, height = 0}: Props) => {
  return <View style={{width, height}} testID="spacer" />;
};

export default Spacer;
