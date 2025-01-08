import {StyleSheet} from 'react-native';
import {useTheme} from 'src/hooks/useTheme';

interface Props {
  isDisabled: boolean;
}

const useStyles = ({isDisabled}: Props) => {
  const {colors} = useTheme().theme;

  return StyleSheet.create({
    container: {
      width: '100%',
      height: 48,
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      paddingVertical: 12,
      paddingHorizontal: 24,
      borderRadius: 12,
      opacity: 1,
    },
    primary: {
      backgroundColor: isDisabled ? colors.disabled : colors.primary,
    },
    primaryText: {
      color: colors.buttonText,
    },
    secondary: {},
    secondaryText: {
      color: colors.secondary,
    },
  });
};

export default useStyles;
