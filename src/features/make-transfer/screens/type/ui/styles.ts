import { StyleSheet } from 'react-native';

const useStyles = () => {
  return StyleSheet.create({
    container: {
      flex: 1,
      paddingHorizontal: 24,
      paddingVertical: 16,
    },
    selectionContainer: {
      flex: 1,
      marginTop: 24,
    },
  });
};

export default useStyles;
