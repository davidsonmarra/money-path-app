import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import TypeContainer from 'src/features/make-transfer/screens/type/ui';
import { PrivateStackParamList } from 'src/features/navigation';
import useMakeTransferForm from 'src/features/make-transfer/hooks/make-transfer-form';
import { SelectionGroupItem } from 'src/components/selection-group';

type MakeTransferScreenNavigationProp = StackNavigationProp<
  PrivateStackParamList,
  'MakeTransferStack'
>;

const transferTypes: SelectionGroupItem[] = [
  {
    id: '1',
    label: 'Despesa',
    value: 'expense',
  },
  {
    id: '2',
    label: 'Receita',
    value: 'income',
  },
  {
    id: '3',
    label: 'Transferência entre carteiras',
    value: 'transfer',
  },
];

const TypeScreen = () => {
  const { watch, setValue } = useMakeTransferForm();
  const navigation = useNavigation<MakeTransferScreenNavigationProp>();

  const selectedType = watch('type');
  const selectedTypeIndex = transferTypes.findIndex(
    type => type.value === selectedType,
  );

  const handleOnConfirm = () => {
    navigation.navigate('MakeTransferStack', {
      screen: 'Amount',
    });
  };

  const handleOnBack = () => {
    navigation.goBack();
  };

  const handleOnSelectedItem = (index: number, item: SelectionGroupItem) => {
    setValue('type', item.value);
  };

  return (
    <TypeContainer
      onBack={handleOnBack}
      onConfirm={handleOnConfirm}
      transferTypes={transferTypes}
      selectedTypeIndex={selectedTypeIndex}
      onSelectedItem={handleOnSelectedItem}
    />
  );
};

export default TypeScreen;
