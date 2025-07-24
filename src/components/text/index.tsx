import React from 'react';
import { Text as RNText, TextProps } from 'react-native';
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

const Text = ({ children, type, style, ...rest }: Props) => {
  const styles = useStyles();

  const textStyle = {
    [TextType.textSmallRegular]: [styles.small, styles.regular],
    [TextType.textSmallMedium]: [styles.small, styles.mediumW],
    [TextType.textSmallSemiBold]: [styles.small, styles.semiBold],
    [TextType.textSmallHyperlink]: [styles.small, styles.hyperlink],
    [TextType.textSmallOverline]: [styles.small, styles.overline],
    [TextType.textMediumRegular]: [styles.medium, styles.regular],
    [TextType.textMediumMedium]: [styles.medium, styles.mediumW],
    [TextType.textMediumSemiBold]: [styles.medium, styles.semiBold],
    [TextType.textMediumHyperlink]: [styles.medium, styles.hyperlink],
    [TextType.textMediumOverline]: [styles.medium, styles.overline],
    [TextType.textLargeRegular]: [styles.large, styles.regular],
    [TextType.textLargeMedium]: [styles.large, styles.mediumW],
    [TextType.textLargeSemiBold]: [styles.large, styles.semiBold],
    [TextType.textLargeHyperlink]: [styles.large, styles.hyperlink],
    [TextType.textLargeOverline]: [styles.large, styles.overline],
    [TextType.headingXSmall]: styles.headingXSmall,
    [TextType.headingSmall]: styles.headingSmall,
    [TextType.headingMedium]: styles.headingMedium,
    [TextType.headingLarge]: styles.headingLarge,
  };

  return (
    <RNText style={[textStyle[type], style]} {...rest}>
      {children}
    </RNText>
  );
};

export default Text;
