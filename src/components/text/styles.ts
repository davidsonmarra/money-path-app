import {StyleSheet} from 'react-native';
import {colors} from 'src/configs/theme';

const getStyles = () =>
  StyleSheet.create({
    title: {
      fontSize: 24,
      fontWeight: 'bold',
      color: colors.title,
    },
    text: {
      fontSize: 16,
      fontWeight: 'normal',
      color: colors.text,
    },
    textBold: {
      fontSize: 16,
      fontWeight: 'bold',
      color: colors.text,
    },
  });

export default getStyles;
