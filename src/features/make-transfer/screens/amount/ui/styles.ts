import { StyleSheet } from 'react-native';
import { useTheme } from 'src/hooks/useTheme';

const useStyles = () => {
  const { colors } = useTheme().theme;

  return StyleSheet.create({
    container: {
      flex: 1,
      paddingHorizontal: 24,
      paddingVertical: 16,
      backgroundColor: colors.background,
      justifyContent: 'space-between',
    },
    amountContainer: {
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: colors.background,
    },
    walletsContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
    },
    dropdownContainer: {
      flex: 1,
    },
    dropdownLabel: {
      marginBottom: 8,
      color: colors.text,
    },
    arrowContainer: {
      paddingHorizontal: 16,
      justifyContent: 'center',
      alignItems: 'center',
    },
  });
};

export default useStyles;
