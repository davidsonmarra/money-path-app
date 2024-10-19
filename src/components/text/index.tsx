import React from 'react';
import {Text as RNText, TextProps} from 'react-native';
import getStyles from 'src/components/text/styles';

export enum TextType {
  title = 'title',
  text = 'text',
  textBold = 'textBold',
}

interface Props extends TextProps {
  type: TextType;
}

const textStyle = {
  [TextType.title]: getStyles().title,
  [TextType.text]: getStyles().text,
  [TextType.textBold]: getStyles().textBold,
};

const Text = ({children, type, style, ...rest}: Props) => {
  return (
    <RNText style={[textStyle[type], style]} {...rest}>
      {children}
    </RNText>
  );
};

export default Text;
