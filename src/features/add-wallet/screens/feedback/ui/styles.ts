import {StyleSheet} from 'react-native';
import {useTheme} from 'src/hooks/useTheme';

const useStyles = () => {
  const {colors} = useTheme().theme;

  return StyleSheet.create({
    container: {
      flex: 1,
      paddingHorizontal: 24,
      paddingVertical: 16,
      backgroundColor: colors.background,
    },
    containerLoading: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
  });
};

export default useStyles;
