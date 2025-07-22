import { StyleSheet } from 'react-native';
import { useTheme } from 'src/hooks/useTheme';

interface Props {
  disabled: boolean;
  isFocused: boolean;
  hasSuffix: boolean;
}

const useStyles = ({ disabled, isFocused, hasSuffix }: Props) => {
  const { colors } = useTheme().theme;

  return StyleSheet.create({
    container: {
      width: '100%',
      borderRadius: 8,
      borderWidth: 1,
      backgroundColor: disabled ? colors.inputDisabled : colors.background,
      borderColor: isFocused ? colors.primary : colors.divider,
      flexDirection: 'row',
      alignItems: 'flex-start',
      paddingHorizontal: hasSuffix ? 8 : 16,
      minHeight: 100,
    },
    suffixContainer: {
      marginRight: 4,
      marginTop: 12,
    },
    textArea: {
      width: '100%',
      paddingVertical: 12,
      color: colors.text,
      minHeight: 76,
    },
  });
};

export default useStyles;
