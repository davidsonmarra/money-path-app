import {StyleSheet} from 'react-native';
import {useTheme} from 'src/hooks/useTheme';

const useStyles = () => {
  const {colors} = useTheme().theme;

  return StyleSheet.create({
    title: {
      fontSize: 24,
      fontWeight: 'bold',
      color: colors.title,
    },
    text: {
      fontSize: 16,
      fontWeight: 'normal',
      color: colors.text,
    },
    textBold: {
      fontSize: 16,
      fontWeight: 'bold',
      color: colors.text,
    },
    buttonPrimary: {
      fontSize: 16,
      fontWeight: 'bold',
      color: colors.buttonText,
    },
    buttonSecondary: {
      fontSize: 16,
      fontWeight: 'bold',
      color: colors.secondary,
    },
    header: {
      fontSize: 20,
      fontWeight: 'bold',
      color: colors.textOnSecondary,
    },
  });
};

export default useStyles;
