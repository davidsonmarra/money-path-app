import {StyleSheet} from 'react-native';

const useStyles = () => {
  return StyleSheet.create({
    main: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
    },
    leadingContainer: {
      marginLeft: 10,
    },
    trailingContainer: {
      marginRight: 10,
      flex: 1,
      alignItems: 'flex-end',
    },
    contentContainer: {
      flex: 1,
      paddingHorizontal: 10,
    },
  });
};

export default useStyles;
