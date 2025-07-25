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
      backgroundColor: colors.background,
    },
    walletsContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
    },
    walletContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      marginHorizontal: 'auto',
    },
    dropdownLabel: {
      marginBottom: 8,
      color: colors.text,
    },
    dateContainer: {
      paddingHorizontal: 24,
      paddingVertical: 16,
      alignItems: 'center',
    },
    dateButton: {
      backgroundColor: colors.secondary,
      alignItems: 'center',
      justifyContent: 'center',
      padding: 20,
      borderRadius: 8,
    },
    dayText: {
      fontSize: 32,
      color: colors.textOnSecondary,
      lineHeight: 40,
    },
    monthText: {
      fontSize: 20,
      color: colors.textOnSecondary,
    },
    hourText: {
      fontSize: 16,
      color: colors.textOnSecondary,
    },
    datePickerContainer: {
      alignItems: 'center',
      justifyContent: 'center',
      paddingVertical: 16,
      minHeight: 200,
    },
    modalButtons: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      gap: 12,
    },
    cancelButton: {
      flex: 1,
      paddingVertical: 12,
      paddingHorizontal: 16,
      backgroundColor: colors.background,
      borderRadius: 8,
      borderWidth: 1,
      borderColor: colors.divider,
      alignItems: 'center',
    },
    confirmButton: {
      flex: 1,
      paddingVertical: 12,
      paddingHorizontal: 16,
      backgroundColor: colors.primary,
      borderRadius: 8,
      alignItems: 'center',
    },
    confirmButtonText: {
      color: colors.buttonText,
    },
    confirmButtonDisabled: {
      backgroundColor: colors.disabled,
    },
  });
};

export default useStyles;
