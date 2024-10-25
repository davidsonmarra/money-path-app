import {StyleSheet} from 'react-native';
import {colors} from 'src/configs/theme';

const getStyles = () =>
  StyleSheet.create({
    container: {
      width: '100%',
      flexDirection: 'row',
      justifyContent: 'space-between',
      paddingHorizontal: 24,
      paddingVertical: 16,
      backgroundColor: colors.secondary,
    },
    profileImage: {
      width: 48,
      height: 48,
      borderRadius: 24,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: colors.primary,
    },
    textNameAbbreviation: {
      color: colors.secondary,
    },
    infoContainer: {
      flexDirection: 'row',
      alignItems: 'center',
    },
  });

export default getStyles;
