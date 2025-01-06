import {StyleSheet} from 'react-native';
import {useTheme} from 'src/hooks/useTheme';

interface Props {
  backgroundColor?: string;
}

const useStyles = ({backgroundColor}: Props) => {
  const {colors} = useTheme().theme;

  return StyleSheet.create({
    container: {
      flex: 1,
      paddingHorizontal: 24,
      paddingVertical: 16,
      backgroundColor: colors.background,
      justifyContent: 'space-between',
    },
    icon: {
      width: 160,
      height: 160,
      borderRadius: 80,
      marginHorizontal: 'auto',
      marginBottom: 32,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: backgroundColor ?? colors.secondary,
    },
    colorWrapper: {
      marginVertical: 8,
      flexDirection: 'row',
      justifyContent: 'center',
      marginBottom: 32,
    },
    color: {
      width: 40,
      height: 40,
      borderRadius: 20,
      margin: 4,
      opacity: 0.3,
    },
    selectedColor: {
      opacity: 1,
    },
  });
};

export default useStyles;
