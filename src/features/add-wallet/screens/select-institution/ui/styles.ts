import { StyleSheet } from 'react-native';
import { useTheme } from 'src/hooks/useTheme';

interface Props {
  backgroundColor?: string;
}

const useStyles = ({ backgroundColor }: Props) => {
  const { colors } = useTheme().theme;

  return StyleSheet.create({
    container: {
      flex: 1,
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
