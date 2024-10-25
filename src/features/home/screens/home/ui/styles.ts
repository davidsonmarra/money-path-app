import {StyleSheet} from 'react-native';
import {colors} from 'src/configs/theme';

const getStyles = () =>
  StyleSheet.create({
    container: {
      flex: 1,
      flexDirection: 'column',
      justifyContent: 'space-between',
      padding: 24,
      backgroundColor: colors.background,
    },
  });

export default getStyles;
