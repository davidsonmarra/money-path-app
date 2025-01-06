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

let mockInstitution = {
  backgroundColor: '#2A5C99',
  color: '#EAC43D',
  icon: 'wallet',
  name: '',
  type: 'personal',
};
const mockSetInstitution = jest.fn().mockImplementation(institution => {
  mockInstitution = institution;
});
jest.mock('src/features/add-wallet/hooks/use-add-wallet-form', () => () => ({
  institution: mockInstitution,
  setInstitution: mockSetInstitution,
}));

describe('NameScreen', () => {
  beforeEach(() => {
    mockInstitution.name = '';
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
    expect(mockInstitution.name).toBe('Wallet Name');
  });

  it('should navigate correctly when confirm', async () => {
    render(<NameScreen />);
    const input = screen.getByTestId('input-name');
    await waitFor(() => {
      fireEvent.changeText(input, 'Wallet Name');
    });
    const button = screen.getByText('Criar carteira');
    fireEvent.press(button);
    expect(mockNavigation.navigate).toHaveBeenCalledWith('AddWalletStack', {
      screen: 'Feedback',
    });
  });
});
