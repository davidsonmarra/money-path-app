import {StyleSheet} from 'react-native';
import {useTheme} from 'src/hooks/useTheme';

const useStyles = () => {
  const {colors} = useTheme().theme;

  return StyleSheet.create({
    descriptionColor: {
      color: colors.description,
    },
  });
};

export default useStyles;
