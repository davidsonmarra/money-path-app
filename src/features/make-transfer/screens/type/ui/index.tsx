import React from 'react';
import { View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import {
  Button,
  ButtonType,
  Header,
  SelectionGroup,
  Spacer,
  Text,
  TextType,
} from 'src/components';
import useStyles from 'src/features/make-transfer/screens/type/ui/styles';
import { SelectionGroupItem } from 'src/components/selection-group';

interface Props {
  onBack: () => void;
  onConfirm: () => void;
  transferTypes: SelectionGroupItem[];
  selectedTypeIndex: number;
  onSelectedItem: (index: number, item: SelectionGroupItem) => void;
}

const TypeContainer = ({
  onBack,
  onConfirm,
  transferTypes,
  selectedTypeIndex,
  onSelectedItem,
}: Props) => {
  const styles = useStyles();

  return (
    <>
      <Header text="Tipo de transação" onLeftIconPress={onBack} />
      <SafeAreaView edges={['bottom']} style={styles.container}>
        <View>
          <Text type={TextType.headingMedium}>Selecione o tipo</Text>
          <Spacer height={12} />
          <Text type={TextType.textMediumRegular}>
            Para criar uma transferência, precisamos que você selecione o tipo
            de transação:
          </Text>
        </View>
        <View style={styles.selectionContainer}>
          <SelectionGroup
            items={transferTypes}
            selectedItemIndex={selectedTypeIndex}
            onSelectedItem={onSelectedItem}
          />
        </View>
        <View>
          <Button
            type={ButtonType.primary}
            text="Continuar"
            onPress={onConfirm}
            isDisabled={selectedTypeIndex === -1}
            testID="btn-confirm"
          />
        </View>
      </SafeAreaView>
    </>
  );
};

export default TypeContainer;
