import React, { useState } from 'react';
import TypeContainer from '../index';
import { SelectionGroupItem } from 'src/components/selection-group';
import StorybookView from 'src/components/storybook-view';

const mockTransferTypes: SelectionGroupItem[] = [
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

const TypeStory = () => {
  const [selectedIndex, setSelectedIndex] = useState(-1);

  const handleSelectedItem = (index: number, item: SelectionGroupItem) => {
    setSelectedIndex(index);
    console.log('Selected:', item);
  };

  return (
    <StorybookView>
      <TypeContainer
        onBack={() => console.log('Back pressed')}
        onConfirm={() => console.log('Confirm pressed')}
        transferTypes={mockTransferTypes}
        selectedTypeIndex={selectedIndex}
        onSelectedItem={handleSelectedItem}
      />
    </StorybookView>
  );
};

export default {
  title: 'Screens/MakeTransfer/Type',
  component: TypeStory,
};

export const Default = () => <TypeStory />;
