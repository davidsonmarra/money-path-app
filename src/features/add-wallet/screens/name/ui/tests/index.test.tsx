import React from 'react';
import {fireEvent, render} from 'src/configs/test-utils';
import NameContainer from 'src/features/add-wallet/screens/name/ui';

let mockName = '';
const mockSetName = jest.fn().mockImplementation((value: string) => {
  mockName = value;
});
const mockOnBackPress = jest.fn();
const mockOnConfirm = jest.fn();
const containerInstance = ({name = mockName}) =>
  render(
    <NameContainer
      name={name}
      onBack={mockOnBackPress}
      setName={mockSetName}
      onConfirm={mockOnConfirm}
    />,
  );

describe('NameContainer', () => {
  beforeEach(() => {
    mockName = '';
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

  it('should setName correctly', () => {
    const container = containerInstance({});
    const input = container.getByTestId('input-name');
    fireEvent.changeText(input, 'Wallet Name');
    expect(mockName).toBe('Wallet Name');
  });

  it('should call onConfirm', () => {
    const container = containerInstance({name: 'Wallet Name'});
    const button = container.getByText('Criar carteira');
    fireEvent.press(button);
    expect(mockOnConfirm).toHaveBeenCalledTimes(1);
  });

  it('should disable button when name is empty', () => {
    const container = containerInstance({});
    const button = container.getByTestId('btn-confirm');
    expect(button.props.accessibilityState.disabled).toBeTruthy();
  });
});
