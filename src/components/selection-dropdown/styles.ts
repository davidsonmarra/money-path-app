import { StyleSheet } from 'react-native';
import { useTheme } from 'src/hooks/useTheme';

interface Props {
  disabled: boolean;
}

const useStyles = ({ disabled }: Props) => {
  const { colors } = useTheme().theme;

  return StyleSheet.create({
    container: {
      width: '100%',
      borderRadius: 8,
      borderWidth: 1,
      backgroundColor: disabled ? colors.inputDisabled : colors.background,
      borderColor: colors.divider,
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      paddingHorizontal: 16,
      paddingVertical: 12,
      minHeight: 48,
    },
    text: {
      color: colors.text,
      flex: 1,
    },
    placeholderText: {
      color: colors.placeholder,
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
    },
    selectedItem: {
      backgroundColor: colors.successLight,
      borderColor: colors.success,
    },
    itemText: {
      color: colors.text,
    },
    selectedItemText: {
      color: colors.success,
    },
  });
};

export default useStyles;
