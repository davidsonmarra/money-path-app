import React from 'react';
import {Text as RNText, TextProps} from 'react-native';
import useStyles from 'src/components/text/styles';

export enum TextType {
  title = 'title',
  text = 'text',
  textBold = 'textBold',
  buttonPrimary = 'buttonPrimary',
  buttonSecondary = 'buttonSecondary',
}

interface Props extends TextProps {
  type: TextType;
}

const Text = ({children, type, style, ...rest}: Props) => {
  const textStyle = {
    [TextType.title]: useStyles().title,
    [TextType.text]: useStyles().text,
    [TextType.textBold]: useStyles().textBold,
    [TextType.buttonPrimary]: useStyles().buttonPrimary,
    [TextType.buttonSecondary]: useStyles().buttonSecondary,
  };

  return (
    <RNText style={[textStyle[type], style]} {...rest}>
      {children}
    </RNText>
  );
};

export default Text;
