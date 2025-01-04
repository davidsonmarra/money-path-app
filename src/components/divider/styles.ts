import {StyleSheet} from 'react-native';
import {useTheme} from 'src/hooks/useTheme';

interface Props {
  size: number;
}

const useStyles = ({size}: Props) => {
  const {colors} = useTheme().theme;

  return StyleSheet.create({
    horizontal: {
      width: '100%',
      height: size,
      backgroundColor: colors.divider,
    },
    vertical: {
      width: size,
      height: '100%',
      backgroundColor: colors.divider,
    },
  });
};

export default useStyles;
