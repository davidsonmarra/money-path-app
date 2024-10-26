import React, {ReactNode} from 'react';
import {
  ActivityIndicator,
  TouchableOpacity,
  TouchableOpacityProps,
  View,
} from 'react-native';
import Text, {TextType} from 'src/components/text';
import useStyles from 'src/components/button/styles';
import {useTheme} from 'src/hooks/theme';

export enum ButtonType {
  primary = 'primary',
  secondary = 'secondary',
}

export interface Props extends TouchableOpacityProps {
  text: string;
  leftIcon?: ReactNode;
  type?: ButtonType;
  isLoading?: boolean;
  isDisabled?: boolean;
}

const buttonProps = (isDisabled: boolean) => ({
  [ButtonType.primary]: {
    buttonStyle: useStyles({isDisabled}).primary,
    textType: TextType.buttonPrimary,
  },
  [ButtonType.secondary]: {
    buttonStyle: useStyles({isDisabled}).secondary,
    textType: TextType.buttonSecondary,
  },
});

const Button = ({
  text,
  type = ButtonType.primary,
  isLoading = false,
  isDisabled = false,
  leftIcon,
  style,
  ...rest
}: Props) => {
  const {colors} = useTheme().theme;

  return (
    <TouchableOpacity
      disabled={isDisabled || isLoading}
      style={[
        useStyles({isDisabled}).container,
        buttonProps(isDisabled)[type].buttonStyle,
        style,
      ]}
      {...rest}>
      <View>{leftIcon}</View>
      {isLoading ? (
        <ActivityIndicator size={38} color={colors.buttonText} />
      ) : (
        <Text type={buttonProps(isDisabled)[type].textType}>{text}</Text>
      )}
      <View />
    </TouchableOpacity>
  );
};

export default Button;
