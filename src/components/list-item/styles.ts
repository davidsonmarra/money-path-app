import {StyleSheet} from 'react-native';
import {useTheme} from 'src/hooks/useTheme';

interface Props {
  backgroundColor?: string;
}

const useStyles = ({backgroundColor}: Props) => {
  const {colors} = useTheme().theme;

  return StyleSheet.create({
    container: {
      paddingVertical: 12,
      flexDirection: 'row',
      alignItems: 'center',
    },
    icon: {
      marginRight: 16,
      width: 48,
      height: 48,
      borderRadius: 24,
      backgroundColor: backgroundColor ?? colors.secondary,
      justifyContent: 'center',
      alignItems: 'center',
    },
  });
};

export default useStyles;
