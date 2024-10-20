import React from 'react';
import {Text as RNText, TextProps} from 'react-native';
import getStyles from 'src/components/text/styles';

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

const textStyle = {
  [TextType.title]: getStyles().title,
  [TextType.text]: getStyles().text,
  [TextType.textBold]: getStyles().textBold,
  [TextType.buttonPrimary]: getStyles().buttonPrimary,
  [TextType.buttonSecondary]: getStyles().buttonSecondary,
};

const Text = ({children, type, style, ...rest}: Props) => {
  return (
    <RNText style={[textStyle[type], style]} {...rest}>
      {children}
    </RNText>
  );
};

export default Text;
