import { StyleSheet } from 'react-native';
import { useTheme } from 'src/hooks/useTheme';

interface Props {
  disabled: boolean;
  selectedItemIconBackground: string;
}

const useStyles = ({ disabled, selectedItemIconBackground }: Props) => {
  const { colors } = useTheme().theme;

  return StyleSheet.create({
    container: {
      borderRadius: 8,
      borderWidth: 1,
      backgroundColor: disabled ? colors.inputDisabled : colors.background,
      borderColor: colors.divider,
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      padding: 12,
      minHeight: 48,
      gap: 16,
    },
    text: {
      color: colors.text,
      flex: 1,
    },
    placeholderText: {
      color: colors.placeholder,
    },
    icon: {
      backgroundColor: selectedItemIconBackground,
      width: 48,
      height: 48,
      borderRadius: 50,
      alignItems: 'center',
      justifyContent: 'center',
    },
    itemsContainer: {
      paddingHorizontal: 16,
    },
    item: {
      paddingVertical: 16,
      paddingHorizontal: 16,
      borderRadius: 8,
      marginBottom: 8,
      backgroundColor: colors.background,
      borderWidth: 1,
      borderColor: colors.divider,
      flexDirection: 'row',
      alignItems: 'center',
    },
    selectedItem: {
      backgroundColor: colors.successLight,
      borderColor: colors.success,
    },
    itemText: {
      color: colors.text,
      flex: 1,
    },
    itemIcon: {
      marginRight: 8,
      width: 32,
      height: 32,
      borderRadius: 50,
      alignItems: 'center',
      justifyContent: 'center',
    },
    selectedItemText: {
      color: colors.success,
    },
  });
};

export default useStyles;
