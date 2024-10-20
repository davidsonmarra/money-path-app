import React from 'react';
import {
  ActivityIndicator,
  TouchableOpacity,
  TouchableOpacityProps,
} from 'react-native';
import {colors} from 'src/configs/theme';
import Text, {TextType} from 'src/components/text';
import getStyles from 'src/components/button/styles';

export enum ButtonType {
  primary = 'primary',
  secondary = 'secondary',
}

export interface Props extends TouchableOpacityProps {
  text: string;
  type?: ButtonType;
  isLoading?: boolean;
  isDisabled?: boolean;
}

const buttonProps = (isDisabled: boolean) => ({
  [ButtonType.primary]: {
    buttonStyle: getStyles({isDisabled}).primary,
    textType: TextType.buttonPrimary,
  },
  [ButtonType.secondary]: {
    buttonStyle: getStyles({isDisabled}).secondary,
    textType: TextType.buttonSecondary,
  },
});

const Button = ({
  text,
  type = ButtonType.primary,
  isLoading = false,
  isDisabled = false,
  ...rest
}: Props) => {
  return (
    <TouchableOpacity
      disabled={isDisabled || isLoading}
      style={[
        getStyles({isDisabled}).container,
        buttonProps(isDisabled)[type].buttonStyle,
        rest.style,
      ]}
      {...rest}>
      {isLoading ? (
        <ActivityIndicator size={38} color={colors.buttonText} />
      ) : (
        <Text type={buttonProps(isDisabled)[type].textType}>{text}</Text>
      )}
    </TouchableOpacity>
  );
};

export default Button;
