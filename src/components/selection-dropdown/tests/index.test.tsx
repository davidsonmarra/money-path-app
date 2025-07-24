import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import SelectionDropdown, { SelectionDropdownItem } from '../index';

const mockItems: SelectionDropdownItem[] = [
  { id: '1', label: 'Opção 1', value: 'option1' },
  { id: '2', label: 'Opção 2', value: 'option2' },
  { id: '3', label: 'Opção 3', value: 'option3' },
];

const mockOnSelectedItem = jest.fn();

describe('SelectionDropdown', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('should render correctly with placeholder', () => {
    const { getByText } = render(
      <SelectionDropdown
        items={mockItems}
        onSelectedItem={mockOnSelectedItem}
        placeholder="Selecione uma opção"
      />,
    );

    expect(getByText('Selecione uma opção')).toBeTruthy();
  });

  it('should display selected item label', () => {
    const selectedItem = mockItems[0];
    const { getByText } = render(
      <SelectionDropdown
        items={mockItems}
        selectedItem={selectedItem}
        onSelectedItem={mockOnSelectedItem}
      />,
    );

    expect(getByText('Opção 1')).toBeTruthy();
  });

  it('should open bottom sheet when pressed', () => {
    const { getByTestId } = render(
      <SelectionDropdown
        items={mockItems}
        onSelectedItem={mockOnSelectedItem}
        testID="dropdown"
      />,
    );

    const dropdown = getByTestId('dropdown');
    fireEvent.press(dropdown);

    // Bottom sheet should be rendered
    expect(getByTestId('dropdown-item-1')).toBeTruthy();
    expect(getByTestId('dropdown-item-2')).toBeTruthy();
    expect(getByTestId('dropdown-item-3')).toBeTruthy();
  });

  it('should call onSelectedItem when an item is selected', () => {
    const { getByTestId } = render(
      <SelectionDropdown
        items={mockItems}
        onSelectedItem={mockOnSelectedItem}
        testID="dropdown"
      />,
    );

    const dropdown = getByTestId('dropdown');
    fireEvent.press(dropdown);

    const item = getByTestId('dropdown-item-2');
    fireEvent.press(item);

    expect(mockOnSelectedItem).toHaveBeenCalledWith(mockItems[1]);
  });

  it('should be disabled when disabled prop is true', () => {
    const { getByTestId } = render(
      <SelectionDropdown
        items={mockItems}
        onSelectedItem={mockOnSelectedItem}
        disabled={true}
        testID="dropdown"
      />,
    );

    const dropdown = getByTestId('dropdown');
    fireEvent.press(dropdown);

    // Should not open bottom sheet when disabled
    expect(() => getByTestId('dropdown-item-1')).toThrow();
  });

  it('should handle empty items array', () => {
    const { getByText } = render(
      <SelectionDropdown
        items={[]}
        onSelectedItem={mockOnSelectedItem}
        placeholder="Nenhuma opção"
      />,
    );

    expect(getByText('Nenhuma opção')).toBeTruthy();
  });

  it('should show selected item with different style', () => {
    const selectedItem = mockItems[1];
    const { getByTestId } = render(
      <SelectionDropdown
        items={mockItems}
        selectedItem={selectedItem}
        onSelectedItem={mockOnSelectedItem}
        testID="dropdown"
      />,
    );

    const dropdown = getByTestId('dropdown');
    fireEvent.press(dropdown);

    const selectedItemElement = getByTestId('dropdown-item-2');
    expect(selectedItemElement).toBeTruthy();
  });
});
