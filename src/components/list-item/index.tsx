import React from 'react';
import {TouchableOpacity, TouchableOpacityProps, View} from 'react-native';
import {IconType} from 'src/assets/icons/types';
import renderIcon from 'src/assets/icons/utils';
import {Text, TextType} from 'src/components';
import useStyles from 'src/components/list-item/styles';
import {useTheme} from 'src/hooks/useTheme';

export interface Props extends TouchableOpacityProps {
  text: string;
  icon: IconType;
  backgroundColor?: string;
}

const ListItem = ({text, icon, backgroundColor, ...rest}: Props) => {
  const styles = useStyles({backgroundColor});
  const {colors} = useTheme().theme;

  return (
    <TouchableOpacity style={styles.container} {...rest}>
      <View style={styles.icon}>
        {renderIcon(icon)({
          color: colors.primary,
          size: 32,
        })}
      </View>
      <Text type={TextType.text}>{text}</Text>
    </TouchableOpacity>
  );
};

export default ListItem;
