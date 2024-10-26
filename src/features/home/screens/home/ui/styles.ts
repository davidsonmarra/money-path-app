import {StyleSheet} from 'react-native';
import {useTheme} from 'src/hooks/theme';

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
  });
};

export default useStyles;
