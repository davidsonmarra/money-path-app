import React from 'react';
import { screen, render, fireEvent, waitFor } from 'src/configs/test-utils';
import AmountScreen from 'src/features/make-transfer/screens/amount';

const mockNavigation = {
  goBack: jest.fn(),
  navigate: jest.fn(),
};
jest.mock('@react-navigation/native', () => ({
  useNavigation: jest.fn(() => mockNavigation),
}));

const mockWallets = [
  {
    id: '1',
    name: 'Carteira 1',
    icon: 'wallet',
    backgroundColor: '#FF0000',
    balance: 1000,
  },
  {
    id: '2',
    name: 'Carteira 2',
    icon: 'bank',
    backgroundColor: '#00FF00',
    balance: 2000,
  },
];

jest.mock('src/hooks/useWallet', () => ({
  useWalletStore: jest.fn(() => ({
    wallets: mockWallets,
    getWallets: jest.fn(),
  })),
}));

describe('AmountScreen', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('should go back when back button is pressed', () => {
    render(<AmountScreen />);
    const backButton = screen.getByTestId('btn-left-icon');
    backButton.props.onClick();
    expect(mockNavigation.goBack).toHaveBeenCalledTimes(1);
  });

  it('should change amount correctly', async () => {
    render(<AmountScreen />);
    const input = screen.getByTestId('input-amount');
    await waitFor(() => {
      fireEvent.changeText(input, '1000');
    });
    expect(input.props.value).toBe('R$ 10,00');
  });

  it('should open date picker when date button is pressed', () => {
    render(<AmountScreen />);
    const dateButton = screen.getByTestId('date-button');
    fireEvent.press(dateButton);
    expect(screen.getByTestId('date-picker-bottom-sheet')).toBeTruthy();
  });

  it('should navigate correctly when confirm', async () => {
    render(<AmountScreen />);
    const input = screen.getByTestId('input-amount');
    await waitFor(() => {
      fireEvent.changeText(input, '1000');
    });
    const button = screen.getByTestId('btn-confirm');
    fireEvent.press(button);
    expect(mockNavigation.navigate).toHaveBeenCalledWith('MakeTransferStack', {
      screen: 'Title',
    });
  });

  it('should select source wallet correctly', () => {
    render(<AmountScreen />);
    const dropdown = screen.getByTestId('source-wallet-dropdown');
    expect(dropdown).toBeTruthy();
  });
});
