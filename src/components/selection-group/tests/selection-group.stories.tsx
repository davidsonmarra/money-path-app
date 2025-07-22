import React, { useState } from 'react';
import { View } from 'react-native';
import SelectionGroup, { SelectionGroupItem } from '../index';
import StorybookView from 'src/components/storybook-view';

const mockItems: SelectionGroupItem[] = [
  { id: '1', label: 'Opção 1', value: 'option1' },
  { id: '2', label: 'Opção 2', value: 'option2' },
  { id: '3', label: 'Opção 3', value: 'option3' },
  { id: '4', label: 'Opção 4', value: 'option4' },
  { id: '5', label: 'Opção 5', value: 'option5' },
];

const SelectionGroupStory = () => {
  const [selectedIndex, setSelectedIndex] = useState(0);

  const handleSelectedItem = (index: number, item: SelectionGroupItem) => {
    setSelectedIndex(index);
    console.log('Selected:', item);
  };

  return (
    <StorybookView>
      <SelectionGroup
        items={mockItems}
        selectedItemIndex={selectedIndex}
        onSelectedItem={handleSelectedItem}
      />
    </StorybookView>
  );
};

export default {
  title: 'Components/SelectionGroup',
  component: SelectionGroupStory,
};

export const Default = () => <SelectionGroupStory />;
