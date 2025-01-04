import {StyleSheet} from 'react-native';
import {useTheme} from 'src/hooks/useTheme';

interface Props {}

const useStyles = ({}: Props) => {
  const {colors} = useTheme().theme;

  return StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'space-between',
      alignItems: 'center',
    },
    infoWrapper: {
      alignItems: 'center',
      gap: 16,
    },
    text: {
      textAlign: 'center',
    },
    feedbackIconWrapper: {
      justifyContent: 'center',
      alignItems: 'center',
      width: 180,
      height: 180,
      borderRadius: 90,
      marginBottom: 16,
    },
    successWrapper: {
      backgroundColor: colors.successLight,
    },
    errorWrapper: {
      backgroundColor: colors.errorLight,
    },
    warningWrapper: {
      backgroundColor: colors.warningLight,
    },
  });
};

export default useStyles;
