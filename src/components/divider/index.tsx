import React from 'react';
import {View} from 'react-native';
import useStyles from './styles';

export enum DividerType {
  horizontal = 'horizontal',
  vertical = 'vertical',
}

export enum DividerSize {
  small = 'small',
  medium = 'medium',
  large = 'large',
}

export interface Props {
  type?: DividerType;
  size?: DividerSize;
}

const getSize = () => ({
  [DividerSize.small]: 1,
  [DividerSize.medium]: 2.5,
  [DividerSize.large]: 5,
});

const Divider = ({
  type = DividerType.horizontal,
  size = DividerSize.medium,
}: Props) => {
  const dividerSize = getSize()[size];
  const styles = useStyles({size: dividerSize});

  const getDividerStyle = () => ({
    [DividerType.horizontal]: styles.horizontal,
    [DividerType.vertical]: styles.vertical,
  });

  return <View style={getDividerStyle()[type]} />;
};

export default Divider;
