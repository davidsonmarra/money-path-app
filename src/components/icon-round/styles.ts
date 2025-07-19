import { StyleSheet } from 'react-native';

interface Props {
  roundSize?: number;
}

const useStyles = ({ roundSize = 48 }: Props) => {
  return StyleSheet.create({
    container: {
      width: roundSize,
      height: roundSize,
      borderRadius: roundSize / 2,
      justifyContent: 'center',
      alignItems: 'center',
    },
  });
};

export default useStyles;
