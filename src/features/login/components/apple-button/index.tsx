import React from 'react';
import {TouchableOpacityProps} from 'react-native';
import {Button} from 'src/components';
import {AppleIcon} from 'src/assets/icons';
import getStyles from 'src/features/login/components/apple-button/styles';

type Props = TouchableOpacityProps;

const AppleButton = ({onPress}: Props) => {
  return (
    <Button
      onPress={onPress}
      leftIcon={<AppleIcon size={28} />}
      text="Entrar com conta Apple"
      style={getStyles().container}
    />
  );
};

export default AppleButton;
