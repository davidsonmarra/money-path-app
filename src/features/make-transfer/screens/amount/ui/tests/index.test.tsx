import React from 'react';
import { fireEvent, render } from 'src/configs/test-utils';
import AmountContainer from 'src/features/make-transfer/screens/amount/ui';
import { WalletUiProps } from 'src/features/make-transfer/screens/amount';
import { IconType } from 'src/assets/icons/types';

// Mock react-native-modal
jest.mock('react-native-modal', () => {
  const React = require('react');
  const { View } = require('react-native');

  return function MockModal({
    isVisible,
    children,
    onBackdropPress,
    onBackButtonPress,
    ...props
  }: any) {
    if (!isVisible) return null;

    return React.createElement(
      View,
      {
        testID: 'modal',
        onPress: onBackdropPress,
        ...props,
      },
      children,
    );
  };
});

// Mock react-native-date-picker
jest.mock('react-native-date-picker', () => {
  const React = require('react');
  const { View, Text } = require('react-native');

  return function MockDatePicker({ date, onDateChange, ...props }: any) {
    return React.createElement(
      View,
      {
        testID: 'date-picker',
        onPress: () => onDateChange && onDateChange(new Date()),
        ...props,
      },
      React.createElement(Text, {}, 'DatePicker Mock'),
    );
  };
});

// Mock BottomSheet component
jest.mock('src/components/bottom-sheet', () => {
  const React = require('react');
  const { View, Text } = require('react-native');

  return function MockBottomSheet({
    isVisible,
    onClose,
    title,
    children,
    testID,
    ...props
  }: any) {
    if (!isVisible) return null;

    return React.createElement(
      View,
      {
        testID: testID || 'bottom-sheet',
        onClose: onClose,
        ...props,
      },
      [React.createElement(Text, { key: 'title' }, title), children],
    );
  };
});

const mockWallets: WalletUiProps[] = [
  {
    id: '1',
    label: 'Carteira 1',
    icon: IconType.wallet,
    iconBackground: '#FF0000',
    type: 'wallet',
    balance: 1000,
    value: '1',
  },
  {
    id: '2',
    label: 'Carteira 2',
    icon: IconType.bank,
    iconBackground: '#00FF00',
    type: 'bank',
    balance: 2000,
    value: '2',
  },
];

const mockOnBack = jest.fn();
const mockOnConfirm = jest.fn();
const mockOnChangeAmount = jest.fn();
const mockOnSelectSourceWallet = jest.fn();
const mockOnSelectDestinationWallet = jest.fn();
const mockOnSwapWallets = jest.fn();
const mockOnDateChange = jest.fn();
const mockOnOpenDatePicker = jest.fn();
const mockOnCloseDatePicker = jest.fn();
const mockOnConfirmDate = jest.fn();

const containerInstance = (props = {}) =>
  render(
    <AmountContainer
      onBack={mockOnBack}
      onConfirm={mockOnConfirm}
      amount="0,00"
      onChangeAmount={mockOnChangeAmount}
      transferBeetweenWallets={false}
      wallets={mockWallets}
      selectedSourceWallet={mockWallets[0]}
      selectedDestinationWallet={mockWallets[1]}
      onSelectSourceWallet={mockOnSelectSourceWallet}
      onSelectDestinationWallet={mockOnSelectDestinationWallet}
      onSwapWallets={mockOnSwapWallets}
      timestamp={new Date()}
      showDatePicker={false}
      onDateChange={mockOnDateChange}
      onOpenDatePicker={mockOnOpenDatePicker}
      onCloseDatePicker={mockOnCloseDatePicker}
      onConfirmDate={mockOnConfirmDate}
      tempDate={null}
      {...props}
    />,
  );

describe('AmountContainer', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('should render correctly', () => {
    const container = containerInstance({}).toJSON();
    expect(container).toMatchSnapshot();
  });

  it('should call onBack when back button is pressed', () => {
    const container = containerInstance({});
    container.getByTestId('btn-left-icon').props.onClick();
    expect(mockOnBack).toHaveBeenCalledTimes(1);
  });

  it('should call onChangeAmount when amount input changes', () => {
    const container = containerInstance({});
    const input = container.getByTestId('input-amount');
    fireEvent.changeText(input, '1000');
    expect(mockOnChangeAmount).toHaveBeenCalledWith('1000');
  });

  it('should call onOpenDatePicker when date button is pressed', () => {
    const container = containerInstance({});
    const dateButton = container.getByTestId('date-button');
    fireEvent.press(dateButton);
    expect(mockOnOpenDatePicker).toHaveBeenCalledTimes(1);
  });

  it('should call onConfirm when confirm button is pressed', () => {
    const container = containerInstance({});
    const button = container.getByTestId('btn-confirm');
    fireEvent.press(button);
    expect(mockOnConfirm).toHaveBeenCalledTimes(1);
  });

  it('should show date picker when showDatePicker is true', () => {
    const container = containerInstance({ showDatePicker: true });
    expect(container.getByTestId('date-picker-bottom-sheet')).toBeTruthy();
    expect(container.getByTestId('date-picker')).toBeTruthy();
  });

  it('should call onCloseDatePicker when date picker is closed', () => {
    const container = containerInstance({ showDatePicker: true });
    const bottomSheet = container.getByTestId('date-picker-bottom-sheet');
    bottomSheet.props.onClose();
    expect(mockOnCloseDatePicker).toHaveBeenCalledTimes(1);
  });

  it('should call onConfirmDate when confirm date button is pressed', () => {
    const container = containerInstance({
      showDatePicker: true,
      tempDate: new Date(),
    });
    const confirmButton = container.getByText('Confirmar');
    fireEvent.press(confirmButton);
    expect(mockOnConfirmDate).toHaveBeenCalledTimes(1);
  });

  it('should show transfer between wallets UI when transferBeetweenWallets is true', () => {
    const container = containerInstance({ transferBeetweenWallets: true });
    expect(container.getByText('Selecione as carteiras')).toBeTruthy();
    expect(container.getByText('De')).toBeTruthy();
    expect(container.getByText('Para')).toBeTruthy();
  });

  it('should show single wallet UI when transferBeetweenWallets is false', () => {
    const container = containerInstance({ transferBeetweenWallets: false });
    expect(container.getByText('Selecione a carteira')).toBeTruthy();
  });

  it('should call onSwapWallets when swap button is pressed', () => {
    const container = containerInstance({ transferBeetweenWallets: true });
    const swapButton = container.getByTestId('swap-wallets-button');
    fireEvent.press(swapButton);
    expect(mockOnSwapWallets).toHaveBeenCalledTimes(1);
  });
});
