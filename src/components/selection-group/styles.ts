import { StyleSheet } from 'react-native';
import { useTheme } from 'src/hooks/useTheme';

const useStyles = () => {
  const { colors } = useTheme().theme;

  return StyleSheet.create({
    container: {
      flexDirection: 'column',
      width: '100%',
      gap: 8,
    },
    item: {
      paddingVertical: 12,
      paddingHorizontal: 16,
      borderRadius: 8,
      borderWidth: 1,
      minHeight: 44,
      justifyContent: 'center',
      alignItems: 'flex-start',
      width: '100%',
    },
    itemContent: {
      flexDirection: 'row',
      alignItems: 'center',
      gap: 12,
    },
    selectedItem: {
      backgroundColor: colors.successLight,
      borderColor: colors.success,
    },
    unselectedItem: {
      backgroundColor: 'transparent',
      borderColor: 'transparent',
    },
    itemText: {
      textAlign: 'left',
      color: colors.text,
    },
  });
};

export default useStyles;
