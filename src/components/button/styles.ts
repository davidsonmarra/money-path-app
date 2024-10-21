import {StyleSheet} from 'react-native';
import {colors} from '../../configs/theme';

interface Props {
  isDisabled: boolean;
}

const getStyles = ({isDisabled}: Props) =>
  StyleSheet.create({
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
    secondary: {},
  });

export default getStyles;
