import {StyleSheet} from 'react-native';
import {useTheme} from 'src/hooks/theme';

const useStyles = () => {
  const {colors} = useTheme().theme;

  return StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      paddingHorizontal: 16,
      backgroundColor: colors.background,
    },
  });
};

export default useStyles;
