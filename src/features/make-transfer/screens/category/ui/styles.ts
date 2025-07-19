import { StyleSheet } from 'react-native';
import { useTheme } from 'src/hooks/useTheme';

const useStyles = () => {
  const { colors } = useTheme().theme;

  return StyleSheet.create({
    flex: {
      flex: 1,
    },
    container: {
      flex: 1,
      paddingHorizontal: 24,
      paddingVertical: 16,
      backgroundColor: colors.background,
      justifyContent: 'space-between',
    },
    loadingContainer: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
    categoriesContainer: {
      flexDirection: 'row',
      flexWrap: 'wrap',
      gap: 12,
      justifyContent: 'space-between',
      alignItems: 'center',
    },
    categoryItem: {
      padding: 12,
      borderRadius: 12,
      backgroundColor: colors.background,
      width: '30%',
      alignItems: 'center',
    },
    categoryItemDisabled: {
      opacity: 0.5,
    },
    categoryName: {
      textAlign: 'center',
    },
  });
};

export default useStyles;
