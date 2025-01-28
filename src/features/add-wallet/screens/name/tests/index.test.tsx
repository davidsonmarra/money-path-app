import React from 'react';
import {screen, render, fireEvent, waitFor} from 'src/configs/test-utils';
import NameScreen from 'src/features/add-wallet/screens/name';

const mockNavigation = {
  goBack: jest.fn(),
  navigate: jest.fn(),
};
jest.mock('@react-navigation/native', () => ({
  useNavigation: jest.fn(() => mockNavigation),
}));

describe('NameScreen', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('should go back when back button is pressed', () => {
    render(<NameScreen />);
    const backButton = screen.getByTestId('btn-left-icon');
    backButton.props.onClick();
    expect(mockNavigation.goBack).toHaveBeenCalledTimes(1);
  });

  it('should set name correctly', async () => {
    render(<NameScreen />);
    const input = screen.getByTestId('input-name');
    await waitFor(() => {
      fireEvent.changeText(input, 'Wallet Name');
    });
    const button = screen.getByTestId('btn-confirm');
    fireEvent.press(button);
    expect(input.props.value).toBe('Wallet Name');
  });

  it('should navigate correctly when confirm', async () => {
    render(<NameScreen />);
    const input = screen.getByTestId('input-name');
    await waitFor(() => {
      fireEvent.changeText(input, 'Wallet Name');
    });
    const button = screen.getByText('Continuar');
    fireEvent.press(button);
    expect(mockNavigation.navigate).toHaveBeenCalledWith('AddWalletStack', {
      screen: 'InitialValue',
    });
  });
});
