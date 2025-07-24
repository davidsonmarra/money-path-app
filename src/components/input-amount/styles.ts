import { StyleSheet } from 'react-native';
import { useTheme } from 'src/hooks/useTheme';

const useStyles = () => {
  const { colors } = useTheme().theme;

  return StyleSheet.create({
    container: {
      width: '100%',
      backgroundColor: colors.secondary,
      paddingHorizontal: 24,
      paddingVertical: 16,
    },
    input: {
      width: '100%',
      color: colors.textOnSecondary,
      fontSize: 40,
      fontWeight: '700',
      textAlign: 'right',
    },
    placeholderText: {
      color: colors.textOnSecondary,
    },
  });
};

export default useStyles;
