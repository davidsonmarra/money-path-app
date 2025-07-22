import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import TypeContainer from '../index';
import { SelectionGroupItem } from 'src/components/selection-group';

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

const mockProps = {
  onBack: jest.fn(),
  onConfirm: jest.fn(),
  transferTypes: mockTransferTypes,
  selectedTypeIndex: -1,
  onSelectedItem: jest.fn(),
};

describe('TypeContainer', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('should render correctly', () => {
    const { getByText } = render(<TypeContainer {...mockProps} />);

    expect(getByText('Tipo de transação')).toBeTruthy();
    expect(getByText('Selecione o tipo')).toBeTruthy();
    expect(getByText('Despesa')).toBeTruthy();
    expect(getByText('Receita')).toBeTruthy();
    expect(getByText('Transferência entre carteiras')).toBeTruthy();
  });

  it('should call onBack when header back button is pressed', () => {
    const { getByTestId } = render(<TypeContainer {...mockProps} />);

    const backButton = getByTestId('btn-left-icon');
    fireEvent.press(backButton);

    expect(mockProps.onBack).toHaveBeenCalled();
  });

  it('should call onConfirm when continue button is pressed', () => {
    const propsWithSelection = {
      ...mockProps,
      selectedTypeIndex: 0,
    };

    const { getByTestId } = render(<TypeContainer {...propsWithSelection} />);

    const continueButton = getByTestId('btn-confirm');
    fireEvent.press(continueButton);

    expect(mockProps.onConfirm).toHaveBeenCalled();
  });

  it('should have continue button disabled when no type is selected', () => {
    const { getByTestId } = render(<TypeContainer {...mockProps} />);

    const continueButton = getByTestId('btn-confirm');
    expect(continueButton.props.accessibilityState.disabled).toBe(true);
  });

  it('should have continue button enabled when a type is selected', () => {
    const propsWithSelection = {
      ...mockProps,
      selectedTypeIndex: 0,
    };

    const { getByTestId } = render(<TypeContainer {...propsWithSelection} />);

    const continueButton = getByTestId('btn-confirm');
    expect(continueButton.props.accessibilityState.disabled).toBe(false);
  });
});
