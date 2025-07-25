import React from 'react';
import { View, DimensionValue } from 'react-native';
import Modal from 'react-native-modal';
import Text, { TextType } from 'src/components/text';
import useStyles from 'src/components/bottom-sheet/styles';

export interface Props {
  isVisible: boolean;
  onClose: () => void;
  title: string;
  children: React.ReactNode;
  maxHeight?: DimensionValue;
  testID?: string;
}

const BottomSheet = ({
  isVisible,
  onClose,
  title,
  children,
  maxHeight = '80%',
  testID,
}: Props) => {
  const styles = useStyles({ maxHeight });

  return (
    <Modal
      isVisible={isVisible}
      onBackdropPress={onClose}
      onBackButtonPress={onClose}
      style={styles.modal}
      animationIn="slideInUp"
      animationOut="slideOutDown"
      animationInTiming={300}
      animationOutTiming={300}
      backdropTransitionInTiming={300}
      backdropTransitionOutTiming={300}
      testID={testID}
    >
      <View style={styles.bottomSheet}>
        <View style={styles.header}>
          <Text type={TextType.headingMedium} style={styles.headerTitle}>
            {title}
          </Text>
        </View>
        <View style={styles.content}>{children}</View>
      </View>
    </Modal>
  );
};

export default BottomSheet;
