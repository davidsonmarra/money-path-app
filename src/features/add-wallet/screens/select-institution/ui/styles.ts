import {StyleSheet} from 'react-native';
import {useTheme} from 'src/hooks/theme';

const useStyles = () => {
  const {colors} = useTheme().theme;

  return StyleSheet.create({
    container: {
      paddingHorizontal: 24,
      paddingVertical: 16,
      backgroundColor: colors.background,
    },
    sectionListContent: {
      flexGrow: 1,
      paddingBottom: 90,
    },
  });
};

export default useStyles;
