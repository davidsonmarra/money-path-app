import {StyleSheet} from 'react-native';
import {useTheme} from 'src/hooks/theme';

interface Props {
  insetTop: number;
}

const useStyles = ({insetTop}: Props) => {
  const {colors} = useTheme().theme;

  return StyleSheet.create({
    container: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      width: '100%',
      paddingTop: insetTop + 12,
      paddingBottom: 12,
      paddingHorizontal: 16,
      backgroundColor: colors.secondary,
    },
    textColor: {
      color: colors.textOnSecondary,
    },
  });
};

export default useStyles;
