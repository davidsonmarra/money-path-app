import {StyleSheet} from 'react-native';
import {useTheme} from 'src/hooks/useTheme';

interface Props {
  disabled: boolean;
  isFocused: boolean;
}

const useStyles = ({disabled, isFocused}: Props) => {
  const {colors} = useTheme().theme;

  return StyleSheet.create({
    container: {
      width: '100%',
      paddingHorizontal: 16,
      paddingVertical: 12,
      borderRadius: 8,
      borderWidth: 1,
      backgroundColor: disabled ? colors.inputDisabled : colors.background,
      borderColor: isFocused ? colors.primary : colors.divider,
      color: colors.text,
    },
  });
};

export default useStyles;
