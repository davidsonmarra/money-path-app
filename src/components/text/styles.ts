import {StyleSheet} from 'react-native';
import {useTheme} from 'src/hooks/useTheme';

const useStyles = () => {
  const {colors} = useTheme().theme;

  return StyleSheet.create({
    small: {
      fontSize: 12,
      lineHeight: 16,
      color: colors.text,
    },
    medium: {
      fontSize: 14,
      lineHeight: 20,
      color: colors.text,
    },
    large: {
      fontSize: 16,
      lineHeight: 24,
      color: colors.text,
    },
    regular: {
      fontWeight: 400,
    },
    mediumW: {
      fontWeight: 500,
    },
    semiBold: {
      fontWeight: 600,
    },
    hyperlink: {
      fontWeight: 600,
      textDecorationLine: 'underline',
    },
    overline: {
      fontWeight: 600,
      letterSpacing: 1,
      textTransform: 'uppercase',
    },
    textSmallRegular: {
      fontSize: 12,
      fontWeight: 400,
      lineHeight: 16,
      color: colors.text,
    },
    textSmallSemiBold: {
      fontSize: 12,
      fontWeight: 600,
      lineHeight: 16,
      color: colors.text,
    },
    textSmallHyperlink: {
      fontSize: 12,
      fontWeight: 600,
      lineHeight: 16,
      color: colors.text,
      textDecorationLine: 'underline',
    },
    textSmallOverline: {
      fontSize: 12,
      fontWeight: 400,
      lineHeight: 16,
      color: colors.text,
      textTransform: 'uppercase',
    },
    headingXSmall: {
      fontSize: 16,
      fontWeight: 600,
      lineHeight: 16,
      color: colors.text,
    },
    headingSmall: {
      fontSize: 18,
      fontWeight: 600,
      lineHeight: 20,
      color: colors.text,
    },
    headingMedium: {
      fontSize: 20,
      fontWeight: 600,
      lineHeight: 24,
      color: colors.text,
    },
    headingLarge: {
      fontSize: 24,
      fontWeight: 600,
      lineHeight: 28,
      color: colors.text,
    },
  });
};

export default useStyles;
