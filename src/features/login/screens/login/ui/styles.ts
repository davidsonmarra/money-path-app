import {StyleSheet} from 'react-native';
import {useTheme} from 'src/hooks/useTheme';

const useStyles = () => {
  const {colors} = useTheme().theme;

  return StyleSheet.create({
    container: {
      flex: 1,
      flexDirection: 'column',
      justifyContent: 'space-between',
      padding: 24,
      backgroundColor: colors.background,
    },
    logoContainer: {
      alignItems: 'center',
    },
  });
};

export default useStyles;
