import {StyleSheet} from 'react-native';
import {colors} from 'src/configs/theme';

const getStyles = () =>
  StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: colors.background,
    },
  });

export default getStyles;
