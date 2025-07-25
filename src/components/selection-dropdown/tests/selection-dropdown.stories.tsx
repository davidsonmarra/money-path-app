import React, { useState } from 'react';
import { View } from 'react-native';
import SelectionDropdown, { SelectionDropdownItem } from '../index';
import StorybookView from 'src/components/storybook-view';

const mockItems: SelectionDropdownItem[] = [
  { id: '1', label: 'Carteira Principal', value: 'main' },
  { id: '2', label: 'Carteira de Investimentos', value: 'investment' },
  { id: '3', label: 'Carteira de Emergência', value: 'emergency' },
  { id: '4', label: 'Carteira de Viagem', value: 'travel' },
];

const SelectionDropdownStory = () => {
  const [selectedItem, setSelectedItem] = useState<
    SelectionDropdownItem | undefined
  >();

  const [selectedItemWithIcon, setSelectedItemWithIcon] = useState<
    SelectionDropdownItem | undefined
  >();

  const handleSelectedItem = (item: SelectionDropdownItem) => {
    setSelectedItem(item);
    console.log('Selected:', item);
  };

  const handleSelectedItemWithIcon = (item: SelectionDropdownItem) => {
    setSelectedItemWithIcon(item);
    console.log('Selected with icon:', item);
  };

  return (
    <StorybookView>
      <View style={{ padding: 16, gap: 16 }}>
        <SelectionDropdown
          items={mockItems}
          selectedItem={selectedItem}
          onSelectedItem={handleSelectedItem}
          placeholder="Selecione uma carteira"
          testID="dropdown-example"
        />

        <SelectionDropdown
          items={mockItems}
          selectedItem={mockItems[1]}
          onSelectedItem={handleSelectedItem}
          placeholder="Carteira selecionada"
        />

        <SelectionDropdown
          items={mockItems}
          onSelectedItem={handleSelectedItem}
          placeholder="Dropdown desabilitado"
          disabled={true}
        />

        <SelectionDropdown
          items={mockItems}
          selectedItem={selectedItemWithIcon}
          onSelectedItem={handleSelectedItemWithIcon}
          placeholder="Selecione uma carteira (com ícone)"
          showIcon={true}
          testID="dropdown-with-icon"
        />

        <SelectionDropdown
          items={mockItems}
          selectedItem={mockItems[2]}
          onSelectedItem={handleSelectedItemWithIcon}
          placeholder="Carteira selecionada (com ícone)"
          showIcon={true}
        />

        <SelectionDropdown
          items={mockItems}
          onSelectedItem={handleSelectedItemWithIcon}
          placeholder="Dropdown desabilitado (com ícone)"
          disabled={true}
          showIcon={true}
        />
      </View>
    </StorybookView>
  );
};

export default {
  title: 'Components/SelectionDropdown',
  component: SelectionDropdownStory,
};

export const Default = () => <SelectionDropdownStory />;
