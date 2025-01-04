import {StyleSheet} from 'react-native';
import {useTheme} from 'src/hooks/useTheme';

const useGetStyles = () => {
  const {colors} = useTheme().theme;

  return StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: colors.background,
    },
  });
};

export default useGetStyles;
