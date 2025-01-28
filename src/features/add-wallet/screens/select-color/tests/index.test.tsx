import React from 'react';
import {
  screen,
  render,
  fireEvent,
  renderWithCustomProviders,
} from 'src/configs/test-utils';
import AddWalletFormContext from 'src/features/add-wallet/context/add-wallet-form';
import SelectColorScreen from 'src/features/add-wallet/screens/select-color';

const mockNavigation = {
  goBack: jest.fn(),
  navigate: jest.fn(),
};
jest.mock('@react-navigation/native', () => ({
  useNavigation: jest.fn(() => mockNavigation),
}));

describe('SelectColorScreen', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('should go back when back button is pressed', () => {
    renderWithCustomProviders(
      <AddWalletFormContext
        initialValues={{
          backgroundColor: '#2A5C99',
          color: '#EAC43D',
          icon: 'wallet',
          name: 'Carteira',
          type: 'personal',
        }}>
        <SelectColorScreen />
      </AddWalletFormContext>,
    );
    const backButton = screen.getByTestId('btn-left-icon');
    backButton.props.onClick();
    expect(mockNavigation.goBack).toHaveBeenCalledTimes(1);
  });

  it('should navigate correctly when an confirm', () => {
    renderWithCustomProviders(
      <AddWalletFormContext
        initialValues={{
          backgroundColor: '#2A5C99',
          color: '#EAC43D',
          icon: 'wallet',
          name: 'Carteira',
          type: 'personal',
        }}>
        <SelectColorScreen />
      </AddWalletFormContext>,
    );
    const institution = screen.getByText('Continuar');
    fireEvent.press(institution);
    expect(mockNavigation.navigate).toHaveBeenCalledWith('AddWalletStack', {
      screen: 'Name',
    });
  });
});
