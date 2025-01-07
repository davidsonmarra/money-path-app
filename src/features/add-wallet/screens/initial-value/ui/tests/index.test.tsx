import React from 'react';
import {fireEvent, render} from 'src/configs/test-utils';
import InitialValueContainer from 'src/features/add-wallet/screens/initial-value/ui';

let mockValue = '';
const mockSetValue = jest.fn().mockImplementation((value: string) => {
  mockValue = value;
});
const mockOnBackPress = jest.fn();
const mockOnConfirm = jest.fn();
const containerInstance = ({value = mockValue}) =>
  render(
    <InitialValueContainer
      value={value}
      onBack={mockOnBackPress}
      setValue={mockSetValue}
      onConfirm={mockOnConfirm}
    />,
  );

describe('InitialValueContainer', () => {
  beforeEach(() => {
    mockValue = '';
    jest.clearAllMocks();
  });

  it('should render correctly', () => {
    const container = containerInstance({}).toJSON();
    expect(container).toMatchSnapshot();
  });

  it('should call onBackPress', () => {
    const container = containerInstance({});
    container.getByTestId('btn-left-icon').props.onClick();
    expect(mockOnBackPress).toHaveBeenCalledTimes(1);
  });

  it('should setValue correctly', () => {
    const container = containerInstance({});
    const input = container.getByTestId('input-name');
    fireEvent.changeText(input, '100,00');
    expect(mockValue).toBe('100,00');
  });

  it('should call onConfirm', () => {
    const container = containerInstance({value: '100,00'});
    const button = container.getByText('Criar carteira');
    fireEvent.press(button);
    expect(mockOnConfirm).toHaveBeenCalledTimes(1);
  });
});
