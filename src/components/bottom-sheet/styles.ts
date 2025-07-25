import { StyleSheet, DimensionValue } from 'react-native';
import { useTheme } from 'src/hooks/useTheme';

interface Props {
  maxHeight: DimensionValue;
}

const useStyles = ({ maxHeight }: Props) => {
  const { colors } = useTheme().theme;

  return StyleSheet.create({
    modal: {
      justifyContent: 'flex-end',
      margin: 0,
      alignItems: 'stretch',
    },
    bottomSheet: {
      backgroundColor: colors.background,
      borderTopLeftRadius: 16,
      borderTopRightRadius: 16,
      paddingHorizontal: 24,
      paddingTop: 16,
      paddingBottom: 24,
      maxHeight,
      alignSelf: 'stretch',
      shadowColor: '#000',
      shadowOffset: {
        width: 0,
        height: -2,
      },
      shadowOpacity: 0.25,
      shadowRadius: 3.84,
      elevation: 5,
    },
    header: {
      paddingVertical: 16,
      borderBottomWidth: 1,
      borderBottomColor: colors.divider,
      marginBottom: 16,
    },
    headerTitle: {
      color: colors.text,
      textAlign: 'center',
    },
    content: {
      flexGrow: 1,
    },
    contentContainer: {
      paddingBottom: 16,
    },
  });
};

export default useStyles;
