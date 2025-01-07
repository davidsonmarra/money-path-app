import React from 'react';
import {screen, render, fireEvent, waitFor} from 'src/configs/test-utils';
import InitialValueScreen from 'src/features/add-wallet/screens/initial-value';

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
  name: 'Name',
  amount: null,
  type: 'personal',
};
const mockSetInstitution = jest.fn().mockImplementation(institution => {
  mockInstitution = institution;
});
jest.mock('src/features/add-wallet/hooks/use-add-wallet-form', () => () => ({
  institution: mockInstitution,
  setInstitution: mockSetInstitution,
}));

describe('InitialValueScreen', () => {
  beforeEach(() => {
    mockInstitution.amount = null;
    jest.clearAllMocks();
  });

  it('should go back when back button is pressed', () => {
    render(<InitialValueScreen />);
    const backButton = screen.getByTestId('btn-left-icon');
    backButton.props.onClick();
    expect(mockNavigation.goBack).toHaveBeenCalledTimes(1);
  });

  it('should set value correctly', async () => {
    render(<InitialValueScreen />);
    const input = screen.getByTestId('input-name');
    await waitFor(() => {
      fireEvent.changeText(input, '100');
    });
    const button = screen.getByTestId('btn-confirm');
    fireEvent.press(button);
    expect(mockInstitution.amount).toBe(100);
  });

  it('should navigate correctly when confirm', async () => {
    render(<InitialValueScreen />);
    const input = screen.getByTestId('input-name');
    await waitFor(() => {
      fireEvent.changeText(input, '100');
    });
    const button = screen.getByText('Criar carteira');
    fireEvent.press(button);
    expect(mockNavigation.navigate).toHaveBeenCalledWith('AddWalletStack', {
      screen: 'Feedback',
    });
  });
});
