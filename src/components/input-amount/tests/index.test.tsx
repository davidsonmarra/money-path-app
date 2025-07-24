import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import InputAmount from 'src/components/input-amount';

describe('InputAmount', () => {
  const mockOnChangeText = jest.fn();

  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('should render correctly with placeholder', () => {
    const { getByPlaceholderText } = render(
      <InputAmount onChangeText={mockOnChangeText} placeholder="0,00" />,
    );

    expect(getByPlaceholderText('0,00')).toBeTruthy();
  });

  it('should render with custom placeholder', () => {
    const { getByPlaceholderText } = render(
      <InputAmount
        onChangeText={mockOnChangeText}
        placeholder="Digite o valor"
      />,
    );

    expect(getByPlaceholderText('Digite o valor')).toBeTruthy();
  });

  it('should display value correctly', () => {
    const { getByDisplayValue } = render(
      <InputAmount value="1000" onChangeText={mockOnChangeText} />,
    );

    expect(getByDisplayValue('R$ 1000')).toBeTruthy();
  });

  it('should call onChangeText with numeric value only', () => {
    const { getByDisplayValue } = render(
      <InputAmount value="1000" onChangeText={mockOnChangeText} />,
    );

    const input = getByDisplayValue('R$ 1000');
    fireEvent.changeText(input, '1500');

    expect(mockOnChangeText).toHaveBeenCalledWith('1500');
  });

  it('should remove non-numeric characters', () => {
    const { getByDisplayValue } = render(
      <InputAmount value="1000" onChangeText={mockOnChangeText} />,
    );

    const input = getByDisplayValue('R$ 1000');
    fireEvent.changeText(input, '15abc00');

    expect(mockOnChangeText).toHaveBeenCalledWith('1500');
  });

  it('should limit to 10 digits', () => {
    const { getByDisplayValue } = render(
      <InputAmount value="1000" onChangeText={mockOnChangeText} />,
    );

    const input = getByDisplayValue('R$ 1000');
    fireEvent.changeText(input, '123456789012345');

    expect(mockOnChangeText).toHaveBeenCalledWith('1234567890');
  });

  it('should have numeric keyboard type', () => {
    const { getByDisplayValue } = render(
      <InputAmount value="1000" onChangeText={mockOnChangeText} />,
    );

    const input = getByDisplayValue('R$ 1000');
    expect(input.props.keyboardType).toBe('numeric');
  });

  it('should select text on focus', () => {
    const { getByDisplayValue } = render(
      <InputAmount value="1000" onChangeText={mockOnChangeText} />,
    );

    const input = getByDisplayValue('R$ 1000');
    expect(input.props.selectTextOnFocus).toBe(true);
  });
});
