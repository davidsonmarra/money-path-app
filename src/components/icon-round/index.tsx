import React from 'react';
import { View } from 'react-native';
import { IconType } from 'src/assets/icons/types';
import renderIcon from 'src/assets/icons/utils';
import useStyles from 'src/components/icon-round/styles';
import { useTheme } from 'src/hooks/useTheme';

export interface Props {
  icon: IconType;
  backgroundColor?: string;
  size?: number;
  color?: string;
  roundSize?: number;
}

const IconRound = ({
  icon,
  backgroundColor,
  size = 32,
  color,
  roundSize,
}: Props) => {
  const { colors } = useTheme().theme;
  const styles = useStyles({ roundSize });

  return (
    <View style={[styles.container, { backgroundColor }]}>
      {renderIcon(icon)({
        color: color || colors.primary,
        size,
      })}
    </View>
  );
};

export default IconRound;
