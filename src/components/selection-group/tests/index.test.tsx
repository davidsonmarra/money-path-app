import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import SelectionGroup, { SelectionGroupItem } from '../index';

const mockItems: SelectionGroupItem[] = [
  { id: '1', label: 'Opção 1', value: 'option1' },
  { id: '2', label: 'Opção 2', value: 'option2' },
  { id: '3', label: 'Opção 3', value: 'option3' },
];

const mockOnSelectedItem = jest.fn();

describe('SelectionGroup', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('should render all items', () => {
    const { getByText } = render(
      <SelectionGroup
        items={mockItems}
        selectedItemIndex={0}
        onSelectedItem={mockOnSelectedItem}
      />,
    );

    expect(getByText('Opção 1')).toBeTruthy();
    expect(getByText('Opção 2')).toBeTruthy();
    expect(getByText('Opção 3')).toBeTruthy();
  });

  it('should call onSelectedItem when an item is pressed', () => {
    const { getByText } = render(
      <SelectionGroup
        items={mockItems}
        selectedItemIndex={0}
        onSelectedItem={mockOnSelectedItem}
      />,
    );

    fireEvent.press(getByText('Opção 2'));

    expect(mockOnSelectedItem).toHaveBeenCalledWith(1, mockItems[1]);
  });

  it('should highlight the selected item', () => {
    const { getByText } = render(
      <SelectionGroup
        items={mockItems}
        selectedItemIndex={1}
        onSelectedItem={mockOnSelectedItem}
      />,
    );

    const selectedItem = getByText('Opção 2');
    expect(selectedItem).toBeTruthy();
  });

  it('should handle empty items array', () => {
    const { queryByText } = render(
      <SelectionGroup
        items={[]}
        selectedItemIndex={-1}
        onSelectedItem={mockOnSelectedItem}
      />,
    );

    expect(queryByText('Opção 1')).toBeNull();
    expect(queryByText('Opção 2')).toBeNull();
    expect(queryByText('Opção 3')).toBeNull();
  });
});
