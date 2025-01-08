import React from 'react';
import {Text as RNText, TextProps} from 'react-native';
import useStyles from 'src/components/text/styles';

export enum TextType {
  textSmallRegular = 'textSmallRegular',
  textSmallMedium = 'textSmallMedium',
  textSmallSemiBold = 'textSmallBold',
  textSmallHyperlink = 'textSmallHyperlink',
  textSmallOverline = 'textSmallOverline',
  textMediumRegular = 'textMediumRegular',
  textMediumMedium = 'textMediumMedium',
  textMediumSemiBold = 'textMediumBold',
  textMediumHyperlink = 'textMediumHyperlink',
  textMediumOverline = 'textMediumOverline',
  textLargeRegular = 'textLargeRegular',
  textLargeMedium = 'textLargeMedium',
  textLargeSemiBold = 'textLargeBold',
  textLargeHyperlink = 'textLargeHyperlink',
  textLargeOverline = 'textLargeOverline',
  headingXSmall = 'headingXSmall',
  headingSmall = 'headingSmall',
  headingMedium = 'headingMedium',
  headingLarge = 'headingLarge',
}

interface Props extends TextProps {
  type: TextType;
}

const Text = ({children, type, style, ...rest}: Props) => {
  const textStyle = {
    [TextType.textSmallRegular]: [useStyles().small, useStyles().regular],
    [TextType.textSmallMedium]: [useStyles().small, useStyles().mediumW],
    [TextType.textSmallSemiBold]: [useStyles().small, useStyles().semiBold],
    [TextType.textSmallHyperlink]: [useStyles().small, useStyles().hyperlink],
    [TextType.textSmallOverline]: [useStyles().small, useStyles().overline],
    [TextType.textMediumRegular]: [useStyles().medium, useStyles().regular],
    [TextType.textMediumMedium]: [useStyles().medium, useStyles().mediumW],
    [TextType.textMediumSemiBold]: [useStyles().medium, useStyles().semiBold],
    [TextType.textMediumHyperlink]: [useStyles().medium, useStyles().hyperlink],
    [TextType.textMediumOverline]: [useStyles().medium, useStyles().overline],
    [TextType.textLargeRegular]: [useStyles().large, useStyles().regular],
    [TextType.textLargeMedium]: [useStyles().large, useStyles().mediumW],
    [TextType.textLargeSemiBold]: [useStyles().large, useStyles().semiBold],
    [TextType.textLargeHyperlink]: [useStyles().large, useStyles().hyperlink],
    [TextType.textLargeOverline]: [useStyles().large, useStyles().overline],
    [TextType.headingXSmall]: useStyles().headingXSmall,
    [TextType.headingSmall]: useStyles().headingSmall,
    [TextType.headingMedium]: useStyles().headingMedium,
    [TextType.headingLarge]: useStyles().headingLarge,
  };

  return (
    <RNText style={[textStyle[type], style]} {...rest}>
      {children}
    </RNText>
  );
};

export default Text;
