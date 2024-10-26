import {StyleSheet} from 'react-native';
import {useTheme} from 'src/hooks/theme';

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
  });
};

export default useStyles;
