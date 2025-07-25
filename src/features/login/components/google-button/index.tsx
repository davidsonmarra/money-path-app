import React from 'react';
import { TouchableOpacityProps } from 'react-native';
import Button, { ButtonType } from 'src/components/button';
import { GoogleIcon } from 'src/assets/icons';
import getStyles from 'src/features/login/components/google-button/styles';

type Props = TouchableOpacityProps;

const GoogleButton = ({ onPress }: Props) => {
  return (
    <Button
      onPress={onPress}
      leftIcon={<GoogleIcon size={28} />}
      text="Entrar com Google"
      style={getStyles().container}
      type={ButtonType.secondary}
      testID="btn-google"
    />
  );
};

export default GoogleButton;
